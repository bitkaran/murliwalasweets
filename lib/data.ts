// Business Details and Menu Data for Murliwala Sweets

export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  hindiName?: string;
  description: string;
  price: number;
  priceLabel: string;
  category: 'sweets' | 'snacks' | 'namkeen' | 'festive';
  image: string;
  alt: string;
  unit: string;
  whatsappText: string;
  isSpecial?: boolean;
  isDesiGhee?: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'sweets' | 'snacks' | 'festive' | 'shop';
  image: string;
  alt: string;
}

export const BUSINESS_INFO = {
  name: "Murliwala Sweets",
  tagline: "Traditional Mithai, Fresh Snacks & Festive Flavours in Jhunjhunu",
  ownerName: "Murliwala Sweets Team",
  phone: "+919828357226",
  phoneDisplay: "+91 98283 57226",
  whatsappUrl: "https://wa.me/919828357226",
  phoneCallUrl: "tel:+919828357226",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=28.1249054,75.4048634",
  mapsEmbedIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.727690620959!2d75.4026747113887!3d28.124905375830948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39133bd57606cb7b%3A0xe5c50ffbb62dfc9!2sMurliwala%20Sweets!5e0!3m2!1sen!2sin!4v1717546000000!5m2!1sen!2sin", // Calibrated Google Maps embed
  address: "Near Satyam Residency, Opposite Kamal Heights, Axis Bank ke samne wali gali, Fauz Ka Mohalla, Jhunjhunu – 333001, Rajasthan",
  landmarks: {
    near: "Satyam Residency",
    opposite: "Kamal Heights",
    lane: "Axis Bank ke samne wali gali",
    locality: "Fauz Ka Mohalla",
    city: "Jhunjhunu",
    pincode: "333001",
    state: "Rajasthan"
  },
  operatingHours: "07:00 AM - 10:00 PM (Everyday)"
};

// WhatsApp order formatting function
export function createWhatsAppOrderLink(product: { name: string; priceLabel: string }) {
  const text = `Namaste Murliwala Sweets,

I would like to order/enquire about:

Product: ${product.name}
Price: ${product.priceLabel}
Quantity: ______

Customer Name:
Delivery / Pickup:
Address:
Preferred Time:

Please confirm availability and final total.`;

  return `https://wa.me/919828357226?text=${encodeURIComponent(text)}`;
}

export const MENU_ITEMS: MenuItem[] = [
  // --- SWEETS ---
  {
    id: "almond-laddu",
    name: "Almond Laddu",
    slug: "almond-laddu",
    hindiName: "बादाम लड्डू",
    description: "Nutritious and rich sweet balls packed with premium almonds and cooked in pure desi ghee.",
    price: 440.00,
    priceLabel: "₹440.00",
    category: "sweets",
    image: "/images/products/almond-laddu.png",
    alt: "Almond Laddu by Murliwala Sweets Jhunjhunu",
    unit: "per kg / as listed",
    whatsappText: "Almond Laddu - ₹440.00",
    isSpecial: true,
    isDesiGhee: true
  },
  {
    id: "moti-pakh",
    name: "Moti Pakh",
    slug: "moti-pakh",
    hindiName: "मोती पाक",
    description: "Traditional Rajasthani sweet made of chickpea flour, khoya, saffron, and cardamom, layered with silver foil.",
    price: 460.00,
    priceLabel: "₹460.00",
    category: "sweets",
    image: "/images/products/moti-pakh.png",
    alt: "Moti Pakh by Murliwala Sweets Jhunjhunu",
    unit: "per kg / as listed",
    whatsappText: "Moti Pakh - ₹460.00",
    isSpecial: true,
    isDesiGhee: true
  },
  {
    id: "nariyal-barfi",
    name: "Nariyal Barfi",
    slug: "nariyal-barfi",
    hindiName: "नारियल बर्फी",
    description: "Soft, rich milk barfi prepared with freshly grated coconut, milk, and sugar, flavored with cardamom.",
    price: 500.00,
    priceLabel: "₹500.00",
    category: "sweets",
    image: "/images/products/nariyal-barfi.png",
    alt: "Nariyal Barfi by Murliwala Sweets Jhunjhunu",
    unit: "per kg / as listed",
    whatsappText: "Nariyal Barfi - ₹500.00",
    isSpecial: false,
    isDesiGhee: false
  },
  {
    id: "kaju-katli",
    name: "Kaju Katli",
    slug: "kaju-katli",
    hindiName: "काजू कतली",
    description: "Classic Indian diamond-shaped cashew fudge sweet, thin, smooth, and melt-in-the-mouth premium quality.",
    price: 680.00,
    priceLabel: "₹680.00",
    category: "sweets",
    image: "/images/products/kaju-katli.png",
    alt: "Kaju Katli by Murliwala Sweets",
    unit: "per kg / as listed",
    whatsappText: "Kaju Katli - ₹680.00",
    isSpecial: true,
    isDesiGhee: false
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    slug: "gulab-jamun",
    hindiName: "गुलाब जामुन",
    description: "Soft, spongy milk-solid balls, deep fried and soaked in cardamon-flavored sugar syrup.",
    price: 28.00,
    priceLabel: "₹28.00",
    category: "sweets",
    image: "/images/products/gulab-jamun.png",
    alt: "Gulab Jamun by Murliwala Sweets",
    unit: "per piece / as listed",
    whatsappText: "Gulab Jamun - ₹28.00",
    isSpecial: true,
    isDesiGhee: false
  },
  {
    id: "rajbhog",
    name: "Rajbhog",
    slug: "rajbhog",
    hindiName: "राजभोग",
    description: "Large, spongy cottage cheese balls filled with saffron, dry fruits, and soaked in sweet syrup.",
    price: 30.00,
    priceLabel: "₹30.00",
    category: "sweets",
    image: "/images/products/rajbhog.png",
    alt: "Rajbhog by Murliwala Sweets",
    unit: "per piece / as listed",
    whatsappText: "Rajbhog - ₹30.00",
    isSpecial: false,
    isDesiGhee: false
  },
  {
    id: "rasgulla",
    name: "Rasgulla",
    slug: "rasgulla",
    hindiName: "रसगुल्ला",
    description: "Traditional spongy, juicy white dessert balls made of fresh paneer (chhena) cooked in light syrup.",
    price: 22.00,
    priceLabel: "₹22.00",
    category: "sweets",
    image: "/images/products/rasgulla.png",
    alt: "Rasgulla by Murliwala Sweets Jhunjhunu",
    unit: "per piece / as listed",
    whatsappText: "Rasgulla - ₹22.00",
    isSpecial: false,
    isDesiGhee: false
  },
  {
    id: "rasmalai",
    name: "Rasmalai",
    slug: "rasmalai",
    hindiName: "रसमलाई",
    description: "Soft, flattened paneer discs soaked in sweet, thickened milk flavored with cardamom, saffron, and pistachios.",
    price: 50.00,
    priceLabel: "₹50.00",
    category: "sweets",
    image: "/images/products/rasmalai.png",
    alt: "Rasmalai by Murliwala Sweets Jhunjhunu",
    unit: "per piece / as listed",
    whatsappText: "Rasmalai - ₹50.00",
    isSpecial: true,
    isDesiGhee: false
  },
  {
    id: "kalakand-barfi",
    name: "Kalakand Barfi",
    slug: "kalakand-barfi",
    hindiName: "कलाकंद बर्फी",
    description: "Rich, grainy, soft milk barfi made by reducing milk and sugar, garnished with chopped pistachios.",
    price: 460.00,
    priceLabel: "₹460.00",
    category: "sweets",
    image: "/images/products/kalakand-barfi.png",
    alt: "Kalakand Barfi by Murliwala Sweets",
    unit: "per kg / as listed",
    whatsappText: "Kalakand Barfi - ₹460.00",
    isSpecial: true,
    isDesiGhee: false
  },

  // --- SNACKS (BREAKFAST & SNACKS) ---
  {
    id: "bread-kofta",
    name: "Bread Kofta",
    slug: "bread-kofta",
    hindiName: "ब्रेड कोफ्ता",
    description: "Crispy, golden-fried bread fritters stuffed with seasoned potato filling, coated in gram batter.",
    price: 20.00,
    priceLabel: "₹20.00",
    category: "snacks",
    image: "/images/products/bread-kofta.png",
    alt: "Bread Kofta by Murliwala Sweets",
    unit: "per piece / as listed",
    whatsappText: "Bread Kofta - ₹20.00",
    isSpecial: false,
    isDesiGhee: false
  },
  {
    id: "samosa",
    name: "Samosa",
    slug: "samosa",
    hindiName: "समोसा",
    description: "Flaky pastry pockets filled with perfectly spiced potatoes, green peas, and local Rajasthani whole spices.",
    price: 20.00,
    priceLabel: "₹20.00",
    category: "snacks",
    image: "/images/products/samosa.png",
    alt: "Samosa by Murliwala Sweets Jhunjhunu",
    unit: "per piece / as listed",
    whatsappText: "Samosa - ₹20.00",
    isSpecial: true,
    isDesiGhee: false
  },
  {
    id: "kadhi-kachori",
    name: "Kadhi Kachori",
    slug: "kadhi-kachori",
    hindiName: "कढ़ी कचौरी",
    description: "Crispy, flaky kachori filled with spiced lentils, served with warm, flavorful Rajasthani kadhi.",
    price: 25.00,
    priceLabel: "₹25.00",
    category: "snacks",
    image: "/images/products/kadhi-kachori.png",
    alt: "Kadhi Kachori special at Murliwala Sweets",
    unit: "per plate / as listed",
    whatsappText: "Kadhi Kachori - ₹25.00",
    isSpecial: true,
    isDesiGhee: false
  },
  {
    id: "khaman-dhokla",
    name: "Khaman dhokla",
    slug: "khaman-dhokla",
    hindiName: "खमन ढोकला",
    description: "Light, spongy steamed chickpea flour cakes tempered with mustard seeds and curry leaves.",
    price: 220.00,
    priceLabel: "₹220.00",
    category: "snacks",
    image: "/images/products/khaman-dhokla.png",
    alt: "Khaman dhokla by Murliwala Sweets",
    unit: "per kg / as listed",
    whatsappText: "Khaman dhokla - ₹220.00",
    isSpecial: true,
    isDesiGhee: false
  },

  // --- NAMKEEN & FARSAN ---
  {
    id: "khakhra",
    name: "Khakhra",
    slug: "khakhra",
    hindiName: "खाखरा",
    description: "Thin, crispy roasted flatbread seasoned with mild spices. The ultimate light tea-time accompaniment.",
    price: 85.00,
    priceLabel: "₹85.00",
    category: "namkeen",
    image: "/images/products/khakhra.png",
    alt: "Khakhra by Murliwala Sweets",
    unit: "per packet / as listed",
    whatsappText: "Khakhra - ₹85.00",
    isSpecial: false,
    isDesiGhee: false
  },
  {
    id: "banana-chips",
    name: "Banana Chips",
    slug: "banana-chips",
    hindiName: "केला चिप्स",
    description: "Crispy, crunchy banana slices lightly salted and seasoned cleanly in premium oil.",
    price: 80.00,
    priceLabel: "₹80.00",
    category: "namkeen",
    image: "/images/products/banana-chips.png",
    alt: "Banana Chips by Murliwala Sweets",
    unit: "per packet / as listed",
    whatsappText: "Banana Chips - ₹80.00",
    isSpecial: false,
    isDesiGhee: false
  },
  {
    id: "daal-bujia",
    name: "Daal Bujia",
    slug: "daal-bujia",
    hindiName: "दाल भुजिया",
    description: "A spicy, crispy sev blend prepared using moths flour, gram flour, and signature local spices.",
    price: 280.00,
    priceLabel: "₹280.00",
    category: "namkeen",
    image: "/images/products/daal-bujia.png",
    alt: "Daal Bujia by Murliwala Sweets",
    unit: "per kg / as listed",
    whatsappText: "Daal Bujia - ₹280.00",
    isSpecial: true,
    isDesiGhee: false
  },

  // --- FESTIVE SPECIALS ---
  {
    id: "gujiya",
    name: "Gujiya",
    slug: "gujiya",
    hindiName: "गुजया",
    description: "Crispy fried sweet pastry loaded with sweetened khoya, dry fruits, and aromatic saffron.",
    price: 600.00,
    priceLabel: "₹600.00",
    category: "festive",
    image: "/images/products/gujiya.png",
    alt: "Gujiya by Murliwala Sweets Jhunjhunu",
    unit: "per kg / as listed",
    whatsappText: "Gujiya - ₹600.00",
    isSpecial: true,
    isDesiGhee: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Murliwala Signature Sweets Showcase",
    category: "sweets",
    image: "/images/gallery/signature-sweets-section.png",
    alt: "Signature sweets display at Murliwala Sweets Jhunjhunu"
  },
  {
    id: "gal-2",
    title: "Hot Savory Snacks Counter",
    category: "snacks",
    image: "/images/gallery/snacks-section.png",
    alt: "Hot kachori and snacks counter at Murliwala Sweets"
  },
  {
    id: "gal-3",
    title: "Premium Gifting Platters",
    category: "festive",
    image: "/images/gallery/bulk-orders-section.png",
    alt: "Corporate and wedding gifting sweets display box"
  },
  {
    id: "gal-4",
    title: "Traditional Festive Hampers",
    category: "festive",
    image: "/images/gallery/bulk-orders-section2.png",
    alt: "Beautiful festive sweet box packs by Murliwala Sweets"
  },
  {
    id: "gal-5",
    title: "Customer Service Desk",
    category: "shop",
    image: "/images/gallery/contact-section.png",
    alt: "Customer counter service at Murliwala Sweets shop"
  },
  {
    id: "gal-6",
    title: "Sweets Shop Frontage",
    category: "shop",
    image: "/images/gallery/shop-front.png",
    alt: "Shop front board of Murliwala Sweets Jhunjhunu"
  },
  {
    id: "gal-7",
    title: "Clean Counter Display",
    category: "shop",
    image: "/images/gallery/gallery-shop-interior.png",
    alt: "Clean and hygienic sweet trays display counter"
  },
  {
    id: "gal-8",
    title: "Signature Sweet Assortments",
    category: "sweets",
    image: "/images/gallery/signature-sweets-assortment.png",
    alt: "Freshly prepared traditional sweet trays"
  },
  {
    id: "gal-9",
    title: "Rajasthani Farsan & Kachori",
    category: "snacks",
    image: "/images/gallery/snacks-kachori-jhaal-moodi.png",
    alt: "Rajasthani savory kachoris and mix namkeens"
  }
];

// Sample testimonial content — replace with real Google reviews before final launch
export const TESTIMONIALS: Review[] = [
  {
    id: "rev-1",
    name: "Yogesh Sharma",
    rating: 5,
    comment: "The Kaju Katli here is unmatched in Jhunjhunu. It tastes authentic and is extremely fresh. Whenever we have a festival or function at home, Murliwala Sweets is our only choice.",
    date: "May 2026"
  },
  {
    id: "rev-2",
    name: "Sunita Choudhary",
    rating: 5,
    comment: "Their morning Samosa and Khaman dhokla are fantastic. Cleanliness is very well-maintained, and the staff is extremely polite. High quality Desi Ghee sweets!",
    date: "April 2026"
  },
  {
    id: "rev-3",
    name: "Rajesh Saini",
    rating: 4.5,
    comment: "Best sweets in town. They are situated in the lane opposite Axis Bank in Fauz Ka Mohalla. Very easy to find and highly recommended for premium mithai.",
    date: "June 2026"
  }
];

export const FAQS = [
  {
    question: "Do you use Desi Ghee for your sweets?",
    answer: "Many of our specialty items, including Almond Laddu, Moti Pakh, and Gujiya, are prepared using Desi Ghee. (Please confirm ingredients and Desi Ghee preparations with the shop owner before ordering)."
  },
  {
    question: "Can I place bulk orders for weddings and events?",
    answer: "Yes, we handle bulk orders for weddings, corporate gifting, and festivals. You can reach out directly via WhatsApp or Phone call to discuss your menu. (Please confirm capacity and delivery schedule with shop owner)."
  },
  {
    question: "Where is the shop exactly located?",
    answer: "We are located in Fauz Ka Mohalla, opposite Kamal Heights, in the lane opposite Axis Bank, near Satyam Residency in Jhunjhunu, Rajasthan."
  },
  {
    question: "Do you offer home delivery in Jhunjhunu?",
    answer: "We can arrange delivery for larger bulk orders and events within Jhunjhunu. For standard orders, please call to check delivery availability or pre-arrange a counter pickup. (Confirm delivery policy with shop owner)."
  }
];
