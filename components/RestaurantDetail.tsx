import React from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-32">
      {/* Header Image & Actions */}
      <div className="relative h-72 w-full">
        <img 
          src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=1000" 
          className="w-full h-full object-cover"
          alt="Restaurant Cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-black/20"></div>
        
        <div className="absolute top-12 inset-x-5 flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)}
            className="size-11 rounded-2xl glass flex items-center justify-center text-text-main dark:text-white shadow-premium active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex gap-2">
            <button className="size-11 rounded-2xl glass flex items-center justify-center text-text-main dark:text-white shadow-premium active:scale-90 transition-transform">
              <span className="material-symbols-outlined">favorite</span>
            </button>
            <button className="size-11 rounded-2xl glass flex items-center justify-center text-text-main dark:text-white shadow-premium active:scale-90 transition-transform">
              <span className="material-symbols-outlined">ios_share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div className="px-5 -mt-20 relative z-10">
        <div className="bg-white dark:bg-surface-dark rounded-[2.5rem] p-6 shadow-premium border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-2xl font-black text-text-main dark:text-white font-thai leading-tight">ครัวป้าเล็ก (Pa Lek's Kitchen)</h1>
            <div className="bg-primary text-primary-content font-black px-3 py-1 rounded-xl text-sm shadow-sm">4.8 ★</div>
          </div>
          <p className="text-sm font-bold text-text-muted dark:text-gray-400 font-thai mb-4">อาหารตามสั่ง • ก๋วยเตี๋ยว • ของหวาน</p>
          
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="text-center">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">ระยะทาง</p>
              <p className="text-sm font-black text-text-main dark:text-white">500ม.</p>
            </div>
            <div className="text-center border-x border-gray-100 dark:border-gray-800">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">เวลาส่ง</p>
              <p className="text-sm font-black text-text-main dark:text-white">15-20 นาที</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">ค่าส่ง</p>
              <p className="text-sm font-black text-green-600">ฟรี</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="mt-8 px-5">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {['แนะนำ', 'อาหารจานเดียว', 'ของหวาน', 'เครื่องดื่ม'].map((tab, idx) => (
            <button 
              key={idx}
              className={`shrink-0 px-6 py-3 rounded-2xl font-black text-sm font-thai transition-all ${
                idx === 0 ? 'bg-primary text-primary-content shadow-floating' : 'bg-gray-100 dark:bg-surface-dark text-text-muted dark:text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="mt-6 px-5 space-y-6">
        <h2 className="text-xl font-black text-text-main dark:text-white font-thai">เมนูยอดนิยม 🔥</h2>
        
        {[
          { name: 'ผัดไทยกุ้งสด', desc: 'เส้นจันท์เหนียวนุ่ม กุ้งตัวโต สดใหม่จากตลาดจ้ะ', price: '80', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400' },
          { name: 'ต้มยำน้ำข้น', desc: 'รสจัดจ้าน เครื่องแน่น หอมสมุนไพรถึงใจ', price: '120', img: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=400' }
        ].map((item, idx) => (
          <div 
            key={idx}
            className="flex gap-4 group p-1 transition-all"
          >
            <div className="relative size-28 rounded-3xl overflow-hidden shadow-premium shrink-0">
              <img src={item.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={item.name} />
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="font-black text-lg text-text-main dark:text-white font-thai leading-tight mb-1">{item.name}</h3>
                <p className="text-xs font-medium text-text-muted dark:text-gray-400 font-thai line-clamp-2">{item.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-black text-text-main dark:text-white">฿{item.price}</span>
                <button className="bg-secondary/20 hover:bg-secondary text-mint-dark px-4 py-2 rounded-xl text-xs font-black transition-colors active:scale-90">เพิ่ม +</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Checkout Button */}
      <div className="fixed bottom-10 inset-x-5 z-40">
        <button 
          onClick={() => navigate('/checkout')}
          className="w-full h-16 bg-primary hover:bg-primary-dark text-primary-content rounded-2xl shadow-floating flex items-center justify-between px-6 transition-all active:scale-[0.98] group"
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/30 p-2 rounded-xl">
              <span className="material-symbols-outlined text-[24px]">shopping_basket</span>
            </div>
            <span className="font-black text-lg font-thai">ดูตะกร้าของฉัน</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-black opacity-60">1 รายการ</span>
            <div className="w-px h-6 bg-primary-content/20"></div>
            <span className="text-xl font-black">฿80</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RestaurantDetail;