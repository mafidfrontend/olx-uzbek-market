
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Search, Filter, MapPin, Star } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const mockOffers = [
  {
    id: 1,
    title: 'iPhone 14 Pro',
    price: '12,500,000 UZS',
    location: 'Tashkent',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'MacBook Air M2',
    price: '18,000,000 UZS',
    location: 'Samarkand',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop'
  },
  {
    id: 3,
    title: 'Samsung Galaxy S23',
    price: '9,800,000 UZS',
    location: 'Bukhara',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop'
  }
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-4 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder={t('searchPlaceholder')}
                className="pl-10 border-gray-200 focus:border-[#1877F2] focus:ring-[#1877F2]/20"
              />
            </div>
            <Button variant="outline" size="icon" className="border-gray-200">
              <Filter size={20} />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Banner Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <ImageCarousel />
        </motion.div>

        {/* Push Notifications Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-[#1877F2] to-blue-600 rounded-lg p-4 mb-6 text-white"
        >
          <h3 className="font-semibold mb-2">🔔 Latest Updates</h3>
          <p className="text-sm opacity-90">New premium listings available in your area!</p>
        </motion.div>

        {/* Nearby Offers */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <MapPin className="mr-2 text-[#1877F2]" size={20} />
              {t('nearbyOffers')}
            </h2>
            <Button variant="ghost" className="text-[#1877F2] hover:text-[#1877F2]/80">
              {t('viewAll')}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 flex items-center">
                      <Star className="text-yellow-400 fill-current mr-1" size={12} />
                      <span className="text-xs font-medium">{offer.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{offer.title}</h3>
                    <p className="text-[#1877F2] font-bold text-lg mb-1">{offer.price}</p>
                    <p className="text-gray-500 text-sm flex items-center">
                      <MapPin size={12} className="mr-1" />
                      {offer.location}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Suggestions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">{t('suggestions')}</h2>
            <Button variant="ghost" className="text-[#1877F2] hover:text-[#1877F2]/80">
              {t('viewAll')}
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Electronics', 'Fashion', 'Home & Garden', 'Automotive'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-lg p-4 text-center cursor-pointer hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#1877F2]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <p className="font-medium text-gray-900">{category}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
