import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useNavigate } from 'react-router-dom';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  links?: { title: string; uri: string }[];
}

const NeighborAI: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'สวัสดีจ้าเพื่อนบ้าน! วันนี้อยากหาข้อมูลร้านเด็ดหรือเทรนด์อาหารอะไรจ๊ะ? แอดมินเช็คข้อมูลล่าสุดจาก Google ให้ได้เลยนะ! 😊' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (customMsg?: string) => {
    const userMsg = customMsg || input.trim();
    if (!userMsg) return;
    
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ role: 'user', parts: [{ text: userMsg }] }],
        config: {
          systemInstruction: 'คุณคือ "แอดมินเพื่อนบ้าน" ของ BaanPaWan แอปส่งอาหารในหมู่บ้าน. ใช้ภาษาเป็นกันเอง สุภาพ มีคำลงท้าย "จ้ะ/จ๊ะ". หากผู้ใช้ถามเรื่องร้านอาหารหรือเทรนด์ ให้ใช้ความสามารถในการค้นหาข้อมูล และสรุปให้เข้าใจง่าย.',
          tools: [{ googleSearch: {} }],
        }
      });

      const text = response.text || 'แฮะๆ ข้อมูลตรงนี้แอดมินยังหาไม่เจอ ลองถามแบบอื่นดูนะจ๊ะ!';
      const links = response.candidates?.[0]?.groundingMetadata?.groundingChunks
        ?.filter(chunk => chunk.web)
        .map(chunk => ({ title: chunk.web?.title || 'แหล่งข้อมูล', uri: chunk.web?.uri || '#' }));

      setMessages(prev => [...prev, { role: 'assistant', content: text, links }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'ขอโทษทีจ้ะเพื่อนบ้าน สงสัยระบบจะขัดข้อง ลองใหม่อีกทีนะ!' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-text-main/70 backdrop-blur-xl animate-fade-in">
      <div className="mt-auto bg-background-light dark:bg-background-dark rounded-t-[3.5rem] h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-slide-up">
        <div className="px-8 py-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between glass">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-primary flex items-center justify-center shadow-floating">
              <span className="material-symbols-outlined text-primary-content">smart_toy</span>
            </div>
            <div>
              <h3 className="font-black text-lg text-text-main dark:text-white font-thai leading-none">แอดมินเพื่อนบ้าน AI</h3>
              <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mt-1">Powered by Google Search</p>
            </div>
          </div>
          <button onClick={onClose} className="size-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
          {messages.map((m, i) => (
            <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] px-5 py-4 rounded-[1.5rem] text-sm font-thai leading-relaxed ${
                m.role === 'user' ? 'bg-primary text-primary-content font-bold rounded-tr-none' : 'bg-white dark:bg-surface-dark text-text-main dark:text-gray-200 rounded-tl-none border border-gray-100 dark:border-gray-800'
              }`}>
                {m.content}
                {m.links && m.links.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-[10px] font-black uppercase text-gray-400 mb-2">อ้างอิงข้อมูลจาก:</p>
                    <div className="flex flex-wrap gap-2">
                      {m.links.map((link, li) => (
                        <a key={li} href={link.uri} target="_blank" rel="noopener noreferrer" className="text-[10px] bg-primary/10 text-primary-dark px-2 py-1 rounded-lg font-bold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">link</span> {link.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex items-start gap-2">
              <div className="bg-white dark:bg-surface-dark px-5 py-4 rounded-[1.5rem] rounded-tl-none flex gap-1 items-center shadow-premium">
                <div className="size-1.5 bg-primary rounded-full animate-bounce"></div>
                <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-12">
          <div className="flex gap-3 items-center bg-gray-100 dark:bg-gray-900 rounded-[2rem] p-2 pl-6">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="ถามเทรนด์อาหารล่าสุด..."
              className="flex-1 bg-transparent border-none outline-none font-thai text-sm text-text-main dark:text-white"
            />
            <button onClick={() => handleSend()} className="size-12 rounded-full bg-primary flex items-center justify-center text-primary-content">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeighborAI;