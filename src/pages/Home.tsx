import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Search, Filter, MapPin, Star, Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useSearch } from '../contexts/SearchContext';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';

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
  },
  {
    id: 4,
    title: 'iPad Pro 11-inch',
    price: '15,200,000 UZS',
    location: 'Tashkent',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop'
  },
  {
    id: 5,
    title: 'Sony WH-1000XM4',
    price: '2,800,000 UZS',
    location: 'Andijan',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop'
  },
  {
    id: 6,
    title: 'Dell XPS 13',
    price: '16,500,000 UZS',
    location: 'Namangan',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop'
  }
];

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [filteredOffers, setFilteredOffers] = useState(mockOffers);
  const { searchQuery, setSearchQuery } = useSearch();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredOffers(mockOffers);
    } else {
      const filtered = mockOffers.filter(offer =>
        offer.title.toLowerCase().includes(query.toLowerCase()) ||
        offer.location.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredOffers(filtered);
    }
  };

  const handleWishlistToggle = (offer: any) => {
    if (isInWishlist(offer.id)) {
      removeFromWishlist(offer.id);
    } else {
      addToWishlist(offer);
    }
  };

  const handleAddToCart = (offer: any) => {
    addToCart(offer);
    console.log('Added to cart:', offer.title);
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleViewAllOffers = () => {
    // For now, we'll just log this. In a full app, this might navigate to a dedicated offers page
    console.log('View all offers clicked');
  };

  const handleViewAllSuggestions = () => {
    // For now, we'll just log this. In a full app, this might navigate to categories page
    navigate('/categories');
  };

  const handleCategoryClick = (categoryName: string) => {
    // Filter offers by category and navigate or show results
    console.log('Category clicked:', categoryName);
    // For now, we'll just set a search query for the category
    setSearchQuery(categoryName.toLowerCase());
    handleSearch(categoryName.toLowerCase());
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder={t('searchPlaceholder')}
                className="pl-10 border-border bg-background focus:border-[#1877F2] focus:ring-[#1877F2]/20"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" className="border-border hover:bg-accent">
              <Filter size={20} />
            </Button>
          </div>
        </motion.div>

        {/* Banner Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <ImageCarousel />
        </motion.div>

        {/* Push Notifications Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-[#1877F2] to-blue-600 rounded-xl p-6 mb-8 text-white shadow-lg"
        >
          <h3 className="font-semibold mb-2 flex items-center">
            🔔 {t('latestUpdates')}
          </h3>
          <p className="text-sm opacity-90">{t('newPremiumListings')}</p>
        </motion.div>

        {/* Search Results or Nearby Offers */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center">
              <MapPin className="mr-2 text-[#1877F2]" size={24} />
              {searchQuery ? `Search Results (${filteredOffers.length})` : t('nearbyOffers')}
            </h2>
            <Button 
              variant="ghost" 
              className="text-[#1877F2] hover:text-[#1877F2]/80 hover:bg-[#1877F2]/10"
              onClick={handleViewAllOffers}
            >
              {t('viewAll')}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleProductClick(offer.id)}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-border bg-card">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-background/95 backdrop-blur rounded-full px-3 py-1.5 flex items-center shadow-lg">
                      <Star className="text-yellow-500 fill-current mr-1" size={14} />
                      <span className="text-sm font-medium text-foreground">{offer.rating}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 left-3 bg-background/95 backdrop-blur rounded-full hover:bg-red-500 hover:text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWishlistToggle(offer);
                      }}
                    >
                      <Heart 
                        size={16} 
                        className={isInWishlist(offer.id) ? 'fill-current text-red-500' : ''} 
                      />
                    </Button>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2 text-lg">{offer.title}</h3>
                    <p className="text-[#1877F2] font-bold text-xl mb-2">{offer.price}</p>
                    <p className="text-muted-foreground text-sm flex items-center mb-4">
                      <MapPin size={14} className="mr-1" />
                      {offer.location}
                    </p>
                    <Button 
                      className="w-full bg-[#1877F2] hover:bg-[#1877F2]/90 flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(offer);
                      }}
                    >
                      <ShoppingCart size={16} className="mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredOffers.length === 0 && searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <Search className="mx-auto mb-4 text-muted-foreground" size={64} />
              <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms</p>
            </motion.div>
          )}
        </motion.section>

        {!searchQuery && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">{t('suggestions')}</h2>
              <Button 
                variant="ghost" 
                className="text-[#1877F2] hover:text-[#1877F2]/80 hover:bg-[#1877F2]/10"
                onClick={handleViewAllSuggestions}
              >
                {t('viewAll')}
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: t('electronics'), icon: '📱' },
                { name: t('fashion'), icon: '👗' },
                { name: 'Home & Garden', icon: '🏡' },
                { name: 'Automotive', icon: '🚗' }
              ].map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-card border border-border rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <div className="w-16 h-16 bg-[#1877F2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <p className="font-medium text-foreground">{category.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default Home;
