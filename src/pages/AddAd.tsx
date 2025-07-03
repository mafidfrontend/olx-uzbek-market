
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Upload, MapPin, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AddAd = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isPremium, setIsPremium] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.price) {
      toast({
        title: t('error'),
        description: 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: t('success'),
      description: 'Your advertisement has been submitted for review!',
    });

    // Reset form
    setFormData({
      title: '',
      description: '',
      price: '',
      category: '',
      location: ''
    });
    setIsPremium(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="bg-white shadow-sm px-4 py-4 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">{t('addAd')}</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Main Information */}
          <Card>
            <CardHeader>
              <CardTitle>Advertisement Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">{t('title')} *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter a catchy title for your ad"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="description">{t('description')} *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your item or service in detail"
                  className="mt-1 min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">{t('price')} (UZS) *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="0"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="category">{t('category')}</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="services">Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="location">{t('location')}</Label>
                <div className="relative mt-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Enter your location"
                    className="pl-10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Photos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#1877F2] transition-colors">
                <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-600 mb-2">Drag and drop photos here, or click to browse</p>
                <p className="text-sm text-gray-400">Up to 10 photos, max 5MB each</p>
                <Button type="button" variant="outline" className="mt-4">
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Premium Listing */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Star className="text-yellow-500" size={20} />
                  <div>
                    <p className="font-semibold">{t('premium')}</p>
                    <p className="text-sm text-gray-600">Get featured placement and more visibility</p>
                  </div>
                </div>
                <Switch
                  checked={isPremium}
                  onCheckedChange={setIsPremium}
                />
              </div>
            </CardContent>
          </Card>

          {/* Fee Information */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-lg font-semibold text-[#1877F2] mb-2">
                  {t('adFee')}
                </p>
                {isPremium && (
                  <p className="text-sm text-orange-600 font-medium">
                    Premium listing: +10,000 UZS
                  </p>
                )}
                <p className="text-xs text-gray-600 mt-2">
                  Your ad will be visible after payment confirmation
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              className="w-full bg-[#1877F2] hover:bg-[#1877F2]/90 text-white py-3 text-lg font-semibold"
            >
              {t('submitAd')} - {isPremium ? '15,000' : '5,000'} UZS
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};

export default AddAd;
