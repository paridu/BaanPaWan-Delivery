import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-32 transition-colors duration-300">
      {/* Premium Header */}
      <div className="bg-primary/10 dark:bg-primary/5 pt-16 pb-12 px-8 rounded-b-[4rem] text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <span className="material-symbols-outlined text-[120px]">person</span>
        </div>
        
        <div className="relative inline-block mb-6">
          <div className="size-28 rounded-[2.5rem] border-4 border-white dark:border-surface-dark shadow-floating overflow-hidden mx-auto rotate-3">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7f6f5Fh1_QL_rQlzoPNGOojM-yY_ZlaQQVHcdjzucJXb47cZrsRHWSF2y9DqAdWPsqsEUOjcOS17KdZIE5zxYAFLkUVvPmpa4KTVoXIeZ-2AmhAHRPKytuTs2cFw-RY5G0309_01r1_K7kVrUBY3ZEhEEXzIk2No_zdot5HXYm25tBZ7EWDU8UsSRBwWFQBHmqXH3QaM0EPkbgwVHNUv3LmGFg-ejMpB3PhY4SMZ67cbJ-9YQHN5k4BXPyBkj55Rg63AO7N5CEfo" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <button className="absolute -bottom-2 -right-2 size-10 rounded-2xl bg-white dark:bg-surface-dark shadow-premium flex items-center justify-center border-2 border-primary text-primary">
            <span className="material-symbols-outlined text-sm">photo_camera</span>
          </button>
        </div>
        
        <h2 className="text-3xl font-black text-text-main dark:text-white font-thai leading-tight">คุณสาราห์ ใจดี</h2>
        <div className="inline-flex items-center gap-2 mt-3 bg-white dark:bg-surface-dark px-4 py-1.5 rounded-2xl shadow-sm border border-primary/20">
          <span className="text-sm font-black text-primary-dark font-thai">เพื่อนบ้านระดับ: Gold 🏆</span>
        </div>
      </div>

      <div className="p-6 -mt-6 space-y-6 relative z-10">
        {/* Main Menu Actions */}
        <div className="bg-white dark:bg-surface-dark rounded-[2.5rem] shadow-premium overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="divide-y divide-gray-50 dark:divide-gray-800">
            <button className="w-full p-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-11 rounded-2xl bg-orange-50 dark:bg-orange-900/20 text-orange-500 flex items-center justify-center">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <span className="font-black text-base font-thai text-text-main dark:text-white">ที่อยู่จัดส่งของฉัน</span>
              </div>
              <span className="material-symbols-outlined text-gray-300">chevron_right</span>
            </button>
            
            <button className="w-full p-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-11 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <span className="font-black text-base font-thai text-text-main dark:text-white">การชำระเงิน</span>
              </div>
              <span className="material-symbols-outlined text-gray-300">chevron_right</span>
            </button>

            <div className="w-full p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-11 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-purple-500 flex items-center justify-center">
                  <span className="material-symbols-outlined">{isDark ? 'dark_mode' : 'light_mode'}</span>
                </div>
                <span className="font-black text-base font-thai text-text-main dark:text-white">โหมดกลางคืน</span>
              </div>
              <button 
                onClick={toggleDarkMode}
                className={`w-14 h-8 rounded-full relative transition-colors duration-300 ${isDark ? 'bg-primary' : 'bg-gray-200'}`}
              >
                <div className={`absolute top-1 size-6 bg-white rounded-full shadow-md transition-all duration-300 ${isDark ? 'left-7' : 'left-1'}`}></div>
              </button>
            </div>
          </div>
        </div>

        {/* Rider Badge */}
        <div className="bg-gradient-to-br from-mint to-secondary dark:from-mint-dark dark:to-teal-900/40 p-6 rounded-[2.5rem] border border-secondary/30 shadow-premium group relative overflow-hidden">
          <div className="relative z-10 flex items-center justify-between">
            <div className="max-w-[70%]">
              <h3 className="font-black text-lg text-teal-900 dark:text-teal-100 font-thai">หารายได้พิเศษ?</h3>
              <p className="text-xs text-teal-800/70 dark:text-teal-300 mt-1 font-thai font-bold">เปิดโหมด "ไรเดอร์เพื่อนบ้าน" รับออเดอร์ในซอยเดียวกันวันนี้</p>
            </div>
            <div className="size-14 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-md flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
               <span className="material-symbols-outlined text-teal-700 dark:text-teal-200 text-3xl">two_wheeler</span>
            </div>
          </div>
        </div>

        {/* Logout */}
        <button onClick={() => navigate('/')} className="w-full p-5 flex items-center justify-center gap-3 rounded-[2rem] text-red-500 font-black font-thai bg-red-50 dark:bg-red-900/10 hover:bg-red-100 transition-colors">
          <span className="material-symbols-outlined">logout</span>
          <span>ออกจากระบบ</span>
        </button>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 inset-x-0 glass border-t border-gray-100 dark:border-gray-800 pb-12 pt-4 px-10 z-50 flex justify-between items-center rounded-t-[3rem] shadow-[0_-15px_40px_rgba(0,0,0,0.08)]">
        <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1.5 text-gray-400">
          <span className="material-symbols-outlined text-[30px]">home</span>
          <span className="text-[9px] font-black font-thai uppercase tracking-widest">หน้าแรก</span>
        </button>
        <button onClick={() => navigate('/categories/all')} className="flex flex-col items-center gap-1.5 text-gray-400">
          <span className="material-symbols-outlined text-[30px]">explore</span>
          <span className="text-[9px] font-bold font-thai uppercase tracking-widest">สำรวจ</span>
        </button>
        <button onClick={() => navigate('/reorder')} className="flex flex-col items-center gap-1.5 text-gray-400">
          <span className="material-symbols-outlined text-[30px]">receipt_long</span>
          <span className="text-[9px] font-bold font-thai uppercase tracking-widest">คำสั่ง</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-primary scale-110">
          <span className="material-symbols-outlined text-[30px] material-symbols-filled">person</span>
          <span className="text-[9px] font-black font-thai uppercase tracking-widest">โปรไฟล์</span>
        </button>
      </nav>
    </div>
  );
};

export default Profile;