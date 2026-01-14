'use client';

import { Language, setLang as saveLang } from '@/lib/i18n';

interface LangSwitchProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

export default function LangSwitch({ currentLang, onLangChange }: LangSwitchProps) {
  const handleLangChange = (lang: Language) => {
    saveLang(lang);
    onLangChange(lang);
  };

  return (
    <div className="flex gap-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 shadow-lg border border-gray-200">
      <button
        onClick={() => handleLangChange('ko')}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
          currentLang === 'ko'
            ? 'bg-blue-500 text-white'
            : 'text-gray-600 hover:text-blue-500'
        }`}
      >
        KR
      </button>
      <button
        onClick={() => handleLangChange('en')}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
          currentLang === 'en'
            ? 'bg-blue-500 text-white'
            : 'text-gray-600 hover:text-blue-500'
        }`}
      >
        EN
      </button>
    </div>
  );
}
