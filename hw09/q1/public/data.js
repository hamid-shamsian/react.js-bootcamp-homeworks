const products = [
   {
      title: "دوچرخه ۲۶",
      tagline: "در حد نو",
      price: "۲,۸۰۰,۰۰۰",
      date: "لحظاتی پیش در جنت‌آباد شمالی",
      image: "product.webp",
      chat: true
   },
   {
      title: "میز تلویزیون",
      tagline: "نو",
      price: "۱,۳۰۰,۰۰۰",
      date: "لحظاتی پیش در مجیدیه",
      image: "product2.webp",
      chat: false
   },
   {
      title: "پژو 206 تیپ ۳",
      tagline: "۳۸۰هزار کیلومتر",
      price: "۳۰۰,۰۰۰,۰۰۰",
      date: "۱ ساعت پیش در افسریه",
      image: "product5.webp",
      chat: true
   },
   {
      title: "میزصندلی کافه‌ای باغی",
      tagline: "در حد نو",
      price: "۴,۲۰۰,۰۰۰",
      date: "دو روز پیش در فلاح",
      image: "product3.webp",
      chat: true
   },
   {
      title: "پرینتر اچ‌پی ۱۲۷",
      tagline: "کارکرده",
      price: "۹,۶۰۰,۰۰۰",
      date: "فروشگاه HPC در ستارخان",
      image: "product4.webp",
      chat: false
   },
   {
      title: "دوچرخه ۲۶",
      tagline: "در حد نو",
      price: "۲,۸۰۰,۰۰۰",
      date: "لحظاتی پیش در جنت‌آباد شمالی",
      image: "product.webp",
      chat: true
   },
   {
      title: "میز تلویزیون",
      tagline: "نو",
      price: "۱,۳۰۰,۰۰۰",
      date: "لحظاتی پیش در مجیدیه",
      image: "product2.webp",
      chat: false
   },
   {
      title: "پژو 206 تیپ ۳",
      tagline: "۳۸۰هزار کیلومتر",
      price: "۳۰۰,۰۰۰,۰۰۰",
      date: "۱ ساعت پیش در افسریه",
      image: "product5.webp",
      chat: true
   },
   {
      title: "میزصندلی کافه‌ای باغی",
      tagline: "در حد نو",
      price: "۴,۲۰۰,۰۰۰",
      date: "دو روز پیش در فلاح",
      image: "product3.webp",
      chat: true
   },
   {
      title: "پرینتر اچ‌پی ۱۲۷",
      tagline: "کارکرده",
      price: "۹,۶۰۰,۰۰۰",
      date: "فروشگاه HPC در ستارخان",
      image: "product4.webp",
      chat: false
   },
   {
      title: "دوچرخه ۲۶",
      tagline: "در حد نو",
      price: "۲,۸۰۰,۰۰۰",
      date: "لحظاتی پیش در جنت‌آباد شمالی",
      image: "product.webp",
      chat: true
   },
   {
      title: "میز تلویزیون",
      tagline: "نو",
      price: "۱,۳۰۰,۰۰۰",
      date: "لحظاتی پیش در مجیدیه",
      image: "product2.webp",
      chat: false
   },
   {
      title: "پژو 206 تیپ ۳",
      tagline: "۳۸۰هزار کیلومتر",
      price: "۳۰۰,۰۰۰,۰۰۰",
      date: "۱ ساعت پیش در افسریه",
      image: "product5.webp",
      chat: true
   },
   {
      title: "میزصندلی کافه‌ای باغی",
      tagline: "در حد نو",
      price: "۴,۲۰۰,۰۰۰",
      date: "دو روز پیش در فلاح",
      image: "product3.webp",
      chat: true
   },
   {
      title: "پرینتر اچ‌پی ۱۲۷",
      tagline: "کارکرده",
      price: "۹,۶۰۰,۰۰۰",
      date: "فروشگاه HPC در ستارخان",
      image: "product4.webp",
      chat: false
   },
   {
      title: "دوچرخه ۲۶",
      tagline: "در حد نو",
      price: "۲,۸۰۰,۰۰۰",
      date: "لحظاتی پیش در جنت‌آباد شمالی",
      image: "product.webp",
      chat: true
   },
   {
      title: "میز تلویزیون",
      tagline: "نو",
      price: "۱,۳۰۰,۰۰۰",
      date: "لحظاتی پیش در مجیدیه",
      image: "product2.webp",
      chat: false
   },
   {
      title: "پژو 206 تیپ ۳",
      tagline: "۳۸۰هزار کیلومتر",
      price: "۳۰۰,۰۰۰,۰۰۰",
      date: "۱ ساعت پیش در افسریه",
      image: "product5.webp",
      chat: true
   },
   {
      title: "میزصندلی کافه‌ای باغی",
      tagline: "در حد نو",
      price: "۴,۲۰۰,۰۰۰",
      date: "دو روز پیش در فلاح",
      image: "product3.webp",
      chat: true
   },
   {
      title: "پرینتر اچ‌پی ۱۲۷",
      tagline: "کارکرده",
      price: "۹,۶۰۰,۰۰۰",
      date: "فروشگاه HPC در ستارخان",
      image: "product4.webp",
      chat: false
   },
   {
      title: "دوچرخه ۲۶",
      tagline: "در حد نو",
      price: "۲,۸۰۰,۰۰۰",
      date: "لحظاتی پیش در جنت‌آباد شمالی",
      image: "product.webp",
      chat: true
   },
   {
      title: "میز تلویزیون",
      tagline: "نو",
      price: "۱,۳۰۰,۰۰۰",
      date: "لحظاتی پیش در مجیدیه",
      image: "product2.webp",
      chat: false
   },
   {
      title: "پژو 206 تیپ ۳",
      tagline: "۳۸۰هزار کیلومتر",
      price: "۳۰۰,۰۰۰,۰۰۰",
      date: "۱ ساعت پیش در افسریه",
      image: "product5.webp",
      chat: true
   },
   {
      title: "میزصندلی کافه‌ای باغی",
      tagline: "در حد نو",
      price: "۴,۲۰۰,۰۰۰",
      date: "دو روز پیش در فلاح",
      image: "product3.webp",
      chat: true
   },
   {
      title: "پرینتر اچ‌پی ۱۲۷",
      tagline: "کارکرده",
      price: "۹,۶۰۰,۰۰۰",
      date: "فروشگاه HPC در ستارخان",
      image: "product4.webp",
      chat: false
   },
   {
      title: "دوچرخه ۲۶",
      tagline: "در حد نو",
      price: "۲,۸۰۰,۰۰۰",
      date: "لحظاتی پیش در جنت‌آباد شمالی",
      image: "product.webp",
      chat: true
   },
   {
      title: "میز تلویزیون",
      tagline: "نو",
      price: "۱,۳۰۰,۰۰۰",
      date: "لحظاتی پیش در مجیدیه",
      image: "product2.webp",
      chat: false
   },
   {
      title: "پژو 206 تیپ ۳",
      tagline: "۳۸۰هزار کیلومتر",
      price: "۳۰۰,۰۰۰,۰۰۰",
      date: "۱ ساعت پیش در افسریه",
      image: "product5.webp",
      chat: true
   },
   {
      title: "میزصندلی کافه‌ای باغی",
      tagline: "در حد نو",
      price: "۴,۲۰۰,۰۰۰",
      date: "دو روز پیش در فلاح",
      image: "product3.webp",
      chat: true
   },
   {
      title: "پرینتر اچ‌پی ۱۲۷",
      tagline: "کارکرده",
      price: "۹,۶۰۰,۰۰۰",
      date: "فروشگاه HPC در ستارخان",
      image: "product4.webp",
      chat: false
   }
];

const tags = ["خودرو سواری", "فروش آپارتمان", "موبایل", "صندلی و نیمکت", "حیوانات", "وسایل شخصی", "خدمات", "استخدام", "تلویزیون"];

const cats = [
   { title: "املاک", icon: "home" },
   { title: "وسایل نقلیه", icon: "car" },
   { title: "کالای دیجیتال", icon: "laptop" },
   { title: "خانه و آشپزخانه", icon: "bed" },
   { title: "خدمات", icon: "gears" },
   { title: "وسایل شخصی", icon: "clock-o" },
   { title: "سرگرمی و فراغت", icon: "gamepad" },
   { title: "اجتماعی", icon: "users" },
   { title: "تجهیزات و صنعتی", icon: "industry" },
   { title: "استخدام و کاریابی", icon: "briefcase" },
   { title: "رزومۀ کارجویان", icon: "user-circle" }
];

export { products, tags, cats };
