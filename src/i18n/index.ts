
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      // Navigation
      home: "Bosh sahifa",
      categories: "Kategoriyalar",
      addAd: "E'lon berish",
      bookings: "Buyurtmalar",
      profile: "Profil",
      
      // Home Page
      searchPlaceholder: "Qidirish...",
      nearbyOffers: "Yaqin takliflar",
      suggestions: "Tavsiyalar",
      viewAll: "Barchasini ko'rish",
      latestUpdates: "So'nggi yangiliklar",
      newPremiumListings: "Hududingizdagi yangi premium e'lonlar!",
      
      // Categories
      products: "Mahsulotlar",
      services: "Xizmatlar",
      stores: "Do'konlar",
      serviceCenters: "Servis Markazlari",
      personalListings: "Shaxsiy e'lonlar",
      personalListingsDesc: "Shaxsiy buyumlar, xizmatlar yoki biznes takliflaringiz uchun o'z e'lonlaringizni yarating.",
      
      // Add Ad
      title: "Sarlavha",
      description: "Tavsif",
      price: "Narx",
      category: "Kategoriya",
      location: "Joylashuv",
      submitAd: "E'lon berish",
      adFee: "E'lon narxi: 5,000 UZS",
      premium: "Premium e'lon",
      
      // Bookings
      noBookings: "Hali buyurtmalar yo'q",
      noBookingsDesc: "Buyurtma qilingan xizmatlar va mahsulotlaringiz shu yerda ko'rinadi",
      confirmed: "Tasdiqlangan",
      pending: "Kutilmoqda",
      completed: "Bajarilgan",
      contactSeller: "Sotuvchi bilan aloqa",
      reschedule: "Vaqtni o'zgartirish",
      cancelBooking: "Buyurtmani bekor qilish",
      leaveReview: "Sharh qoldirish",
      
      // Profile
      language: "Til",
      theme: "Mavzu",
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
      success: "Muvaffaqiyatli!",
      rating: "Reyting",
      
      // Product categories
      electronics: "Elektronika",
      fashion: "Moda",
      books: "Kitoblar",
      sports: "Sport",
      beauty: "Go'zallik",
      repair: "Ta'mirlash",
      cleaning: "Tozalash",
      tutoring: "Dars berish",
      photography: "Fotosurat",
      delivery: "Yetkazib berish",
      grocery: "Oziq-ovqat",
      pharmacy: "Dorixona",
      clothing: "Kiyim",
      furniture: "Mebel",
      jewelry: "Zargarlik",
      autoService: "Avtoxizmat",
      phoneRepair: "Telefon ta'mirlash",
      applianceFix: "Texnika ta'mirlash",
      itSupport: "IT yordam",
      plumbing: "Santexnik",
      cars: "Avtomobillar",
      realEstate: "Ko'chmas mulk",
      jobs: "Ish o'rinlari",
      events: "Tadbirlar"
    }
  },
  ru: {
    translation: {
      // Navigation
      home: "Главная",
      categories: "Категории",
      addAd: "Разместить объявление",
      bookings: "Заказы",
      profile: "Профиль",
      
      // Home Page
      searchPlaceholder: "Поиск...",
      nearbyOffers: "Ближайшие предложения",
      suggestions: "Рекомендации",
      viewAll: "Посмотреть все",
      latestUpdates: "Последние обновления",
      newPremiumListings: "Новые премиум объявления в вашем районе!",
      
      // Categories
      products: "Товары",
      services: "Услуги",
      stores: "Магазины",
      serviceCenters: "Сервисные центры",
      personalListings: "Персональные объявления",
      personalListingsDesc: "Создавайте собственные объявления для личных вещей, услуг или бизнес-предложений.",
      
      // Add Ad
      title: "Заголовок",
      description: "Описание",
      price: "Цена",
      category: "Категория",
      location: "Местоположение",
      submitAd: "Разместить объявление",
      adFee: "Стоимость размещения: 5,000 УЗС",
      premium: "Премиум объявление",
      
      // Bookings
      noBookings: "Пока нет заказов",
      noBookingsDesc: "Заказанные услуги и товары будут отображаться здесь",
      confirmed: "Подтверждено",
      pending: "В ожидании",
      completed: "Завершено",
      contactSeller: "Связаться с продавцом",
      reschedule: "Перенести",
      cancelBooking: "Отменить заказ",
      leaveReview: "Оставить отзыв",
      
      // Profile
      language: "Язык",
      theme: "Тема",
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
      success: "Успешно!",
      rating: "Рейтинг",
      
      // Product categories
      electronics: "Электроника",
      fashion: "Мода",
      books: "Книги",
      sports: "Спорт",
      beauty: "Красота",
      repair: "Ремонт",
      cleaning: "Уборка",
      tutoring: "Репетиторство",
      photography: "Фотография",
      delivery: "Доставка",
      grocery: "Продукты",
      pharmacy: "Аптека",
      clothing: "Одежда",
      furniture: "Мебель",
      jewelry: "Ювелирные изделия",
      autoService: "Автосервис",
      phoneRepair: "Ремонт телефонов",
      applianceFix: "Ремонт техники",
      itSupport: "IT поддержка",
      plumbing: "Сантехника",
      cars: "Автомобили",
      realEstate: "Недвижимость",
      jobs: "Работа",
      events: "События"
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
      latestUpdates: "Latest Updates",
      newPremiumListings: "New premium listings available in your area!",
      
      // Categories
      products: "Products",
      services: "Services",
      stores: "Stores",
      serviceCenters: "Service Centers",
      personalListings: "Personal Listings",
      personalListingsDesc: "Create your own listings for personal items, services, or business offerings.",
      
      // Add Ad
      title: "Title",
      description: "Description",
      price: "Price",
      category: "Category",
      location: "Location",
      submitAd: "Submit Advertisement",
      adFee: "Ad fee: 5,000 UZS",
      premium: "Premium listing",
      
      // Bookings
      noBookings: "No bookings yet",
      noBookingsDesc: "Your booked services and products will appear here",
      confirmed: "Confirmed",
      pending: "Pending",
      completed: "Completed",
      contactSeller: "Contact Seller",
      reschedule: "Reschedule",
      cancelBooking: "Cancel Booking",
      leaveReview: "Leave Review",
      
      // Profile
      language: "Language",
      theme: "Theme",
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
      success: "Success!",
      rating: "Rating",
      
      // Product categories
      electronics: "Electronics",
      fashion: "Fashion",
      books: "Books",
      sports: "Sports",
      beauty: "Beauty",
      repair: "Repair",
      cleaning: "Cleaning",
      tutoring: "Tutoring",
      photography: "Photography",
      delivery: "Delivery",
      grocery: "Grocery",
      pharmacy: "Pharmacy",
      clothing: "Clothing",
      furniture: "Furniture",
      jewelry: "Jewelry",
      autoService: "Auto Service",
      phoneRepair: "Phone Repair",
      applianceFix: "Appliance Fix",
      itSupport: "IT Support",
      plumbing: "Plumbing",
      cars: "Cars",
      realEstate: "Real Estate",
      jobs: "Jobs",
      events: "Events"
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
