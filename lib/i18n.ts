export type Language = 'ko' | 'en';

export function detectLang(): Language {
  if (typeof window === 'undefined') return 'en';
  
  const params = new URLSearchParams(window.location.search);
  const paramLang = params.get('lang');
  if (paramLang === 'ko' || paramLang === 'en') return paramLang;
  
  const stored = localStorage.getItem('preferredLang') as Language | null;
  if (stored && (stored === 'ko' || stored === 'en')) return stored;
  
  const browserLang = navigator.language || (navigator as any).userLanguage;
  // Check if browser language is Korean (ko-KR, ko, etc.)
  if (browserLang && browserLang.toLowerCase().startsWith('ko')) return 'ko';
  
  return 'en';
}

export function setLang(lang: Language) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('preferredLang', lang);
  
  // Update URL
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
}
