import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Crown, Coffee, Plane, Wallet, Ticket, Users, CheckCircle } from 'lucide-react';

export default function TokenRewards() {
  const { t } = useLanguage();

  return (
    <section id="rewards" className="py-24 bg-stone-900 text-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-[#C5A880] uppercase mb-3"
          >
            {t.rewards.title}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-light tracking-tight"
          >
            {t.rewards.subtitle}
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Module 1: Tiered Membership */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative border border-stone-800 bg-stone-800/20 p-8 rounded-sm"
          >
            <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mb-6 text-[#C5A880]">
              <Crown className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-medium mb-8">{t.rewards.tiers.title}</h4>
            
            <div className="space-y-6">
              <div className="border-l-2 border-stone-700 pl-4">
                <div className="text-sm font-semibold text-[#C5A880] mb-1">{t.rewards.tiers.basic}</div>
                <div className="text-sm text-stone-400 font-light">{t.rewards.tiers.basicDesc}</div>
              </div>
              <div className="border-l-2 border-[#C5A880]/50 pl-4">
                <div className="text-sm font-semibold text-[#C5A880] mb-1">{t.rewards.tiers.mid}</div>
                <div className="text-sm text-stone-400 font-light">{t.rewards.tiers.midDesc}</div>
              </div>
              <div className="border-l-2 border-[#C5A880] pl-4">
                <div className="text-sm font-semibold text-[#C5A880] mb-1">{t.rewards.tiers.high}</div>
                <div className="text-sm text-stone-400 font-light">{t.rewards.tiers.highDesc}</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800">
              <div className="text-xs text-stone-500 font-medium">
                {t.rewards.tiers.requirement}
              </div>
            </div>
          </motion.div>

          {/* Module 2: Yield to Consumption */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="relative border border-stone-800 bg-stone-800/20 p-8 rounded-sm lg:translate-y-8"
          >
            <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mb-6 text-[#C5A880]">
              <Wallet className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-medium mb-6">{t.rewards.yield.title}</h4>
            <p className="text-stone-400 font-light text-sm leading-relaxed mb-8">
              {t.rewards.yield.desc}
            </p>
            <div className="p-4 bg-stone-800/50 rounded-sm flex items-center justify-between border border-stone-700/50">
               <div className="text-center flex-1">
                 <div className="text-xs text-stone-500 uppercase">Dividends</div>
                 <div className="text-lg font-medium text-stone-300">1.0x</div>
               </div>
               <div className="text-stone-600 px-4">→</div>
               <div className="text-center flex-1">
                 <div className="text-xs text-[#C5A880] uppercase">Vouchers</div>
                 <div className="text-xl font-semibold text-[#C5A880]">1.2x</div>
               </div>
            </div>
          </motion.div>

          {/* Module 3: Governance */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="relative border border-stone-800 bg-stone-800/20 p-8 rounded-sm"
          >
            <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mb-6 text-[#C5A880]">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-medium mb-6">{t.rewards.governance.title}</h4>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium mb-1 text-stone-200">{t.rewards.governance.club}</div>
                  <div className="text-xs text-stone-400 font-light">Exclusive social circle and networking events.</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium mb-1 text-stone-200">Voting Rights</div>
                  <div className="text-xs text-stone-400 font-light leading-relaxed">
                    {t.rewards.governance.voting}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
