// Business Details and Menu Data for Murliwala Sweets

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  description: string;
  price?: string; // e.g. "₹400 / kg" or "₹20 / pc" or "₹40 / plate"
  category: 'sweets' | 'snacks' | 'namkeen' | 'festive';
  image: string;
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

// Image Strategy:
// All images are high-quality, lightweight Unsplash photography representing classic sweets/snacks.
// Real storefront or specific kitchen images can be uploaded directly to public/images/ and replaced.
export const MENU_ITEMS: MenuItem[] = [
  // --- SWEETS ---
  {
    id: "sweet-rabdi",
    name: "Classic Rabdi",
    hindiName: "रबड़ी",
    description: "Thick, creamy condensed milk dessert sweetened with cardamom and topped with saffron and chopped pistachios.",
    price: "₹480 / kg",
    category: "sweets",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=600&auto=format&fit=crop",
    isSpecial: true
  },
  {
    id: "sweet-kesar-peda",
    name: "Kesar Peda",
    hindiName: "केसर पेड़ा",
    description: "Rich, velvety sweet rounds prepared with fresh khoya, saffron, and cardamom. A local favourite.",
    price: "₹440 / kg",
    category: "sweets",
    image: "https://images.unsplash.com/photo-1601356616077-695728ecf769?q=80&w=600&auto=format&fit=crop",
    isSpecial: true,
    isDesiGhee: true
  },
  {
    id: "sweet-chamcham",
    name: "Bengali Chamcham",
    hindiName: "चमचम",
    description: "Traditional Bengali sweet made from fresh paneer, cooked in sugar syrup, and rolled in desiccated coconut.",
    price: "₹380 / kg",
    category: "sweets",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=600&auto=format&fit=crop", // Elegant Indian dessert photo
    isSpecial: false
  },
  {
    id: "sweet-sandesh",
    name: "Premium Sandesh",
    hindiName: "सन्देश",
    description: "Delicate, melt-in-mouth milk sweets originating from Bengal, flavored with cardamom, saffron, and pistachios.",
    price: "₹460 / kg",
    category: "sweets",
    image: "https://images.unsplash.com/photo-1601356616077-695728ecf769?q=80&w=600&auto=format&fit=crop", // Premium sweets placeholder
    isSpecial: false
  },
  {
    id: "sweet-malpua",
    name: "Desi Ghee Malpua",
    hindiName: "मालपुआ",
    description: "Rich, golden fried pancakes soaked in saffron syrup, served warm with rabdi or nuts. Crispy edges, soft center.",
    price: "₹360 / kg",
    category: "sweets",
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=600&auto=format&fit=crop", // Rich festive syrup sweets
    isSpecial: true,
    isDesiGhee: true
  },
  {
    id: "sweet-imarti",
    name: "Shahi Imarti",
    hindiName: "इमरती",
    description: "Circular flower-like sweet made of black gram batter, fried in pure desi ghee and soaked in warm sugar syrup.",
    price: "₹340 / kg",
    category: "sweets",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop", // Jalebi/Imarti style
    isSpecial: false,
    isDesiGhee: true
  },
  {
    id: "sweet-jalebi",
    name: "Kesar Jalebi",
    hindiName: "केसर जलेबी",
    description: "Crispy, hot, circular-coiled sweets fermented with local yogurt, fried and immersed in pure saffron syrup.",
    price: "₹180 / kg",
    category: "sweets",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop",
    isSpecial: true
  },

  // --- SNACKS (BREAKFAST & SNACKS) ---
  {
    id: "snack-samosa",
    name: "Special Masala Samosa",
    hindiName: "समोसा",
    description: "Flaky pastry pockets filled with perfectly spiced potatoes, green peas, and local Rajasthani whole spices.",
    price: "₹15 / pc",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop",
    isSpecial: true
  },
  {
    id: "snack-bread-kofta",
    name: "Bread Kofta",
    hindiName: "ब्रेड कोफ्ता",
    description: "Crispy, deep-fried bread fritters stuffed with seasoned potato filling, coated in chickpea flour batter.",
    price: "₹20 / pc",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop", // Snacking placeholder
    isSpecial: false
  },
  {
    id: "snack-dhokla",
    name: "Khaman Dhokla",
    hindiName: "खमन ढोकला",
    description: "Spongy, light, steamed chickpea flour cakes tempered with mustard seeds, curry leaves, and green chillies.",
    price: "₹30 / plate",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=600&auto=format&fit=crop",
    isSpecial: true
  },
  {
    id: "snack-saag-rota",
    name: "Rajasthani Saag Rota",
    hindiName: "साग रोटा",
    description: "A traditional rustic Rajasthani combination of hot green leafy saag served with thick, wood-fired bajra/wheat rota.",
    price: "₹80 / plate",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1605666804764-7967a902db76?q=80&w=600&auto=format&fit=crop", // Rustic Indian platter placeholder
    isSpecial: true
  },
  {
    id: "snack-gud-kachori",
    name: "Gud Kachori",
    hindiName: "गुड़ कचौरी",
    description: "Unique sweet & savory flaky pastry filled with jaggery, crushed fennel, nuts, and select dessert spices.",
    price: "₹25 / pc",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=600&auto=format&fit=crop", // Sweets pastry
    isSpecial: false
  },

  // --- NAMKEEN & FARSAN ---
  {
    id: "namkeen-ghee-cookies",
    name: "Desi Ghee Cookies",
    hindiName: "देशी घी कुकीज",
    description: "Crumbly, melt-in-mouth cardamon biscuits baked fresh daily using pure home-style desi ghee.",
    price: "₹360 / kg",
    category: "namkeen",
    image: "https://images.unsplash.com/photo-1605666804764-7967a902db76?q=80&w=600&auto=format&fit=crop", // Baked cookies/savory
    isSpecial: false,
    isDesiGhee: true
  },
  {
    id: "namkeen-farsan",
    name: "Rajasthani Mix Namkeen",
    hindiName: "मिक्स नमकीन",
    description: "A crispy, spicy blend of gram flour sev, lentils, peanuts, and dry spices. Perfect for tea-time.",
    price: "₹240 / kg",
    category: "namkeen",
    image: "https://images.unsplash.com/photo-1605666804764-7967a902db76?q=80&w=600&auto=format&fit=crop",
    isSpecial: true
  },
  {
    id: "namkeen-matar-suhal",
    name: "Matar Suhal",
    hindiName: "मटर सुहाल",
    description: "Crispy, layered savory crackers spiced with ajwain (carom seeds), best enjoyed with green chilli pickle.",
    price: "₹200 / kg",
    category: "namkeen",
    image: "https://images.unsplash.com/photo-1605666804764-7967a902db76?q=80&w=600&auto=format&fit=crop",
    isSpecial: false
  },
  {
    id: "namkeen-khari",
    name: "Butter Puff Khari",
    hindiName: "खारी बिस्कुट",
    description: "Light, airy, multi-layered puffed pastry biscuits, freshly baked to a golden crisp. Tea's perfect companion.",
    price: "₹180 / kg",
    category: "namkeen",
    image: "https://images.unsplash.com/photo-1605666804764-7967a902db76?q=80&w=600&auto=format&fit=crop",
    isSpecial: false
  },

  // --- FESTIVE SPECIALS ---
  {
    id: "festive-gujiya",
    name: "Kesar Gujiya",
    hindiName: "केसर गुजिया",
    description: "Crispy pastry pockets loaded with rich sweetened khoya, dry fruits, saffron, and deep fried in pure ghee.",
    price: "₹460 / kg",
    category: "festive",
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=600&auto=format&fit=crop", // Festive pastry
    isSpecial: true,
    isDesiGhee: true
  },
  {
    id: "festive-assorted",
    name: "Premium Gift Sweets Box",
    hindiName: "त्योहारी उपहार बॉक्स",
    description: "Customisable luxury sweets box featuring Kesar Peda, Sandesh, Chamcham, and dry-fruit loaded bites.",
    price: "₹650 onwards",
    category: "festive",
    image: "https://images.unsplash.com/photo-1601356616077-695728ecf769?q=80&w=600&auto=format&fit=crop", // Premium luxury box placeholder
    isSpecial: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Fresh Rabdi Boiling",
    category: "shop",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=600&auto=format&fit=crop",
    alt: "Boiling fresh milk for Rabdi at Murliwala Sweets"
  },
  {
    id: "gal-2",
    title: "Golden Saffron Jalebi",
    category: "sweets",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop",
    alt: "Hot crispy Jalebi dipping in saffron sugar syrup"
  },
  {
    id: "gal-3",
    title: "Spiced Masala Samosa",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop",
    alt: "Golden brown crisp samosas served with chutney"
  },
  {
    id: "gal-4",
    title: "Steaming Khaman Dhokla",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=600&auto=format&fit=crop",
    alt: "Spongy Gujarati Khaman Dhokla garnished with mustard and coriander"
  },
  {
    id: "gal-5",
    title: "Holi Special Kesar Gujiya",
    category: "festive",
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=600&auto=format&fit=crop",
    alt: "Mouth-watering Gujiyas stacked ready for Diwali and Holi festivals"
  },
  {
    id: "gal-6",
    title: "Saffron Pedas Layout",
    category: "sweets",
    image: "https://images.unsplash.com/photo-1601356616077-695728ecf769?q=80&w=600&auto=format&fit=crop",
    alt: "Pistachio-garnished Kesar Pedas arranged elegantly"
  }
];

// Sample testimonial content — replace with real Google reviews before final launch
export const TESTIMONIALS: Review[] = [
  {
    id: "rev-1",
    name: "Yogesh Sharma",
    rating: 5,
    comment: "The Kesar Peda here is unmatched in Jhunjhunu. It tastes authentic and is extremely fresh. Whenever we have a festival or function at home, Murliwala Sweets is our only choice.",
    date: "May 2026"
  },
  {
    id: "rev-2",
    name: "Sunita Choudhary",
    rating: 5,
    comment: "Their morning Samosa and Khaman Dhokla are fantastic. Cleanliness is very well-maintained, and the staff is extremely polite. High quality Desi Ghee sweets!",
    date: "April 2026"
  },
  {
    id: "rev-3",
    name: "Rajesh Saini",
    rating: 4.5,
    comment: "Best Rabdi and Malpua in town. They are situated in the lane opposite Axis Bank in Fauz Ka Mohalla. Very easy to find and highly recommended for premium mithai.",
    date: "June 2026"
  }
];

export const FAQS = [
  {
    question: "Do you use Desi Ghee for your sweets?",
    answer: "Many of our specialty items, including Kesar Peda, Malpua, and cookies, are prepared using Desi Ghee. (Please confirm ingredients and Desi Ghee preparations with the shop owner before ordering)."
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
