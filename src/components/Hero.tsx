import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-900 text-stone-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-c6a4d27d66f6?q=80&w=2000&auto=format&fit=crop"
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/20 to-stone-900" />
      </div>

      {/* Lightweight SVG Particles/Lines */}
      <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M-100,500 Q400,300 800,600 T2000,400"
            fill="none"
            stroke="#C5A880"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 3, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.path
            d="M-200,200 Q500,400 1200,100 T2500,300"
            fill="none"
            stroke="#C5A880"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 4, ease: 'easeOut', delay: 1, repeat: Infinity, repeatType: 'reverse' }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block py-1 px-3 border border-stone-500/50 rounded-full text-xs font-medium tracking-widest text-[#C5A880] uppercase mb-6">
            RWA Investment Platform
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
            <span className="block font-semibold mb-2">0xkey</span>
            Hotel Tokenization
          </h1>
          <p className="text-lg md:text-2xl text-stone-300 font-light tracking-wide max-w-2xl mx-auto mb-12">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleScroll('#insights')}
              className="w-full sm:w-auto px-8 py-4 bg-stone-50 text-stone-900 flex items-center justify-center space-x-2 hover:bg-[#C5A880] hover:text-stone-50 transition-colors duration-300 group"
            >
              <span className="text-sm font-medium tracking-wide uppercase">{t.hero.cta1}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScroll('#nft')}
              className="w-full sm:w-auto px-8 py-4 border border-stone-500 text-stone-50 flex items-center justify-center hover:border-stone-50 transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-wide uppercase">{t.hero.cta2}</span>
            </button>
          </div>

          <div className="mt-16 text-xs text-stone-500 max-w-md mx-auto font-light tracking-widest uppercase">
            {t.hero.modelText}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-stone-50 to-transparent" />
      </motion.div>
    </section>
  );
}
