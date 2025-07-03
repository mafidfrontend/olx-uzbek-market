
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
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmed';
      case 'pending':
        return 'Pending';
      case 'completed':
        return 'Completed';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="bg-white shadow-sm px-4 py-4 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">{t('bookings')}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {mockBookings.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Calendar size={64} className="mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No bookings yet</h3>
            <p className="text-gray-500">Your booked services and products will appear here</p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {mockBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {booking.title}
                        </h3>
                        <p className="text-gray-600">{booking.seller}</p>
                      </div>
                      <Badge className={getStatusColor(booking.status)}>
                        {getStatusText(booking.status)}
                      </Badge>
                    </div>

                    {/* Price */}
                    <div className="text-2xl font-bold text-[#1877F2] mb-4">
                      {booking.price}
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-600">
                          <Calendar size={16} className="mr-2" />
                          <span className="text-sm">{booking.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock size={16} className="mr-2" />
                          <span className="text-sm">{booking.time}</span>
                        </div>
                        <div className="flex items-start text-gray-600">
                          <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{booking.location}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-600">
                          <Phone size={16} className="mr-2" />
                          <span className="text-sm">{booking.phone}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Mail size={16} className="mr-2" />
                          <span className="text-sm">{booking.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                      {booking.status === 'confirmed' && (
                        <>
                          <Button size="sm" className="bg-[#1877F2] hover:bg-[#1877F2]/90">
                            Contact Seller
                          </Button>
                          <Button size="sm" variant="outline">
                            Reschedule
                          </Button>
                        </>
                      )}
                      {booking.status === 'pending' && (
                        <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                          Cancel Booking
                        </Button>
                      )}
                      {booking.status === 'completed' && (
                        <Button size="sm" variant="outline">
                          Leave Review
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
