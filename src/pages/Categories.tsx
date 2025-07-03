
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
      color: 'bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800',
      items: [t('electronics'), t('fashion'), t('books'), t('sports'), t('beauty')]
    },
    {
      type: t('services'),
      icon: '🛠️',
      color: 'bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800',
      items: [t('repair'), t('cleaning'), t('tutoring'), t('photography'), t('delivery')]
    },
    {
      type: t('stores'),
      icon: '🏪',
      color: 'bg-purple-50 border-purple-200 dark:bg-purple-950/20 dark:border-purple-800',
      items: [t('grocery'), t('pharmacy'), t('clothing'), t('furniture'), t('jewelry')]
    },
    {
      type: t('serviceCenters'),
      icon: '🔧',
      color: 'bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800',
      items: [t('autoService'), t('phoneRepair'), t('applianceFix'), t('itSupport'), t('plumbing')]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoryData.map((category, index) => (
            <motion.div
              key={category.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className={`${category.color} hover:shadow-xl transition-all duration-300 cursor-pointer border-2`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{category.icon}</span>
                    <h2 className="text-xl font-bold text-foreground">{category.type}</h2>
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
                          className="bg-background/80 hover:bg-background cursor-pointer transition-all duration-200 border border-border"
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
          <Card className="bg-gradient-to-r from-[#1877F2] to-blue-600 text-white shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                🌟 {t('personalListings')}
              </h2>
              <p className="text-white/90 mb-6 text-lg">
                {t('personalListingsDesc')}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: t('cars'), icon: '🚗' },
                  { name: t('realEstate'), icon: '🏠' },
                  { name: t('jobs'), icon: '💼' },
                  { name: t('events'), icon: '🎉' }
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/20 backdrop-blur rounded-xl p-4 text-center cursor-pointer hover:bg-white/30 transition-all duration-200"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="font-medium">{item.name}</p>
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
