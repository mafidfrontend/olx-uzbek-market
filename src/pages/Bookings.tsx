
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react';

const mockBookings = [
  {
    id: 1,
    title: 'iPhone 14 Pro Purchase',
    seller: 'Tech Store Tashkent',
    date: '2024-07-05',
    time: '14:30',
    status: 'confirmed',
    price: '12,500,000 UZS',
    location: 'Mirzo Ulugbek District, Tashkent',
    phone: '+998 90 123 45 67',
    email: 'techstore@example.com'
  },
  {
    id: 2,
    title: 'Laptop Repair Service',
    seller: 'Quick Fix Services',
    date: '2024-07-07',
    time: '10:00',
    status: 'pending',
    price: '350,000 UZS',
    location: 'Chilanzar District, Tashkent',
    phone: '+998 91 234 56 78',
    email: 'quickfix@example.com'
  },
  {
    id: 3,
    title: 'Photography Session',
    seller: 'Pro Photo Studio',
    date: '2024-07-10',
    time: '16:00',
    status: 'completed',
    price: '800,000 UZS',
    location: 'Yunusabad District, Tashkent',
    phone: '+998 93 345 67 89',
    email: 'prophoto@example.com'
  }
];

const Bookings = () => {
  const { t } = useTranslation();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-950/20 dark:text-green-400 dark:border-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-950/20 dark:text-yellow-400 dark:border-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-800';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-950/20 dark:text-gray-400 dark:border-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return t('confirmed');
      case 'pending':
        return t('pending');
      case 'completed':
        return t('completed');
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {mockBookings.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-muted-foreground mb-6">
              <Calendar size={80} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">{t('noBookings')}</h3>
            <p className="text-muted-foreground text-lg">{t('noBookingsDesc')}</p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {mockBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-border bg-card">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {booking.title}
                        </h3>
                        <p className="text-muted-foreground text-lg">{booking.seller}</p>
                      </div>
                      <Badge className={`${getStatusColor(booking.status)} border font-medium px-3 py-1`}>
                        {getStatusText(booking.status)}
                      </Badge>
                    </div>

                    {/* Price */}
                    <div className="text-3xl font-bold text-[#1877F2] mb-6">
                      {booking.price}
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar size={18} className="mr-3 text-[#1877F2]" />
                          <span>{booking.date}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock size={18} className="mr-3 text-[#1877F2]" />
                          <span>{booking.time}</span>
                        </div>
                        <div className="flex items-start text-muted-foreground">
                          <MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0 text-[#1877F2]" />
                          <span>{booking.location}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center text-muted-foreground">
                          <Phone size={18} className="mr-3 text-[#1877F2]" />
                          <span>{booking.phone}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Mail size={18} className="mr-3 text-[#1877F2]" />
                          <span className="truncate">{booking.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
                      {booking.status === 'confirmed' && (
                        <>
                          <Button className="bg-[#1877F2] hover:bg-[#1877F2]/90">
                            {t('contactSeller')}
                          </Button>
                          <Button variant="outline" className="border-border">
                            {t('reschedule')}
                          </Button>
                        </>
                      )}
                      {booking.status === 'pending' && (
                        <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 dark:hover:bg-red-950/20">
                          {t('cancelBooking')}
                        </Button>
                      )}
                      {booking.status === 'completed' && (
                        <Button variant="outline" className="border-border">
                          {t('leaveReview')}
                        </Button>
                      )}
                    </div>
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

export default Bookings;
