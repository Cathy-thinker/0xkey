import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HotelNFT() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = t.nft.filters; // ['All', 'USA', 'UK', 'France', 'Japan']

  // Ensure robust check for "All" and "全部", picking first element as the "All" equivalent
  const allFilter = filters[0];

  const nfts = [
    {
      id: 1,
      name: 'Aman New York Penthouse',
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1776362355123-ca966d36e29c?q=80&w=1000&auto=format&fit=crop',
      price: '$500',
    },
    {
      id: 2,
      name: 'The Ritz London',
      country: 'UK',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
      price: '$450',
    },
    {
      id: 3,
      name: 'Cheval Blanc Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
      price: '$800',
    },
    {
      id: 4,
      name: 'Aman Kyoto Pavilion',
      country: 'Japan',
      image: 'https://images.unsplash.com/photo-1758970081655-a9c08d367e68?q=80&w=1000&auto=format&fit=crop',
      price: '$600',
    },
    {
      id: 5,
      name: 'Beverly Hills Hotel',
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
      price: '$400',
    },
    {
      id: 6,
      name: 'Hoshinoya Tokyo',
      country: 'Japan',
      image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=800&auto=format&fit=crop',
      price: '$750',
    },
  ];

  const filteredNfts = activeFilter === allFilter 
    ? nfts 
    : nfts.filter(nft => nft.country === activeFilter);

  return (
    <section id="nft" className="py-24 bg-stone-50 text-stone-900 min-h-[800px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-[#C5A880] uppercase mb-3"
          >
            {t.nft.title}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-light tracking-tight"
          >
            {t.nft.subtitle}
          </motion.h3>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 text-sm tracking-wide transition-all duration-300 rounded-full border ${
                activeFilter === filter
                  ? 'bg-stone-900 border-stone-900 text-stone-50'
                  : 'bg-transparent border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* NFT Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredNfts.map((nft) => (
              <motion.div
                key={nft.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white border border-stone-100 rounded-sm overflow-hidden hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-md px-2 py-1 rounded-sm">
                    <span className="text-[10px] font-semibold tracking-wider text-[#C5A880] uppercase">
                      {nft.country}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-medium mb-1 truncate">{nft.name}</h4>
                    <p className="text-xs text-stone-400 font-mono mb-4">NFT ID #0x{Math.floor(Math.random()*10000).toString(16).padStart(4,'0')}</p>
                  </div>
                  
                  <div className="flex items-end justify-between mt-auto">
                    <div>
                      <div className="text-[10px] text-stone-400 uppercase tracking-wider mb-1">{t.nft.card.price}</div>
                      <div className="text-xl font-semibold text-stone-900">{nft.price}</div>
                    </div>
                    <button className="px-6 py-2 bg-stone-100 text-stone-900 text-sm font-medium hover:bg-stone-900 hover:text-stone-50 transition-colors duration-300">
                      {t.nft.card.buy}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
