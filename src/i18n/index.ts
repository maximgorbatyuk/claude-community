import translations from './translations';

export type Locale = 'ru' | 'en' | 'kk';

export const locales: Locale[] = ['ru', 'en', 'kk'];

export const localeNames: Record<Locale, string> = {
  ru: 'Русский',
  en: 'English',
  kk: 'Қазақша',
};

export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? translations.ru[key] ?? key;
}

export function getLocalePath(locale: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const withSlash = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;
  if (locale === 'ru') return withSlash;
  return `/${locale}${withSlash}`;
}

export function getBasePath(path: string): string {
  for (const loc of locales) {
    if (loc === 'ru') continue;
    if (path.startsWith(`/${loc}/`)) return path.slice(loc.length + 1);
    if (path === `/${loc}`) return '/';
  }
  return path;
}
