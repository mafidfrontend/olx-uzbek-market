
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Categories = () => {
  const { t } = useTranslation();

  const categoryData = [
    {
      type: t('products'),
      icon: '📦',
      color: 'bg-blue-50 border-blue-200',
      items: ['Electronics', 'Fashion', 'Books', 'Sports', 'Beauty']
    },
    {
      type: t('services'),
      icon: '🛠️',
      color: 'bg-green-50 border-green-200',
      items: ['Repair', 'Cleaning', 'Tutoring', 'Photography', 'Delivery']
    },
    {
      type: t('stores'),
      icon: '🏪',
      color: 'bg-purple-50 border-purple-200',
      items: ['Grocery', 'Pharmacy', 'Clothing', 'Furniture', 'Jewelry']
    },
    {
      type: t('serviceCenters'),
      icon: '🔧',
      color: 'bg-orange-50 border-orange-200',
      items: ['Auto Service', 'Phone Repair', 'Appliance Fix', 'IT Support', 'Plumbing']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="bg-white shadow-sm px-4 py-4 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">{t('categories')}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoryData.map((category, index) => (
            <motion.div
              key={category.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className={`${category.color} hover:shadow-lg transition-all duration-300 cursor-pointer`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h2 className="text-xl font-bold text-gray-900">{category.type}</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (itemIndex * 0.05) }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-white/80 hover:bg-white cursor-pointer transition-all duration-200"
                        >
                          {item}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Personal Listings Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-[#1877F2] to-blue-600 text-white">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">🌟 Personal Listings</h2>
              <p className="text-white/90 mb-4">
                Create your own listings for personal items, services, or business offerings.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Cars', 'Real Estate', 'Jobs', 'Events'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/20 rounded-lg p-3 text-center cursor-pointer hover:bg-white/30 transition-all duration-200"
                  >
                    <p className="font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default Categories;
