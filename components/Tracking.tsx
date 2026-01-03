import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Tracking: React.FC = () => {
  const navigate = useNavigate();
  const [showRiderMsg, setShowRiderMsg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowRiderMsg(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-background-dark min-h-screen flex flex-col relative overflow-hidden font-body">
      {/* Dynamic Map Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center grayscale opacity-60 dark:opacity-30 blur-[2px]" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCIFUkGn5NyXLb_aLVOPE_cCKUvaR85pl8sDzkQ9WVltY48CEOERctKsE16y3CO_GS0byR7KduFnkqLx48A2-x0Q-PifsWQ_Mo_hJQTJ1xgtszGdHt_PGuD0dtBNDuKnqf2tqxVBP82MUynuSK4MbxuIeezFVus2Ize-O3CI0hAvfsuO_CVUS8lMb9LdzHDAImjidBg_Hb3oUAP7jDBuQSgQSqOR-b2wPKZ8plONN1lzR5bwI67zutiIdVlpu8Q_Xvz66VlmNKT3E")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/60 via-transparent to-background-light dark:from-black/60 dark:to-background-dark"></div>
      </div>

      {/* Floating Header */}
      <header className="relative z-20 px-6 pt-14 flex items-center justify-between">
        <button 
          onClick={() => navigate('/')}
          className="size-12 rounded-2xl glass shadow-premium flex items-center justify-center text-text-main dark:text-white active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="glass px-6 py-2.5 rounded-2xl shadow-premium border border-white/50 dark:border-gray-800">
           <div className="flex items-center gap-2">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
             </span>
             <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] text-center leading-none">Live Tracking</p>
           </div>
        </div>
        <button className="size-12 rounded-2xl glass shadow-premium flex items-center justify-center text-text-main dark:text-white active:scale-90 transition-transform">
          <span className="material-symbols-outlined">headset_mic</span>
        </button>
      </header>

      {/* Interactive Map Visuals */}
      <div className="flex-1 relative z-10">
        {/* User Marker */}
        <div className="absolute top-[35%] right-[25%]">
          <div className="relative group">
            <div className="size-12 bg-text-main dark:bg-white rounded-full border-4 border-primary shadow-floating flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl material-symbols-filled">home</span>
            </div>
            <div className="absolute -inset-6 bg-primary rounded-full opacity-10 animate-ping"></div>
          </div>
        </div>

        {/* Rider Marker with Simulated Message */}
        <div className="absolute bottom-[38%] left-[25%] transition-all duration-[3000ms] ease-in-out">
          <div className="flex flex-col items-center gap-3">
            {showRiderMsg && (
              <div className="bg-white dark:bg-surface-dark px-4 py-3 rounded-2xl shadow-premium border border-primary/20 animate-slide-up relative mb-2 max-w-[150px]">
                <p className="text-[11px] font-black font-thai text-text-main dark:text-white leading-snug">"กำลังจะเลี้ยวเข้าซอยบ้านแล้วจ้ะ!"</p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-surface-dark border-r border-b border-primary/10 rotate-45"></div>
              </div>
            )}
            <div className="relative">
              <div className="size-16 bg-primary rounded-[1.8rem] shadow-floating flex items-center justify-center border-4 border-white dark:border-surface-dark transform hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary-content text-[36px]">delivery_dining</span>
              </div>
              <div className="absolute -bottom-1 -right-1 size-5 bg-green-500 rounded-full border-4 border-white dark:border-surface-dark"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Sheet */}
      <div className="relative z-20 px-6 pb-12">
        <div className="bg-white dark:bg-surface-dark rounded-[3.5rem] p-8 shadow-[0_-15px_60px_rgba(0,0,0,0.18)] border border-gray-50 dark:border-gray-800 animate-slide-up">
          
          <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-5">
              <div className="relative size-16">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" 
                  alt="Rider" 
                  className="w-full h-full object-cover rounded-[1.8rem] shadow-premium ring-4 ring-primary/10"
                />
                <div className="absolute -bottom-1 -right-1 bg-primary text-primary-content text-[10px] font-black px-2 py-0.5 rounded-lg border-2 border-white">4.9 ★</div>
              </div>
              <div>
                <h3 className="text-xl font-black text-text-main dark:text-white font-thai leading-tight">พี่สมชาย เพื่อนบ้านซอย 2</h3>
                <p className="text-xs font-bold text-text-muted dark:text-gray-400 font-thai flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">motorcycle</span> ฮอนด้า เวฟสีน้ำเงิน • 1กข 1234
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="size-12 rounded-2xl bg-primary shadow-floating text-primary-content flex items-center justify-center active:scale-90 transition-all hover:bg-primary-dark">
                <span className="material-symbols-outlined text-[24px]">call</span>
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Estimated Arrival</p>
                <div className="flex items-baseline gap-2">
                   <h4 className="text-4xl font-black text-text-main dark:text-white font-thai">อีก 10</h4>
                   <span className="text-primary text-xl font-black font-thai">นาที</span>
                </div>
              </div>
              <div className="size-20 rounded-full border-[8px] border-primary/10 flex items-center justify-center relative group">
                <svg className="absolute inset-0 size-20 -rotate-90">
                  <circle cx="40" cy="40" r="32" fill="transparent" stroke="#f4c61f" strokeWidth="8" strokeDasharray="201" strokeDashoffset="50" strokeLinecap="round" className="transition-all duration-1000" />
                </svg>
                <div className="text-center group-hover:scale-110 transition-transform">
                  <p className="text-[10px] font-black text-primary uppercase leading-none">Status</p>
                  <p className="text-sm font-black text-text-main dark:text-white mt-0.5 leading-none">NEAR</p>
                </div>
              </div>
            </div>

            {/* Premium Progress Visual */}
            <div className="relative px-2">
              <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden flex shadow-inner">
                <div className="h-full bg-gradient-to-r from-primary/60 to-primary w-[80%] rounded-full shadow-lg animate-pulse"></div>
              </div>
              <div className="flex justify-between mt-4">
                 <div className="flex flex-col items-center gap-2">
                    <div className="size-2 bg-primary rounded-full shadow-lg ring-4 ring-primary/20"></div>
                    <span className="text-[10px] font-black font-thai text-text-main dark:text-white">รับออเดอร์</span>
                 </div>
                 <div className="flex flex-col items-center gap-2">
                    <div className="size-2 bg-primary rounded-full shadow-lg ring-4 ring-primary/20"></div>
                    <span className="text-[10px] font-black font-thai text-text-main dark:text-white">ปรุงเสร็จ</span>
                 </div>
                 <div className="flex flex-col items-center gap-2">
                    <div className="size-3 bg-primary rounded-full shadow-floating ring-4 ring-primary/40 animate-bounce"></div>
                    <span className="text-[10px] font-black font-thai text-primary">กำลังส่ง</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 opacity-30">
                    <div className="size-2 bg-gray-300 rounded-full"></div>
                    <span className="text-[10px] font-black font-thai">ถึงแล้ว</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;