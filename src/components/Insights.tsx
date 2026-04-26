import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export default function Insights() {
  const { t } = useLanguage();

  const properties = [
    {
      id: 1,
      image: '/aman-room.jpg',
      name: 'Aman New York Residences',
      city: 'New York, USA',
      yield: '6.5%',
      min: '$10,000',
      category: t.insights.categories.cbd,
    },
    {
      id: 2,
      image: '/four-seasons.jpg',
      name: 'Four Seasons Resort Maldives',
      city: 'Baa Atoll, Maldives',
      yield: '8.2%',
      min: '$25,000',
      category: t.insights.categories.resort,
    },
  ];

  return (
    <section id="insights" className="py-24 bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-xs font-semibold tracking-widest text-[#C5A880] uppercase mb-3">
              {t.insights.title}
            </h2>
            <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              {t.insights.subtitle}
            </h3>
            <p className="text-stone-500 font-light">
              {t.insights.desc}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {properties.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer block"
            >
              <div className="relative h-[400px] overflow-hidden mb-6 bg-stone-200 rounded-sm">
                <img
                  src={prop.image}
                  alt={prop.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-medium mb-1">{prop.name}</h4>
                  <p className="text-stone-500 text-sm mb-4">{prop.city}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#C5A880] group-hover:border-[#C5A880] group-hover:text-stone-50 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 border-t border-stone-200 pt-4">
                <div>
                  <div className="text-xs text-stone-400 uppercase tracking-wider mb-1">{t.insights.card.estYield}</div>
                  <div className="text-lg font-medium text-[#C5A880]">{prop.yield}</div>
                </div>
                <div>
                  <div className="text-xs text-stone-400 uppercase tracking-wider mb-1">{t.insights.card.minInvest}</div>
                  <div className="text-lg font-medium">{prop.min}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-white p-8 border border-stone-100 flex flex-col md:flex-row gap-8 rounded-sm shadow-sm"
        >
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <TrendingUp className="w-5 h-5 text-[#C5A880]" />
              <h5 className="font-medium text-stone-900">RWA Tokenization Logic</h5>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              {t.insights.logic}
            </p>
          </div>
          <div className="flex-1">
            <h5 className="font-medium text-stone-900 mb-3">Asset Screening</h5>
            <p className="text-sm text-stone-500 leading-relaxed">
              {t.insights.criteria}
            </p>
          </div>
        </motion.div>

        <div className="mt-8 text-center text-xs text-stone-400 font-light tracking-wide">
          {t.insights.risk}
        </div>
      </div>
    </section>
  );
}
