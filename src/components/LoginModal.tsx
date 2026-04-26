import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-stone-50 p-8 shadow-2xl rounded-sm"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-stone-900 tracking-tight">0xkey</h2>
              <p className="text-stone-500 mt-2 text-sm">{t.auth.login}</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">
                  {t.auth.email}
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
                  placeholder="admin@0xkey.io"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider">
                    {t.auth.password}
                  </label>
                  <a href="#" className="text-xs text-stone-500 hover:text-stone-900">
                    {t.auth.forgot}
                  </a>
                </div>
                <input
                  type="password"
                  className="w-full bg-transparent border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full bg-stone-900 text-stone-50 py-3 mt-6 hover:bg-stone-800 transition-colors text-sm font-medium tracking-wide"
              >
                {t.auth.signIn}
              </button>
            </form>

            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-[#C5A880] hover:text-stone-900 transition-colors">
                {t.auth.register}
              </a>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-200 text-center">
              <p className="text-xs text-stone-400">{t.auth.disclaimer}</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
