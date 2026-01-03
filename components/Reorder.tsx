import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reorder: React.FC = () => {
  const navigate = useNavigate();

  const history = [
    { id: '1', name: 'ก๋วยเตี๋ยวต้มยำพิเศษ', shop: 'ก๋วยเตี๋ยวป้าเมย์', price: 80, date: 'เมื่อวานนี้', img: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=200' },
    { id: '2', name: 'ข้าวผัดกระเพราไข่ดาว', shop: 'ครัวลุงเบียร์', price: 65, date: '2 วันที่แล้ว', img: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80&w=200' },
    { id: '3', name: 'ชานมไข่มุกหวานน้อย', shop: 'น้ำชงหลังซอย', price: 45, date: 'สัปดาห์ที่แล้ว', img: 'https://images.unsplash.com/photo-1558857563-b371f30bb674?auto=format&fit=crop&q=80&w=200' }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-32 transition-colors">
      <header className="sticky top-0 z-40 glass border-b border-gray-100 dark:border-gray-800 px-6 pt-12 pb-6">
        <h1 className="text-3xl font-black text-text-main dark:text-white font-thai leading-tight italic">รายการประจำ</h1>
        <p className="text-xs font-bold text-text-muted dark:text-gray-500 font-thai uppercase tracking-widest mt-1">เมนูโปรดที่คุณสั่งบ่อยที่สุดจ้ะ</p>
      </header>

      <div className="p-6 space-y-6">
        {history.map((item) => (
          <div key={item.id} className="bg-white dark:bg-surface-dark rounded-[2.5rem] p-5 shadow-premium border border-gray-100 dark:border-gray-800 group overflow-hidden relative">
            <div className="flex gap-5 items-center relative z-10">
              <div className="size-20 rounded-[1.5rem] overflow-hidden shadow-inner shrink-0 group-hover:scale-105 transition-transform duration-500">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                   <h3 className="font-black text-base text-text-main dark:text-white font-thai truncate">{item.name}</h3>
                   <span className="font-black text-sm text-primary-dark">฿{item.price}</span>
                </div>
                <p className="text-xs font-bold text-text-muted dark:text-gray-400 font-thai flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">storefront</span> {item.shop}
                </p>
                <p className="text-[10px] font-black text-gray-400 mt-2 uppercase tracking-tighter">{item.date}</p>
              </div>
            </div>
            
            <div className="mt-5 pt-5 border-t border-gray-50 dark:border-gray-800 flex gap-3">
              <button 
                onClick={() => navigate('/restaurant')}
                className="flex-1 py-3 bg-gray-50 dark:bg-gray-800 rounded-2xl text-[11px] font-black font-thai text-text-muted dark:text-gray-300 hover:bg-gray-100 transition-colors"
              >
                ดูรายละเอียด
              </button>
              <button 
                onClick={() => navigate('/checkout')}
                className="flex-[2] py-3 bg-primary hover:bg-primary-dark text-primary-content rounded-2xl text-[11px] font-black font-thai shadow-floating flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">refresh</span>
                สั่งซ้ำทันที
              </button>
            </div>
          </div>
        ))}

        <div className="bg-primary/5 border-2 border-dashed border-primary/20 p-8 rounded-[3rem] text-center">
           <span className="material-symbols-outlined text-primary text-5xl mb-3">add_circle</span>
           <p className="font-thai font-black text-text-main dark:text-white">ยังไม่มีรายการประจำอื่นๆ</p>
           <p className="text-xs font-thai text-text-muted mt-2">สั่งเมนูที่ชอบบ่อยๆ เดี๋ยวป้าจะบันทึกไว้ให้เองจ้ะ!</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="fixed bottom-0 inset-x-0 glass border-t border-gray-100 dark:border-gray-800 pb-12 pt-4 px-10 z-50 flex justify-between items-center rounded-t-[3rem] shadow-[0_-15px_40px_rgba(0,0,0,0.08)]">
        <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1.5 text-gray-400">
          <span className="material-symbols-outlined text-[30px]">home</span>
          <span className="text-[9px] font-black font-thai uppercase tracking-widest">หน้าแรก</span>
        </button>
        <button onClick={() => navigate('/categories/all')} className="flex flex-col items-center gap-1.5 text-gray-400">
          <span className="material-symbols-outlined text-[30px]">explore</span>
          <span className="text-[9px] font-bold font-thai uppercase tracking-widest">สำรวจ</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-primary scale-110">
          <span className="material-symbols-outlined text-[30px] material-symbols-filled">receipt_long</span>
          <span className="text-[9px] font-black font-thai uppercase tracking-widest">คำสั่ง</span>
        </button>
        <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1.5 text-gray-400">
          <span className="material-symbols-outlined text-[30px]">person</span>
          <span className="text-[9px] font-bold font-thai uppercase tracking-widest">โปรไฟล์</span>
        </button>
      </nav>
    </div>
  );
};

export default Reorder;