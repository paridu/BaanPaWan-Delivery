import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [tip, setTip] = useState(0);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col animate-fade-in">
      {/* Premium Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md px-6 pt-12 pb-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="size-11 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-800 text-text-muted transition-transform active:scale-90">
          <span className="material-symbols-outlined">close</span>
        </button>
        <h1 className="font-black text-xl font-thai text-text-main dark:text-white">สรุปรายการสั่งซื้อ</h1>
        <div className="size-11"></div>
      </header>

      <div className="flex-1 p-6 space-y-8 overflow-y-auto pb-32 no-scrollbar">
        {/* Delivery Address Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">สถานที่จัดส่ง</h2>
            <button className="text-primary text-xs font-black font-thai hover:underline">เปลี่ยน</button>
          </div>
          <div className="bg-white dark:bg-surface-dark p-5 rounded-[2rem] shadow-premium border border-gray-50 dark:border-gray-800 flex items-start gap-4">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined material-symbols-filled">location_on</span>
            </div>
            <div>
              <p className="font-black text-base font-thai text-text-main dark:text-white">บ้านของฉัน (คอนโดป้าหวาน)</p>
              <p className="text-xs text-text-muted dark:text-gray-400 mt-1 font-thai leading-relaxed">123/45 ซอยสุขุมวิท 23 แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพฯ 10110</p>
            </div>
          </div>
        </section>

        {/* Order Items Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">รายการอาหาร</h2>
            <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded-lg">1 ชิ้น</span>
          </div>
          <div className="bg-white dark:bg-surface-dark p-6 rounded-[2rem] shadow-premium space-y-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="size-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-sm font-black text-primary">1x</div>
                <div>
                  <h3 className="font-black text-sm font-thai text-text-main dark:text-white">ผัดไทยกุ้งสด (เส้นจันท์)</h3>
                  <p className="text-[10px] font-bold text-text-muted mt-0.5 font-thai">ไม่ใส่ถั่วงอก, เผ็ดน้อยจ้ะ</p>
                </div>
              </div>
              <span className="font-black text-sm text-text-main dark:text-white">฿80</span>
            </div>
            
            <div className="pt-5 border-t border-gray-100 dark:border-gray-800 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="font-thai text-text-muted">ค่าอาหารรวม</span>
                <span className="font-bold text-text-main dark:text-white">฿80</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-thai text-text-muted">ค่าจัดส่ง (Neighbor Rate)</span>
                <span className="font-black text-green-600 uppercase tracking-tighter">FREE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Neighbor Tip Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">สินน้ำใจให้เพื่อนบ้าน (Tip)</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            {[0, 10, 20, 50].map((amount) => (
              <button
                key={amount}
                onClick={() => setTip(amount)}
                className={`flex-1 shrink-0 px-6 py-3 rounded-2xl font-black text-sm transition-all border-2 ${
                  tip === amount 
                    ? 'bg-primary border-primary text-primary-content shadow-floating' 
                    : 'bg-white dark:bg-surface-dark border-gray-100 dark:border-gray-800 text-text-muted'
                }`}
              >
                {amount === 0 ? 'ไม่ระบุ' : `฿${amount}`}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-center text-text-muted font-thai mt-3 italic">"สินน้ำใจเล็กๆ น้อยๆ ช่วยให้เพื่อนบ้านมีกำลังใจจัดส่งจ้ะ"</p>
        </section>

        {/* Payment Method */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">ช่องทางชำระเงิน</h2>
          </div>
          <button className="w-full flex items-center justify-between p-5 rounded-[2rem] bg-white dark:bg-surface-dark shadow-premium border-2 border-primary/20 hover:border-primary transition-all">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner">
                <span className="material-symbols-outlined material-symbols-filled">wallet</span>
              </div>
              <div className="text-left">
                <p className="font-black text-sm font-thai text-text-main dark:text-white">กระเป๋าเงินป้าหวาน (Wallet)</p>
                <p className="text-[10px] font-bold text-primary">ยอดคงเหลือ ฿1,250</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-primary text-[28px] material-symbols-filled">check_circle</span>
          </button>
        </section>
      </div>

      {/* Floating Order Button */}
      <div className="fixed bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light/95 to-transparent pt-10">
        <button 
          onClick={() => navigate('/tracking')}
          className="w-full h-16 bg-primary hover:bg-primary-dark text-primary-content font-black text-xl rounded-[2rem] shadow-floating flex items-center justify-between px-8 transition-all active:scale-[0.98] group"
        >
          <div className="flex flex-col items-start leading-none">
             <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Confirm Order</span>
             <span className="font-thai">สั่งอาหารทันที</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
               <span className="text-xs font-bold block opacity-60">ยอดรวม</span>
               <span className="text-2xl font-black">฿{80 + tip}</span>
            </div>
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">bolt</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Checkout;