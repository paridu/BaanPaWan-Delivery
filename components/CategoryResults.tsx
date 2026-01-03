import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryResults: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const categoryName = id === 'market' ? 'ตลาดสด' : id === 'food' ? 'อาหารริมทาง' : id === 'dessert' ? 'ของหวาน' : 'ทุกหมวดหมู่';

  const items = [
    { id: '1', name: 'ก๋วยเตี๋ยวป้าเมย์', rating: '4.8', tags: ['เส้นนุ่ม', 'รสเด็ด'], priceRange: '฿', time: '15', img: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=600', open: true },
    { id: '2', name: 'เจ๊วรรณ หมูกระทะ', rating: '4.2', tags: ['น้ำจิ้มเด็ด', 'ชุดใหญ่'], priceRange: '฿฿', time: '45', img: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80&w=600', open: false },
    { id: '3', name: 'ร้านน้ำยายหนู', rating: '4.9', tags: ['หวานน้อย', 'คั้นสด'], priceRange: '฿', time: '10', img: 'https://images.unsplash.com/photo-1558857563-b371f30bb674?auto=format&fit=crop&q=80&w=600', open: true },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-10 transition-colors">
      <header className="sticky top-0 z-40 glass border-b border-gray-100 dark:border-gray-800 px-5 pt-12 pb-6 flex items-center gap-4">
        <button 
          onClick={() => navigate('/')} 
          className="size-11 flex items-center justify-center rounded-2xl bg-white dark:bg-surface-dark shadow-premium text-text-muted active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h1 className="font-black text-2xl font-thai text-text-main dark:text-white leading-none italic">{categoryName}</h1>
          <p className="text-[10px] font-black text-primary uppercase tracking-widest mt-1">ใกล้บ้านคุณที่สุด</p>
        </div>
      </header>

      <div className="p-5 space-y-6">
        {items.map((shop) => (
          <div 
            key={shop.id}
            onClick={() => shop.open && navigate('/restaurant')}
            className={`group relative bg-white dark:bg-surface-dark rounded-[2.5rem] overflow-hidden shadow-premium border border-gray-100 dark:border-gray-800 transition-all ${shop.open ? 'active:scale-[0.98] cursor-pointer' : 'opacity-60 grayscale'}`}
          >
            {!shop.open && (
              <div className="absolute inset-0 z-20 bg-black/20 backdrop-blur-[1px] flex items-center justify-center">
                <div className="bg-white px-6 py-2 rounded-2xl shadow-xl">
                  <span className="text-sm font-black font-thai text-red-500 uppercase tracking-widest italic">ร้านปิดแล้วจ้ะ</span>
                </div>
              </div>
            )}
            
            <div className="relative h-44 overflow-hidden">
              <img src={shop.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={shop.name} />
              <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-lg">
                <span className="material-symbols-outlined text-yellow-500 text-[18px] material-symbols-filled">star</span>
                <span className="text-xs font-black text-text-main dark:text-white">{shop.rating}</span>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                {shop.tags.map(tag => (
                  <span key={tag} className="bg-primary/90 text-primary-content text-[10px] font-black px-3 py-1 rounded-lg shadow-sm">#{tag}</span>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-black text-xl text-text-main dark:text-white font-thai leading-tight">{shop.name}</h3>
                <span className="text-sm font-black text-gray-400">{shop.priceRange}</span>
              </div>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-50 dark:border-gray-800">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
                  <span className="text-xs font-bold text-text-muted dark:text-gray-400 font-thai">{shop.time} นาที</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-green-500 text-[18px]">local_shipping</span>
                  <span className="text-xs font-black text-green-600 font-thai uppercase">ส่งฟรี</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="py-10 text-center">
           <p className="text-xs font-bold text-gray-400 font-thai uppercase tracking-[0.2em]">ไม่มีร้านเพิ่มเติมในขณะนี้จ้ะ</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryResults;