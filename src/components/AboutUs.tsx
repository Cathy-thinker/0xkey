import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-stone-900 text-stone-50 overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-stone-800 rounded-full opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-stone-800 rounded-full opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-xs font-semibold tracking-widest text-[#C5A880] uppercase mb-8">
            {t.about.title}
          </h2>
          <p className="text-xl md:text-2xl font-light text-stone-300 leading-relaxed mb-12">
            "{t.about.intro}"
          </p>
          
          <div className="bg-stone-800/30 border border-stone-700/50 p-6 shadow-2xl backdrop-blur-sm max-w-2xl mx-auto mb-12">
             <div className="text-sm text-[#C5A880] mb-2 font-mono uppercase tracking-widest">Business Model</div>
             <p className="text-stone-200 font-medium">
               {t.about.model}
             </p>
          </div>

          <div className="text-xs text-stone-500 font-light border-l border-stone-700 pl-4 max-w-xl mx-auto mb-16 text-left">
            {t.about.compliance}
          </div>

          <button className="px-8 py-3 bg-transparent border border-stone-500 hover:border-[#C5A880] hover:text-[#C5A880] transition-colors duration-300 text-sm tracking-wide uppercase">
            {t.about.contact}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
