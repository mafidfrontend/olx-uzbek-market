
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';

export function TopNavigation() {
  const { t } = useTranslation();
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return t('home');
      case '/categories':
        return t('categories');
      case '/add-ad':
        return t('addAd');
      case '/bookings':
        return t('bookings');
      case '/profile':
        return t('profile');
      default:
        return t('home');
    }
  };

  return (
    <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-4 py-3 sticky top-0 z-40">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">{getPageTitle()}</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
