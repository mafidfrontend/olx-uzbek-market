
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Heart, MapPin, Star, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';

const Wishlist = () => {
  const { t } = useTranslation();
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: any) => {
    addToCart(item);
    console.log('Added to cart:', item.title);
  };

  const handleRemoveFromWishlist = (id: number) => {
    removeFromWishlist(id);
    console.log('Removed from wishlist:', id);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground flex items-center">
              <Heart className="mr-2 text-[#1877F2]" size={24} />
              {t('wishlist')} ({wishlistItems.length})
            </h1>
          </div>
        </motion.div>

        {wishlistItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <Heart className="mx-auto mb-4 text-muted-foreground" size={64} />
            <h3 className="text-xl font-semibold text-foreground mb-2">Your wishlist is empty</h3>
            <p className="text-muted-foreground">Start adding items to your wishlist to see them here</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border bg-card">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-background/95 backdrop-blur rounded-full px-3 py-1.5 flex items-center shadow-lg">
                      <Star className="text-yellow-500 fill-current mr-1" size={14} />
                      <span className="text-sm font-medium text-foreground">{item.rating}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 left-3 bg-background/95 backdrop-blur rounded-full hover:bg-red-500 hover:text-white"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
                    <p className="text-[#1877F2] font-bold text-xl mb-2">{item.price}</p>
                    <p className="text-muted-foreground text-sm flex items-center mb-4">
                      <MapPin size={14} className="mr-1" />
                      {item.location}
                    </p>
                    <Button 
                      className="w-full bg-[#1877F2] hover:bg-[#1877F2]/90"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
