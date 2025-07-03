
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, MapPin, Heart, ShoppingCart, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { useTranslation } from 'react-i18next';

const mockOffers = [
  {
    id: 1,
    title: 'iPhone 14 Pro',
    price: '12,500,000 UZS',
    location: 'Tashkent',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop',
    description: 'Brand new iPhone 14 Pro with 128GB storage. Comes with original box and accessories.',
    seller: 'TechStore Tashkent',
    phone: '+998 90 123 45 67'
  },
  {
    id: 2,
    title: 'MacBook Air M2',
    price: '18,000,000 UZS',
    location: 'Samarkand',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop',
    description: 'Latest MacBook Air with M2 chip, 8GB RAM, 256GB SSD. Perfect for work and study.',
    seller: 'Digital World',
    phone: '+998 91 234 56 78'
  },
  {
    id: 3,
    title: 'Samsung Galaxy S23',
    price: '9,800,000 UZS',
    location: 'Bukhara',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop',
    description: 'Samsung Galaxy S23 with 256GB storage. Excellent camera quality and performance.',
    seller: 'Mobile Plus',
    phone: '+998 92 345 67 89'
  },
  {
    id: 4,
    title: 'iPad Pro 11-inch',
    price: '15,200,000 UZS',
    location: 'Tashkent',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop',
    description: 'iPad Pro 11-inch with Apple Pencil support. Great for creative work and entertainment.',
    seller: 'Apple Center',
    phone: '+998 93 456 78 90'
  },
  {
    id: 5,
    title: 'Sony WH-1000XM4',
    price: '2,800,000 UZS',
    location: 'Andijan',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
    description: 'Premium noise-canceling headphones with excellent sound quality.',
    seller: 'Audio Pro',
    phone: '+998 94 567 89 01'
  },
  {
    id: 6,
    title: 'Dell XPS 13',
    price: '16,500,000 UZS',
    location: 'Namangan',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
    description: 'Dell XPS 13 laptop with Intel i7 processor, 16GB RAM, 512GB SSD.',
    seller: 'Laptop World',
    phone: '+998 95 678 90 12'
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const product = mockOffers.find(offer => offer.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Product not found</h2>
          <Button onClick={() => navigate('/')}>Go back to home</Button>
        </div>
      </div>
    );
  }

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    console.log('Added to cart:', product.title);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-6"
        >
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center text-[#1877F2] hover:text-[#1877F2]/80"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </Button>
          <Button variant="ghost" size="icon">
            <Share size={20} />
          </Button>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-background/95 backdrop-blur rounded-full px-3 py-1.5 flex items-center shadow-lg">
                <Star className="text-yellow-500 fill-current mr-1" size={16} />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
            </div>
            
            <CardContent className="p-6">
              <h1 className="text-2xl font-bold text-foreground mb-4">{product.title}</h1>
              <p className="text-3xl font-bold text-[#1877F2] mb-4">{product.price}</p>
              
              <div className="flex items-center text-muted-foreground mb-6">
                <MapPin size={16} className="mr-2" />
                <span>{product.location}</span>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-2">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-2">Seller Information</h3>
                <p className="text-muted-foreground mb-1">{product.seller}</p>
                <p className="text-muted-foreground">{product.phone}</p>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleWishlistToggle}
                  variant="outline"
                  className="flex items-center"
                >
                  <Heart 
                    size={16} 
                    className={`mr-2 ${isInWishlist(product.id) ? 'fill-current text-red-500' : ''}`} 
                  />
                  {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </Button>
                
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#1877F2] hover:bg-[#1877F2]/90 flex items-center"
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
