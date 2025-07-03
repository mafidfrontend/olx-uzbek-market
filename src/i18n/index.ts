
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      // Navigation
      home: "Glavnaya",
      categories: "Kategoriyalar",
      addAd: "Reklama Qo'shish",
      bookings: "Bron Qilinganlar",
      profile: "Profil",
      
      // Home Page
      searchPlaceholder: "Qidirish...",
      nearbyOffers: "Yaqin takliflar",
      suggestions: "Tavsiyalar",
      viewAll: "Barchasini ko'rish",
      
      // Categories
      products: "Mahsulotlar",
      services: "Xizmatlar",
      stores: "Do'konlar",
      serviceCenters: "Servis Markazlari",
      
      // Add Ad
      title: "Sarlavha",
      description: "Tavsif",
      price: "Narx",
      category: "Kategoriya",
      location: "Joylashuv",
      submitAd: "E'lon berish",
      adFee: "E'lon narxi: 5,000 UZS",
      premium: "Premium e'lon",
      
      // Profile
      language: "Til",
      businessAccount: "Biznes akkaunt",
      wallet: "Hamyon",
      transactions: "Tranzaksiyalar",
      settings: "Sozlamalar",
      
      // Common
      search: "Qidirish",
      filter: "Filtr",
      apply: "Qo'llash",
      cancel: "Bekor qilish",
      save: "Saqlash",
      edit: "Tahrirlash",
      delete: "O'chirish",
      loading: "Yuklanmoqda...",
      error: "Xatolik yuz berdi",
      success: "Muvaffaqiyatli!"
    }
  },
  ru: {
    translation: {
      // Navigation
      home: "Главная",
      categories: "Категории",
      addAd: "Добавить объявление",
      bookings: "Бронирования",
      profile: "Профиль",
      
      // Home Page
      searchPlaceholder: "Поиск...",
      nearbyOffers: "Ближайшие предложения",
      suggestions: "Рекомендации",
      viewAll: "Посмотреть все",
      
      // Categories
      products: "Товары",
      services: "Услуги",
      stores: "Магазины",
      serviceCenters: "Сервисные центры",
      
      // Add Ad
      title: "Заголовок",
      description: "Описание",
      price: "Цена",
      category: "Категория",
      location: "Местоположение",
      submitAd: "Разместить объявление",
      adFee: "Стоимость размещения: 5,000 УЗС",
      premium: "Премиум объявление",
      
      // Profile
      language: "Язык",
      businessAccount: "Бизнес аккаунт",
      wallet: "Кошелек",
      transactions: "Транзакции",
      settings: "Настройки",
      
      // Common
      search: "Поиск",
      filter: "Фильтр",
      apply: "Применить",
      cancel: "Отмена",
      save: "Сохранить",
      edit: "Редактировать",
      delete: "Удалить",
      loading: "Загрузка...",
      error: "Произошла ошибка",
      success: "Успешно!"
    }
  },
  en: {
    translation: {
      // Navigation
      home: "Home",
      categories: "Categories",
      addAd: "Add Advertisement",
      bookings: "Bookings",
      profile: "Profile",
      
      // Home Page
      searchPlaceholder: "Search...",
      nearbyOffers: "Nearby Offers",
      suggestions: "Suggestions",
      viewAll: "View All",
      
      // Categories
      products: "Products",
      services: "Services",
      stores: "Stores",
      serviceCenters: "Service Centers",
      
      // Add Ad
      title: "Title",
      description: "Description",
      price: "Price",
      category: "Category",
      location: "Location",
      submitAd: "Submit Advertisement",
      adFee: "Ad fee: 5,000 UZS",
      premium: "Premium listing",
      
      // Profile
      language: "Language",
      businessAccount: "Business Account",
      wallet: "Wallet",
      transactions: "Transactions",
      settings: "Settings",
      
      // Common
      search: "Search",
      filter: "Filter",
      apply: "Apply",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      loading: "Loading...",
      error: "An error occurred",
      success: "Success!"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
