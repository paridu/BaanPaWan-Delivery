import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NeighborAI from './NeighborAI';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showAI, setShowAI] = useState(false);

  return (
    <div className="pb-28 bg-background-light dark:bg-background-dark min-h-screen transition-colors duration-300">
      {/* Premium Header */}
      <header className="sticky top-0 z-40 glass border-b border-gray-100/50 dark:border-gray-800/50 px-5 pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/profile')}
              className="relative size-12 rounded-2xl overflow-hidden border-2 border-primary ring-4 ring-primary/10 transition-transform active:scale-90 hover:ring-primary/30"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7f6f5Fh1_QL_rQlzoPNGOojM-yY_ZlaQQVHcdjzucJXb47cZrsRHWSF2y9DqAdWPsqsEUOjcOS17KdZIE5zxYAFLkUVvPmpa4KTVoXIeZ-2AmhAHRPKytuTs2cFw-RY5G0309_01r1_K7kVrUBY3ZEhEEXzIk2No_zdot5HXYm25tBZ7EWDU8UsSRBwWFQBHmqXH3QaM0EPkbgwVHNUv3LmGFg-ejMpB3PhY4SMZ67cbJ-9YQHN5k4BXPyBkj55Rg63AO7N5CEfo" 
                alt="User" 
                className="w-full h-full object-cover"
              />
            </button>
            <div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
                <p className="text-[10px] font-black uppercase tracking-widest text-text-muted dark:text-gray-500 font-display">หมู่บ้านป้าหวาน • ซอย 4</p>
              </div>
              <h2 className="text-xl font-extrabold text-text-main dark:text-white font-thai leading-none mt-0.5">สวัสดีคุณสาราห์ 👋</h2>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="size-11 rounded-2xl bg-white dark:bg-surface-dark shadow-premium border border-gray-100 dark:border-gray-800 flex items-center justify-center transition-all active:scale-90 hover:bg-gray-50">
              <span className="material-symbols-outlined text-text-main dark:text-white">notifications</span>
            </button>
          </div>
        </div>

        {/* AI Enhanced Search Bar - More Prominent */}
        <div 
          onClick={() => setShowAI(true)}
          className="relative group cursor-pointer transform transition-all active:scale-[0.98]"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-orange-400 to-primary rounded-[22px] blur opacity-20 group-hover:opacity-40 transition duration-500 animate-pulse"></div>
          <div className="relative flex items-center bg-white dark:bg-surface-dark rounded-2xl h-14 px-4 border border-gray-100 dark:border-gray-800 shadow-premium">
            <span className="material-symbols-outlined text-primary text-[28px] group-hover:rotate-12 transition-transform">smart_toy</span>
            <div className="flex-1 px-3 text-base text-gray-400 font-thai font-medium italic">
              "วันนี้ป้าหวานมีอะไรแนะนำบ้างจ๊ะ?"
            </div>
            <div className="bg-primary px-3 py-1.5 rounded-xl text-primary-content font-black text-xs shadow-sm">
              ถาม AI
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner Slider */}
      <section className="px-5 mt-6">
        <div className="relative h-48 rounded-[2.5rem] overflow-hidden group shadow-floating border-4 border-white dark:border-surface-dark">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000" 
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            alt="Promotion"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent flex flex-col justify-center p-8">
            <div className="flex items-center gap-2 mb-3">
               <span className="bg-primary text-primary-content text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Flash Sale</span>
               <span className="text-white text-xs font-bold font-thai">เหลือเวลา 02:45:12</span>
            </div>
            <h3 className="text-2xl font-black text-white font-thai leading-tight">ดีลเด็ดรอบเย็น<br/><span className="text-primary text-4xl">ลดสูงสุด 50%</span></h3>
            <p className="text-white/60 text-xs font-thai mt-2">เฉพาะร้านในหมู่บ้านเท่านั้นจ้ะ</p>
          </div>
        </div>
      </section>

      {/* Quick Categories - Modern Grid */}
      <section className="px-5 mt-10">
        <div className="flex items-end justify-between mb-5 px-1">
          <h3 className="text-xl font-black text-text-main dark:text-white font-thai">เลือกตามใจปาก</h3>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[
            { id: 'food', name: 'ข้าวแกง', icon: 'soup_kitchen', color: 'bg-orange-50 text-orange-500' },
            { id: 'market', name: 'ตลาดสด', icon: 'local_mall', color: 'bg-emerald-50 text-emerald-500' },
            { id: 'drink', name: 'น้ำชง', icon: 'local_bar', color: 'bg-sky-50 text-sky-500' },
            { id: 'dessert', name: 'ของหวาน', icon: 'icecream', color: 'bg-pink-50 text-pink-500' },
          ].map(cat => (
            <button 
              key={cat.id}
              onClick={() => navigate(`/categories/${cat.id}`)}
              className="flex flex-col items-center gap-3 group"
            >
              <div className={`${cat.color} bg-opacity-10 dark:bg-opacity-20 size-16 rounded-[1.8rem] flex items-center justify-center shadow-premium group-hover:shadow-floating group-hover:-translate-y-2 transition-all duration-300 border border-transparent group-hover:border-current`}>
                <span className="material-symbols-outlined text-[32px]">{cat.icon}</span>
              </div>
              <span className="text-[11px] font-black text-text-main dark:text-gray-400 font-thai uppercase tracking-tighter">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section className="mt-12">
        <div className="flex items-center justify-between px-6 mb-6">
          <div className="flex flex-col">
            <h3 className="text-2xl font-black text-text-main dark:text-white font-thai leading-tight">ร้านนี้ต้องลอง 🔥</h3>
            <p className="text-xs text-text-muted dark:text-gray-500 font-thai font-bold">คนในซอยสั่งเยอะที่สุดตอนนี้</p>
          </div>
          <button className="bg-primary/10 text-primary-dark p-2 rounded-xl active:scale-90 transition-transform">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
        
        <div className="flex overflow-x-auto gap-6 px-6 pb-8 no-scrollbar snap-x">
          {[
            { id: 1, name: 'ก๋วยเตี๋ยวป้าเมย์', rating: '4.8', distance: '300m', tag: 'Must Try', img: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=600' },
            { id: 2, name: 'ครัวลุงเบียร์', rating: '4.9', distance: '1.2km', tag: 'Fastest', img: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80&w=600' }
          ].map(shop => (
            <div 
              key={shop.id}
              onClick={() => navigate('/restaurant')}
              className="flex-none w-[82%] snap-center cursor-pointer group"
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-premium mb-4 border border-gray-100 dark:border-gray-800">
                <img src={shop.img} className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" alt={shop.name} />
                <div className="absolute top-5 left-5 flex gap-2">
                  <div className="glass px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-lg">
                    <span className="material-symbols-outlined text-yellow-500 text-[18px] material-symbols-filled">star</span>
                    <span className="text-xs font-black text-text-main dark:text-white">{shop.rating}</span>
                  </div>
                  <div className="bg-primary text-primary-content px-3 py-1.5 rounded-xl text-[10px] font-black uppercase shadow-lg">
                    {shop.tag}
                  </div>
                </div>
                <div className="absolute bottom-5 right-5 glass px-4 py-1.5 rounded-2xl shadow-lg">
                   <p className="text-[10px] font-black text-text-main dark:text-white font-thai">{shop.distance}</p>
                </div>
              </div>
              <div className="px-4">
                <h4 className="text-xl font-black text-text-main dark:text-white font-thai leading-tight">{shop.name}</h4>
                <div className="flex items-center gap-3 mt-2">
                   <p className="text-xs font-bold text-green-600 font-thai bg-green-50 px-2 py-1 rounded-lg">ส่งฟรีสมาชิก</p>
                   <p className="text-xs font-medium text-text-muted dark:text-gray-400 font-thai flex items-center gap-1">
                     <span className="material-symbols-outlined text-[16px]">timer</span> 15-20 นาที
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Active Order Widget - More Interactive */}
      <div className="fixed bottom-28 left-5 right-5 z-40 animate-slide-up">
        <div 
          onClick={() => navigate('/tracking')}
          className="bg-text-main dark:bg-white text-white dark:text-text-main rounded-[2.2rem] shadow-floating p-4 flex items-center gap-4 border-l-[12px] border-primary cursor-pointer active:scale-95 transition-all overflow-hidden"
        >
          <div className="size-14 rounded-2xl bg-white/10 dark:bg-gray-100 flex items-center justify-center relative shrink-0 shadow-inner">
            <span className="material-symbols-outlined text-primary text-[32px] animate-bounce">delivery_dining</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-text-main dark:border-white"></span>
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary mb-1">On the way to you</p>
            <h4 className="text-sm font-black font-thai truncate leading-tight">พี่สมชายใกล้ถึงแล้ว! คอยรับโทรศัพท์ด้วยจ้ะ</h4>
          </div>
          <div className="size-10 rounded-full bg-white/20 dark:bg-primary/20 flex items-center justify-center text-primary group">
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Nav */}
      <nav className="fixed bottom-0 inset-x-0 glass border-t border-gray-100 dark:border-gray-800 pb-12 pt-4 px-10 z-50 flex justify-between items-center rounded-t-[3rem] shadow-[0_-15px_40px_rgba(0,0,0,0.08)]">
        <button className="flex flex-col items-center gap-1.5 text-primary scale-110">
          <span className="material-symbols-outlined text-[30px] material-symbols-filled">home</span>
          <span className="text-[9px] font-black font-thai uppercase tracking-widest">หน้าแรก</span>
        </button>
        <button onClick={() => navigate('/categories/all')} className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-text-main dark:hover:text-white transition-