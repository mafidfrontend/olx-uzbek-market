
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, MapPin, Star, Plus, Minus, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { t } = useTranslation();
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useCart();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
    console.log('Removed from cart:', id);
  };

  const handleClearCart = () => {
    clearCart();
    console.log('Cart cleared');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' UZS';
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
              <ShoppingCart className="mr-2 text-[#1877F2]" size={24} />
              {t('cart')} ({getTotalItems()})
            </h1>
            {cartItems.length > 0 && (
              <Button 
                variant="outline" 
                onClick={handleClearCart}
                className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
              >
                Clear Cart
              </Button>
            )}
          </div>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <ShoppingCart className="mx-auto mb-4 text-muted-foreground" size={64} />
            <h3 className="text-xl font-semibold text-foreground mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground">Start adding items to your cart to see them here</p>
          </motion.div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-border bg-card">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 relative overflow-hidden rounded-lg">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                          <p className="text-[#1877F2] font-bold text-xl">{item.price}</p>
                          <p className="text-muted-foreground text-sm flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {item.location}
                          </p>
                          <div className="flex items-center mt-1">
                            <Star className="text-yellow-500 fill-current mr-1" size={14} />
                            <span className="text-sm font-medium text-foreground">{item.rating}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus size={14} />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus size={14} />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="text-red-500 hover:bg-red-500 hover:text-white"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-foreground">Total Items:</span>
                    <span className="text-lg font-bold text-foreground">{getTotalItems()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-semibold text-foreground">Total Price:</span>
                    <span className="text-2xl font-bold text-[#1877F2]">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <Button className="w-full bg-[#1877F2] hover:bg-[#1877F2]/90 text-lg py-3">
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
