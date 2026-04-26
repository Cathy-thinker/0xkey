import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-950 text-stone-500 py-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs tracking-wide">
        <div className="mb-4 md:mb-0">
          {t.footer.rights}
        </div>
        <div className="font-light uppercase tracking-widest text-stone-600">
          {t.footer.compliance}
        </div>
      </div>
    </footer>
  );
}
