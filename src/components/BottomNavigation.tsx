
import { House, Grid2x2, Megaphone, Receipt, Avatar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomNavigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { key: 'home', path: '/', icon: House, label: t('home') },
    { key: 'categories', path: '/categories', icon: Grid2x2, label: t('categories') },
    { key: 'add', path: '/add-ad', icon: Megaphone, label: t('addAd') },
    { key: 'bookings', path: '/bookings', icon: Receipt, label: t('bookings') },
    { key: 'profile', path: '/profile', icon: Avatar, label: t('profile') },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:hidden z-40">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <motion.button
              key={item.key}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                isActive ? 'text-[#1877F2]' : 'text-gray-500'
              }`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <Icon size={20} />
              </motion.div>
              <span className="text-xs mt-1 font-medium">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-1/2 w-6 h-1 bg-[#1877F2] rounded-full"
                  style={{ x: '-50%' }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
