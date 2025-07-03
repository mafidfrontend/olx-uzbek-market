
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Wallet, 
  Globe, 
  Briefcase, 
  Settings, 
  CreditCard, 
  Star,
  Edit,
  LogOut
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Profile = () => {
  const { t, i18n } = useTranslation();
  const [isBusinessAccount, setIsBusinessAccount] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const mockTransactions = [
    { id: 1, type: 'Ad Payment', amount: '-5,000 UZS', date: '2024-07-03' },
    { id: 2, type: 'Wallet Top-up', amount: '+50,000 UZS', date: '2024-07-01' },
    { id: 3, type: 'Premium Ad', amount: '-15,000 UZS', date: '2024-06-28' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="bg-white shadow-sm px-4 py-4 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">{t('profile')}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                    {isBusinessAccount && (
                      <Badge className="bg-[#1877F2] text-white">
                        <Briefcase size={12} className="mr-1" />
                        Business
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Star className="text-yellow-400 fill-current mr-1" size={16} />
                    <span className="text-sm">4.8 rating • 23 reviews</span>
                  </div>
                  <p className="text-gray-600 text-sm">Member since January 2024</p>
                </div>
                <Button size="sm" variant="outline">
                  <Edit size={16} className="mr-2" />
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Settings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2" size={20} />
                  {t('settings')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Language Switcher */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Globe className="mr-2 text-gray-600" size={16} />
                    <span className="font-medium">{t('language')}</span>
                  </div>
                  <Select onValueChange={changeLanguage} defaultValue={i18n.language}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uz">O'zbekcha</SelectItem>
                      <SelectItem value="ru">Русский</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Business Account Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Briefcase className="mr-2 text-gray-600" size={16} />
                    <div>
                      <p className="font-medium">{t('businessAccount')}</p>
                      <p className="text-sm text-gray-500">Access to business features</p>
                    </div>
                  </div>
                  <Switch
                    checked={isBusinessAccount}
                    onCheckedChange={setIsBusinessAccount}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Wallet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="mr-2" size={20} />
                  {t('wallet')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-[#1877F2]">85,000 UZS</p>
                  <p className="text-gray-600 text-sm">Available balance</p>
                </div>
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-[#1877F2] hover:bg-[#1877F2]/90">
                    <CreditCard size={16} className="mr-2" />
                    Top Up
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Withdraw
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Transaction History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{t('transactions')}</span>
                <Button variant="ghost" size="sm">View All</Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockTransactions.map((transaction, index) => (
                  <motion.div
                    key={transaction.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{transaction.type}</p>
                      <p className="text-sm text-gray-600">{transaction.date}</p>
                    </div>
                    <span className={`font-semibold ${
                      transaction.amount.startsWith('+') 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`}>
                      {transaction.amount}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Logout Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6"
        >
          <Button 
            variant="outline" 
            className="w-full text-red-600 border-red-200 hover:bg-red-50"
          >
            <LogOut size={16} className="mr-2" />
            Sign Out
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
