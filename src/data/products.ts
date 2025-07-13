export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  isNew: boolean;
  inStock: boolean;
  description?: string;
  specs?: string[];
  sizes?: string[];
  colors?: string[];
  ageRange?: string;
  features?: string[];
  images?: string[];
  isFlashDeal?: boolean;
  flashDealData?: {
    sold: number;
    stock: number;
    discount: number;
  };
  isFeatured?: boolean;
  isOnSale?: boolean;
}

export const products: Product[] = [
  // Fashion Products
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 1499.99,
    originalPrice: 1999.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    rating: 4.7,
    reviews: 89,
    category: "Fashion",
    brand: "StyleCo",
    isNew: true,
    inStock: true,
    description: "Premium quality cotton t-shirt with superior comfort and style. Perfect for casual wear and everyday activities.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy", "Gray"],
    specs: ["100% Premium Cotton", "Pre-shrunk", "Machine Washable", "Tagless Design"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400"
    ]
  },
  {
    id: 2,
    name: "Classic Denim Jeans",
    price: 3999.99,
    originalPrice: 4999.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    rating: 4.8,
    reviews: 156,
    category: "Fashion",
    brand: "DenimPro",
    isNew: false,
    inStock: true,
    description: "Classic fit denim jeans made from premium denim fabric. Timeless style that never goes out of fashion.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black", "Light Blue"],
    specs: ["Premium Denim", "Classic Fit", "5-Pocket Design", "Reinforced Stitching"],
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      "https://images.unsplash.com/photo-1506629905607-d9c297d3f5f5?w=400"
    ]
  },
  {
    id: 3,
    name: "Elegant Summer Dress",
    price: 4499.99,
    originalPrice: 5999.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    rating: 4.9,
    reviews: 203,
    category: "Fashion",
    brand: "ElegantWear",
    isNew: true,
    inStock: true,
    description: "Beautiful summer dress perfect for special occasions and casual outings. Lightweight and comfortable fabric.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral", "Solid Blue", "Black"],
    specs: ["Lightweight Fabric", "Breathable", "Easy Care", "Elegant Design"],
    features: ["Wrinkle Resistant", "UV Protection", "Quick Dry", "Comfortable Fit"],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400"
    ]
  },
  {
    id: 17,
    name: "Designer Leather Jacket",
    price: 12999.99,
    originalPrice: 15999.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    rating: 4.8,
    reviews: 145,
    category: "Fashion",
    brand: "LeatherCraft",
    isNew: true,
    inStock: true,
    description: "Premium genuine leather jacket with modern design and superior craftsmanship.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Tan"],
    specs: ["Genuine Leather", "YKK Zippers", "Quilted Lining", "Water Resistant"],
    features: ["Handcrafted", "Lifetime Warranty", "Premium Hardware", "Tailored Fit"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400"
    ]
  },
  {
    id: 18,
    name: "Casual Polo Shirt",
    price: 2299.99,
    originalPrice: 2999.99,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400",
    rating: 4.6,
    reviews: 298,
    category: "Fashion",
    brand: "PoloStyle",
    isNew: false,
    inStock: true,
    description: "Classic polo shirt made from premium cotton blend for everyday comfort and style.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Navy", "Red", "Green"],
    specs: ["Cotton Blend", "Moisture Wicking", "Fade Resistant", "Easy Care"],
    features: ["Breathable Fabric", "Collar Stay", "Side Vents", "Machine Washable"],
    images: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400"
    ]
  },
  {
    id: 19,
    name: "Running Shoes",
    price: 6999.99,
    originalPrice: 8999.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    rating: 4.7,
    reviews: 567,
    category: "Fashion",
    brand: "SportMax",
    isNew: true,
    inStock: true,
    description: "High-performance running shoes with advanced cushioning and breathable design.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "White", "Blue", "Red"],
    specs: ["Mesh Upper", "EVA Midsole", "Rubber Outsole", "Reflective Details"],
    features: ["Shock Absorption", "Lightweight", "Breathable", "Durable"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400"
    ]
  },
  {
    id: 20,
    name: "Formal Business Suit",
    price: 18999.99,
    originalPrice: 24999.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    rating: 4.9,
    reviews: 89,
    category: "Fashion",
    brand: "Executive",
    isNew: true,
    inStock: true,
    description: "Premium business suit tailored for the modern professional with impeccable fit and style.",
    sizes: ["38", "40", "42", "44", "46"],
    colors: ["Charcoal", "Navy", "Black"],
    specs: ["Wool Blend", "Slim Fit", "Half Canvas", "Horn Buttons"],
    features: ["Tailored Fit", "Wrinkle Resistant", "Dry Clean Only", "Professional Grade"],
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400"
    ]
  },

  // Electronics Products
  {
    id: 4,
    name: "iPhone 15 Pro Max",
    price: 59999.99,
    originalPrice: 64999.99,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    rating: 4.9,
    reviews: 1247,
    category: "Electronics",
    brand: "Apple",
    isNew: true,
    inStock: true,
    description: "The most advanced iPhone ever with A17 Pro chip, titanium design, and professional camera system.",
    specs: ["256GB Storage", "A17 Pro Chip", "48MP Camera", "6.7\" Display", "5G Ready"],
    features: ["Face ID", "Wireless Charging", "Water Resistant", "iOS 17"],
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
    ]
  },
  {
    id: 5,
    name: "Samsung Galaxy S24 Ultra",
    price: 54999.99,
    originalPrice: 59999.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    rating: 4.8,
    reviews: 892,
    category: "Electronics",
    brand: "Samsung",
    isNew: true,
    inStock: true,
    description: "Premium Android smartphone with S Pen, advanced camera system, and powerful performance.",
    specs: ["512GB Storage", "Snapdragon 8 Gen 3", "200MP Camera", "6.8\" Display"],
    features: ["S Pen Included", "Fast Charging", "Water Resistant", "Android 14"],
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400"
    ]
  },

  // Photography Products
  {
    id: 6,
    name: "Canon EOS R5 Mirrorless Camera",
    price: 194999.99,
    originalPrice: 214999.99,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    rating: 4.9,
    reviews: 234,
    category: "Photography",
    brand: "Canon",
    isNew: true,
    inStock: true,
    description: "Professional mirrorless camera with 45MP sensor, 8K video recording, and advanced autofocus system.",
    specs: ["45MP Full Frame", "8K Video", "In-Body Stabilization", "Dual Card Slots"],
    features: ["Weather Sealed", "4K 120p", "Animal Detection AF", "WiFi/Bluetooth"],
    images: [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400"
    ]
  },

  // Computers Products
  {
    id: 7,
    name: "MacBook Pro 16\" M3 Max",
    price: 199999.99,
    originalPrice: 214999.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    rating: 4.9,
    reviews: 567,
    category: "Computers",
    brand: "Apple",
    isNew: true,
    inStock: true,
    description: "The most powerful MacBook Pro ever with M3 Max chip, stunning Liquid Retina XDR display, and all-day battery life.",
    specs: ["M3 Max Chip", "32GB RAM", "1TB SSD", "16.2\" Liquid Retina XDR"],
    features: ["Touch ID", "Thunderbolt 4", "MagSafe 3", "macOS Sonoma"],
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
    ]
  },

  // Baby & Kids Products
  {
    id: 8,
    name: "Premium Baby Stroller",
    price: 14999.99,
    originalPrice: 19999.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
    rating: 4.8,
    reviews: 234,
    category: "Baby & Kids",
    brand: "BabyTrend",
    isNew: true,
    inStock: true,
    ageRange: "0-3 years",
    description: "Premium baby stroller with advanced safety features and comfortable design for your little one.",
    specs: ["Lightweight Frame", "5-Point Harness", "Large Storage", "Easy Fold"],
    features: ["Safety Certified", "All-Terrain Wheels", "Adjustable Handle", "UV Protection"],
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400"
    ]
  },

  // Tools Products
  {
    id: 9,
    name: "Cordless Drill Set",
    price: 7499.99,
    originalPrice: 9999.99,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
    rating: 4.8,
    reviews: 456,
    category: "Tools",
    brand: "DeWalt",
    isNew: true,
    inStock: true,
    description: "Professional cordless drill set with powerful motor and long-lasting battery for all your drilling needs.",
    specs: ["18V Battery", "2-Speed Gearbox", "LED Light", "Carrying Case"],
    features: ["Brushless Motor", "Quick Chuck", "Belt Clip", "2-Year Warranty"],
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400"
    ]
  },

  // Audio Products
  {
    id: 10,
    name: "Sony WH-1000XM5 Headphones",
    price: 17499.99,
    originalPrice: 19999.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    rating: 4.9,
    reviews: 1247,
    category: "Audio",
    brand: "Sony",
    isNew: true,
    inStock: true,
    description: "Industry-leading noise canceling headphones with exceptional sound quality and all-day comfort.",
    specs: ["30-hour Battery", "Active Noise Canceling", "Hi-Res Audio", "Quick Charge"],
    features: ["Touch Controls", "Voice Assistant", "Multipoint Connection", "Carry Case"],
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    ]
  },

  // Wearables Products
  {
    id: 11,
    name: "Apple Watch Series 9",
    price: 19999.99,
    originalPrice: 21499.99,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
    rating: 4.8,
    reviews: 1247,
    category: "Wearables",
    brand: "Apple",
    isNew: true,
    inStock: true,
    description: "The most advanced Apple Watch with powerful health features and seamless connectivity.",
    specs: ["S9 Chip", "Always-On Display", "Health Sensors", "Water Resistant"],
    features: ["ECG App", "Blood Oxygen", "Fall Detection", "Crash Detection"],
    images: [
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    ]
  },

  // Sports Products
  {
    id: 12,
    name: "Adjustable Dumbbell Set",
    price: 14999.99,
    originalPrice: 19999.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    rating: 4.8,
    reviews: 456,
    category: "Sports",
    brand: "PowerBlock",
    isNew: true,
    inStock: true,
    description: "Space-saving adjustable dumbbell set perfect for home workouts and strength training.",
    specs: ["5-50 lbs per hand", "Quick Weight Change", "Compact Design", "Expandable"],
    features: ["Steel Construction", "Rubber Grips", "Space Efficient", "Professional Grade"],
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400"
    ]
  },

  // Accessories Products
  {
    id: 13,
    name: "Leather Crossbody Bag",
    price: 7499.99,
    originalPrice: 9999.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    rating: 4.8,
    reviews: 456,
    category: "Accessories",
    brand: "Coach",
    isNew: true,
    inStock: true,
    description: "Premium leather crossbody bag with elegant design and practical functionality for everyday use.",
    specs: ["Genuine Leather", "Adjustable Strap", "Multiple Compartments", "Gold Hardware"],
    features: ["Handcrafted", "Dust Bag Included", "Lifetime Warranty", "Premium Lining"],
    colors: ["Brown", "Black", "Tan"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400"
    ]
  },

  // Additional Electronics Products
  {
    id: 14,
    name: "Gaming Laptop RTX 4080",
    price: 89999.99,
    originalPrice: 99999.99,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
    rating: 4.9,
    reviews: 234,
    category: "Electronics",
    brand: "ASUS",
    isNew: true,
    inStock: true,
    description: "High-performance gaming laptop with RTX 4080 graphics and latest Intel processor for ultimate gaming experience.",
    specs: ["Intel i9-13900H", "RTX 4080", "32GB DDR5", "1TB NVMe SSD", "17.3\" 240Hz Display"],
    features: ["RGB Keyboard", "Advanced Cooling", "Thunderbolt 4", "WiFi 6E"],
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
    ]
  },
  {
    id: 21,
    name: "4K Smart TV 65 inch",
    price: 45999.99,
    originalPrice: 54999.99,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    rating: 4.8,
    reviews: 456,
    category: "Electronics",
    brand: "Samsung",
    isNew: true,
    inStock: true,
    description: "Ultra HD 4K Smart TV with HDR support and built-in streaming apps for the ultimate viewing experience.",
    specs: ["65\" 4K Display", "HDR10+", "Smart TV OS", "4 HDMI Ports", "WiFi Built-in"],
    features: ["Voice Control", "Gaming Mode", "Screen Mirroring", "Energy Efficient"],
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400"
    ]
  },
  {
    id: 22,
    name: "Wireless Gaming Mouse",
    price: 3999.99,
    originalPrice: 4999.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    rating: 4.7,
    reviews: 789,
    category: "Electronics",
    brand: "Logitech",
    isNew: false,
    inStock: true,
    description: "High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons.",
    specs: ["25,600 DPI", "Wireless 2.4GHz", "11 Programmable Buttons", "RGB Lighting"],
    features: ["Ultra-Fast Response", "Long Battery Life", "Ergonomic Design", "Gaming Software"],
    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
      "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=400"
    ]
  },
  {
    id: 23,
    name: "Bluetooth Speaker Portable",
    price: 2799.99,
    originalPrice: 3499.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    rating: 4.6,
    reviews: 234,
    category: "Electronics",
    brand: "JBL",
    isNew: true,
    inStock: true,
    description: "Portable Bluetooth speaker with powerful sound and waterproof design for outdoor adventures.",
    specs: ["Bluetooth 5.0", "20W Output", "12 Hour Battery", "IPX7 Waterproof"],
    features: ["360° Sound", "Voice Assistant", "Party Mode", "Rugged Design"],
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400"
    ]
  },
  {
    id: 24,
    name: "Tablet 10.9 inch",
    price: 24999.99,
    originalPrice: 29999.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    rating: 4.8,
    reviews: 167,
    category: "Electronics",
    brand: "Apple",
    isNew: true,
    inStock: true,
    description: "Powerful tablet with stunning display and all-day battery life for work and entertainment.",
    specs: ["10.9\" Liquid Retina", "A14 Bionic Chip", "64GB Storage", "Touch ID", "USB-C"],
    features: ["Apple Pencil Support", "Magic Keyboard Compatible", "Center Stage Camera", "5G Ready"],
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400"
    ]
  },

  // Additional Photography Products
  {
    id: 15,
    name: "Professional Tripod Carbon Fiber",
    price: 24999.99,
    originalPrice: 29999.99,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
    rating: 4.8,
    reviews: 167,
    category: "Photography",
    brand: "Manfrotto",
    isNew: true,
    inStock: true,
    description: "Professional carbon fiber tripod with advanced stability and precision for professional photographers.",
    specs: ["Carbon Fiber Construction", "Max Load 8kg", "Height 180cm", "Compact Folding"],
    features: ["Weather Resistant", "Quick Release", "Adjustable Legs", "Carrying Case"],
    images: [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400"
    ]
  },
  {
    id: 25,
    name: "Camera Lens 85mm f/1.4",
    price: 54999.99,
    originalPrice: 64999.99,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
    rating: 4.9,
    reviews: 123,
    category: "Photography",
    brand: "Canon",
    isNew: true,
    inStock: true,
    description: "Professional portrait lens with exceptional bokeh and sharpness for stunning photography.",
    specs: ["85mm Focal Length", "f/1.4 Maximum Aperture", "USM Autofocus", "Weather Sealed"],
    features: ["Image Stabilization", "Fluorine Coating", "Full Frame Compatible", "Professional Grade"],
    images: [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400"
    ]
  },
  {
    id: 26,
    name: "LED Ring Light 18 inch",
    price: 8999.99,
    originalPrice: 11999.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    rating: 4.7,
    reviews: 345,
    category: "Photography",
    brand: "Neewer",
    isNew: false,
    inStock: true,
    description: "Professional LED ring light with adjustable brightness and color temperature for perfect lighting.",
    specs: ["18\" Ring Light", "Dimmable LED", "3200K-5600K", "Remote Control"],
    features: ["Phone Holder", "Adjustable Stand", "Memory Function", "Flicker-Free"],
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
    ]
  },
  {
    id: 27,
    name: "Camera Bag Professional",
    price: 4999.99,
    originalPrice: 6999.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    rating: 4.6,
    reviews: 234,
    category: "Photography",
    brand: "Peak Design",
    isNew: true,
    inStock: true,
    description: "Professional camera bag with customizable dividers and weather protection for all your gear.",
    specs: ["Weather Resistant", "Customizable Dividers", "Laptop Compartment", "Quick Access"],
    features: ["Lifetime Warranty", "Ergonomic Design", "Multiple Pockets", "TSA Friendly"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400"
    ]
  },
  {
    id: 28,
    name: "Wireless Flash Trigger",
    price: 3499.99,
    originalPrice: 4499.99,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    rating: 4.5,
    reviews: 156,
    category: "Photography",
    brand: "Godox",
    isNew: true,
    inStock: true,
    description: "Wireless flash trigger system for professional studio and outdoor photography setups.",
    specs: ["2.4GHz Wireless", "100m Range", "16 Channels", "TTL Support"],
    features: ["High Speed Sync", "Multi-Flash Control", "LCD Display", "Long Battery Life"],
    images: [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400"
    ]
  },

  // Additional Audio Products
  {
    id: 16,
    name: "Studio Monitor Speakers",
    price: 34999.99,
    originalPrice: 39999.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    rating: 4.9,
    reviews: 89,
    category: "Audio",
    brand: "KRK",
    isNew: true,
    inStock: true,
    description: "Professional studio monitor speakers with accurate sound reproduction for music production and mixing.",
    specs: ["5-inch Woofer", "1-inch Tweeter", "50W Power", "Frequency Response 45Hz-35kHz"],
    features: ["Bi-Amplified", "Front-Firing Port", "Multiple Inputs", "Room EQ"],
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    ]
  },

  // Additional Computers Products
  {
    id: 29,
    name: "Gaming Desktop PC",
    price: 75999.99,
    originalPrice: 89999.99,
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400",
    rating: 4.8,
    reviews: 156,
    category: "Computers",
    brand: "Custom Build",
    isNew: true,
    inStock: true,
    description: "High-performance gaming desktop with latest components for ultimate gaming and productivity.",
    specs: ["Intel i7-13700K", "RTX 4070", "32GB DDR5", "1TB NVMe SSD", "850W PSU"],
    features: ["RGB Lighting", "Liquid Cooling", "Tempered Glass", "Cable Management"],
    images: [
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400",
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400"
    ]
  },
  {
    id: 30,
    name: "Ultrabook 13 inch",
    price: 54999.99,
    originalPrice: 64999.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    rating: 4.7,
    reviews: 234,
    category: "Computers",
    brand: "Dell",
    isNew: true,
    inStock: true,
    description: "Ultra-portable laptop with premium build quality and all-day battery life for professionals.",
    specs: ["Intel i5-1340P", "16GB RAM", "512GB SSD", "13.3\" FHD", "Thunderbolt 4"],
    features: ["Fingerprint Reader", "Backlit Keyboard", "WiFi 6E", "Fast Charging"],
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400"
    ]
  },
  {
    id: 31,
    name: "Mechanical Keyboard RGB",
    price: 7999.99,
    originalPrice: 9999.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
    rating: 4.6,
    reviews: 567,
    category: "Computers",
    brand: "Corsair",
    isNew: false,
    inStock: true,
    description: "Premium mechanical keyboard with RGB backlighting and customizable switches for gaming and typing.",
    specs: ["Cherry MX Switches", "RGB Backlighting", "USB-C", "Aluminum Frame"],
    features: ["Hot-Swappable", "Programmable Keys", "Media Controls", "Wrist Rest"],
    images: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
    ]
  },
  {
    id: 32,
    name: "4K Monitor 27 inch",
    price: 24999.99,
    originalPrice: 29999.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    rating: 4.8,
    reviews: 345,
    category: "Computers",
    brand: "LG",
    isNew: true,
    inStock: true,
    description: "Professional 4K monitor with accurate colors and multiple connectivity options for creative work.",
    specs: ["27\" 4K IPS", "99% sRGB", "USB-C Hub", "HDR10", "60Hz Refresh"],
    features: ["Color Calibration", "Ergonomic Stand", "Blue Light Filter", "Picture-in-Picture"],
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400"
    ]
  },
  {
    id: 33,
    name: "External SSD 2TB",
    price: 12999.99,
    originalPrice: 15999.99,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400",
    rating: 4.7,
    reviews: 234,
    category: "Computers",
    brand: "Samsung",
    isNew: true,
    inStock: true,
    description: "High-speed external SSD with massive storage capacity and portable design for professionals.",
    specs: ["2TB Capacity", "USB 3.2 Gen 2", "1050 MB/s Read", "Shock Resistant"],
    features: ["Password Protection", "AES Encryption", "Compact Design", "Cross-Platform"],
    images: [
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
    ]
  },

  // Additional Baby & Kids Products
  {
    id: 34,
    name: "Baby Stroller Lightweight",
    price: 8999.99,
    originalPrice: 11999.99,
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400",
    rating: 4.8,
    reviews: 234,
    category: "Baby & Kids",
    brand: "Chicco",
    isNew: true,
    inStock: true,
    description: "Lightweight and compact baby stroller with easy folding mechanism and safety features.",
    specs: ["5-Point Harness", "One-Hand Fold", "Adjustable Canopy", "Storage Basket"],
    features: ["Lightweight Design", "Smooth Wheels", "Safety Certified", "Easy Maneuver"],
    ageRange: "0-3 years",
    images: [
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400"
    ]
  },
  {
    id: 35,
    name: "Educational Toy Set",
    price: 2999.99,
    originalPrice: 3999.99,
    image: "https://images.unsplash.com/photo-1558877385-1c2d7b8e7b35?w=400",
    rating: 4.7,
    reviews: 456,
    category: "Baby & Kids",
    brand: "LeapFrog",
    isNew: false,
    inStock: true,
    description: "Interactive educational toy set that promotes learning through play with colors, shapes, and sounds.",
    specs: ["Interactive Learning", "Sound Effects", "Colorful Design", "Safe Materials"],
    features: ["Educational Content", "Durable Build", "Age Appropriate", "Skill Development"],
    ageRange: "2-5 years",
    images: [
      "https://images.unsplash.com/photo-1558877385-1c2d7b8e7b35?w=400",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400"
    ]
  },
  {
    id: 36,
    name: "Baby Car Seat",
    price: 12999.99,
    originalPrice: 15999.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
    rating: 4.9,
    reviews: 167,
    category: "Baby & Kids",
    brand: "Graco",
    isNew: true,
    inStock: true,
    description: "Premium baby car seat with advanced safety features and comfortable padding for long journeys.",
    specs: ["5-Point Harness", "Side Impact Protection", "Easy Installation", "Adjustable Headrest"],
    features: ["Safety Certified", "Machine Washable", "ISOFIX Compatible", "Premium Padding"],
    ageRange: "0-4 years",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400"
    ]
  },
  {
    id: 37,
    name: "Kids Bicycle 16 inch",
    price: 6999.99,
    originalPrice: 8999.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    rating: 4.6,
    reviews: 234,
    category: "Baby & Kids",
    brand: "Schwinn",
    isNew: true,
    inStock: true,
    description: "Colorful kids bicycle with training wheels and safety features for learning to ride.",
    specs: ["16\" Wheels", "Training Wheels", "Hand Brakes", "Adjustable Seat"],
    features: ["Safety Reflectors", "Chain Guard", "Easy Assembly", "Durable Frame"],
    ageRange: "4-7 years",
    colors: ["Red", "Blue", "Pink", "Green"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400"
    ]
  },
  {
    id: 38,
    name: "Baby Monitor with Camera",
    price: 7999.99,
    originalPrice: 9999.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
    rating: 4.8,
    reviews: 189,
    category: "Baby & Kids",
    brand: "Motorola",
    isNew: true,
    inStock: true,
    description: "Digital baby monitor with HD camera, night vision, and smartphone connectivity for peace of mind.",
    specs: ["HD Camera", "Night Vision", "Two-Way Audio", "Smartphone App"],
    features: ["Motion Detection", "Temperature Sensor", "Lullabies", "Long Range"],
    ageRange: "0-3 years",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
      "https://images.unsplash.com/photo-1558877385-1c2d7b8e7b35?w=400"
    ]
  },

  // Additional Tools Products
  {
    id: 39,
    name: "Cordless Drill Set",
    price: 8999.99,
    originalPrice: 11999.99,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
    rating: 4.7,
    reviews: 345,
    category: "Tools",
    brand: "DeWalt",
    isNew: true,
    inStock: true,
    description: "Professional cordless drill set with multiple bits and carrying case for all your drilling needs.",
    specs: ["18V Battery", "13mm Chuck", "2-Speed Gearbox", "LED Light"],
    features: ["Quick Charge", "Belt Clip", "Carrying Case", "Multiple Bits"],
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
    ]
  },
  {
    id: 40,
    name: "Tool Set 150 Pieces",
    price: 12999.99,
    originalPrice: 16999.99,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
    rating: 4.8,
    reviews: 234,
    category: "Tools",
    brand: "Craftsman",
    isNew: true,
    inStock: true,
    description: "Comprehensive 150-piece tool set with everything you need for home repairs and projects.",
    specs: ["150 Pieces", "Chrome Vanadium Steel", "Ratcheting Handles", "Organized Case"],
    features: ["Lifetime Warranty", "Professional Grade", "Organized Storage", "Complete Set"],
    images: [
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400"
    ]
  },
  {
    id: 41,
    name: "Circular Saw",
    price: 6999.99,
    originalPrice: 8999.99,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
    rating: 4.6,
    reviews: 167,
    category: "Tools",
    brand: "Makita",
    isNew: false,
    inStock: true,
    description: "Powerful circular saw with precision cutting capabilities for woodworking and construction projects.",
    specs: ["1400W Motor", "185mm Blade", "Depth Adjustment", "Dust Port"],
    features: ["Laser Guide", "Safety Guard", "Ergonomic Handle", "Dust Collection"],
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
    ]
  },
  {
    id: 42,
    name: "Digital Multimeter",
    price: 2999.99,
    originalPrice: 3999.99,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
    rating: 4.5,
    reviews: 123,
    category: "Tools",
    brand: "Fluke",
    isNew: true,
    inStock: true,
    description: "Professional digital multimeter for electrical testing and troubleshooting with high accuracy.",
    specs: ["True RMS", "Auto Range", "Data Hold", "Backlit Display"],
    features: ["Safety Rated", "Drop Protection", "Long Battery Life", "Test Leads Included"],
    images: [
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400"
    ]
  },
  {
    id: 43,
    name: "Workbench with Storage",
    price: 15999.99,
    originalPrice: 19999.99,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
    rating: 4.8,
    reviews: 89,
    category: "Tools",
    brand: "Keter",
    isNew: true,
    inStock: true,
    description: "Heavy-duty workbench with integrated storage drawers and pegboard for organized workspace.",
    specs: ["Steel Frame", "Bamboo Top", "Storage Drawers", "Pegboard"],
    features: ["Adjustable Feet", "Tool Holders", "Heavy Duty", "Easy Assembly"],
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
    ]
  },

  // Additional Audio Products
  {
    id: 44,
    name: "Wireless Earbuds Pro",
    price: 8999.99,
    originalPrice: 11999.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
    rating: 4.7,
    reviews: 567,
    category: "Audio",
    brand: "Apple",
    isNew: true,
    inStock: true,
    description: "Premium wireless earbuds with active noise cancellation and spatial audio technology.",
    specs: ["Active Noise Cancellation", "Spatial Audio", "6 Hour Battery", "Wireless Charging"],
    features: ["Transparency Mode", "Adaptive EQ", "Sweat Resistant", "Quick Charge"],
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    ]
  },
  {
    id: 45,
    name: "Gaming Headset RGB",
    price: 5999.99,
    originalPrice: 7999.99,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400",
    rating: 4.6,
    reviews: 345,
    category: "Audio",
    brand: "SteelSeries",
    isNew: false,
    inStock: true,
    description: "Professional gaming headset with surround sound and RGB lighting for immersive gaming experience.",
    specs: ["7.1 Surround Sound", "Noise Cancelling Mic", "RGB Lighting", "50mm Drivers"],
    features: ["Comfortable Padding", "Retractable Mic", "Multi-Platform", "Durable Build"],
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400"
    ]
  },
  {
    id: 46,
    name: "Vinyl Record Player",
    price: 18999.99,
    originalPrice: 24999.99,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    rating: 4.8,
    reviews: 123,
    category: "Audio",
    brand: "Audio-Technica",
    isNew: true,
    inStock: true,
    description: "Premium vinyl record player with high-quality cartridge and built-in preamp for audiophiles.",
    specs: ["Belt Drive", "Anti-Resonance Platter", "Magnetic Cartridge", "Built-in Preamp"],
    features: ["USB Output", "Pitch Control", "Dust Cover", "Professional Grade"],
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400"
    ]
  },
  {
    id: 47,
    name: "Soundbar with Subwoofer",
    price: 24999.99,
    originalPrice: 29999.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    rating: 4.7,
    reviews: 234,
    category: "Audio",
    brand: "Sonos",
    isNew: true,
    inStock: true,
    description: "Premium soundbar with wireless subwoofer for cinematic home theater experience.",
    specs: ["Dolby Atmos", "Wireless Subwoofer", "HDMI eARC", "Voice Control"],
    features: ["Room Calibration", "Multi-Room Audio", "Streaming Services", "Easy Setup"],
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    ]
  },
  {
    id: 48,
    name: "Podcast Microphone USB",
    price: 7999.99,
    originalPrice: 9999.99,
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400",
    rating: 4.6,
    reviews: 189,
    category: "Audio",
    brand: "Blue Yeti",
    isNew: true,
    inStock: true,
    description: "Professional USB microphone perfect for podcasting, streaming, and content creation.",
    specs: ["USB Connectivity", "Multiple Pickup Patterns", "Headphone Monitoring", "Mute Button"],
    features: ["Zero-Latency Monitoring", "Plug and Play", "Adjustable Stand", "Studio Quality"],
    images: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    ]
  },

  // Additional Wearables Products
  {
    id: 49,
    name: "Fitness Tracker Advanced",
    price: 12999.99,
    originalPrice: 15999.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
    rating: 4.7,
    reviews: 456,
    category: "Wearables",
    brand: "Fitbit",
    isNew: true,
    inStock: true,
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and comprehensive health insights.",
    specs: ["Heart Rate Monitor", "Built-in GPS", "7-Day Battery", "Water Resistant"],
    features: ["Sleep Tracking", "Stress Management", "Smartphone Notifications", "Health Insights"],
    colors: ["Black", "Blue", "Pink", "White"],
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400"
    ]
  },
  {
    id: 50,
    name: "VR Headset Gaming",
    price: 34999.99,
    originalPrice: 39999.99,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400",
    rating: 4.8,
    reviews: 234,
    category: "Wearables",
    brand: "Meta",
    isNew: true,
    inStock: true,
    description: "Immersive VR headset for gaming and entertainment with high-resolution displays and spatial audio.",
    specs: ["4K Display", "120Hz Refresh", "Spatial Audio", "Hand Tracking"],
    features: ["Wireless Freedom", "Guardian System", "Social VR", "Extensive Library"],
    images: [
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400",
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400"
    ]
  },
  {
    id: 51,
    name: "Smart Glasses AR",
    price: 28999.99,
    originalPrice: 34999.99,
    image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400",
    rating: 4.5,
    reviews: 89,
    category: "Wearables",
    brand: "Ray-Ban",
    isNew: true,
    inStock: true,
    description: "Smart glasses with augmented reality features, camera, and voice assistant integration.",
    specs: ["HD Camera", "Voice Assistant", "Bluetooth Audio", "UV Protection"],
    features: ["Hands-Free Photos", "Music Streaming", "Call Handling", "Stylish Design"],
    colors: ["Black", "Brown", "Clear"],
    images: [
      "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400",
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400"
    ]
  },
  {
    id: 52,
    name: "Wireless Charging Watch",
    price: 18999.99,
    originalPrice: 24999.99,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
    rating: 4.6,
    reviews: 345,
    category: "Wearables",
    brand: "Samsung",
    isNew: false,
    inStock: true,
    description: "Premium smartwatch with wireless charging, health monitoring, and smartphone integration.",
    specs: ["AMOLED Display", "Wireless Charging", "Health Sensors", "Water Resistant"],
    features: ["ECG Monitoring", "Sleep Analysis", "Workout Tracking", "Long Battery Life"],
    colors: ["Silver", "Black", "Gold", "Rose Gold"],
    images: [
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400"
    ]
  },
  {
    id: 53,
    name: "Smart Ring Health",
    price: 14999.99,
    originalPrice: 18999.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
    rating: 4.4,
    reviews: 123,
    category: "Wearables",
    brand: "Oura",
    isNew: true,
    inStock: true,
    description: "Discreet smart ring that tracks sleep, activity, and recovery with advanced health insights.",
    specs: ["Sleep Tracking", "Activity Monitor", "Temperature Sensor", "7-Day Battery"],
    features: ["Waterproof", "Discreet Design", "Health Insights", "App Integration"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["Silver", "Black", "Gold"],
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400"
    ]
  },

  // Additional Sports Products
  {
    id: 54,
    name: "Yoga Mat Premium",
    price: 3999.99,
    originalPrice: 4999.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    rating: 4.7,
    reviews: 567,
    category: "Sports",
    brand: "Manduka",
    isNew: false,
    inStock: true,
    description: "Premium yoga mat with superior grip and cushioning for comfortable practice sessions.",
    specs: ["6mm Thickness", "Non-Slip Surface", "Eco-Friendly", "Easy Clean"],
    features: ["Alignment Lines", "Carrying Strap", "Odor Resistant", "Durable Material"],
    colors: ["Purple", "Blue", "Green", "Black", "Pink"],
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
    ]
  },
  {
    id: 55,
    name: "Dumbbells Adjustable Set",
    price: 15999.99,
    originalPrice: 19999.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    rating: 4.8,
    reviews: 234,
    category: "Sports",
    brand: "Bowflex",
    isNew: true,
    inStock: true,
    description: "Adjustable dumbbell set that replaces multiple weights with quick-change system for home workouts.",
    specs: ["5-50 lbs Range", "Quick Adjust", "Compact Design", "Durable Construction"],
    features: ["Space Saving", "Easy Storage", "Professional Grade", "Safety Lock"],
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400"
    ]
  },
  {
    id: 56,
    name: "Basketball Official Size",
    price: 2499.99,
    originalPrice: 2999.99,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400",
    rating: 4.6,
    reviews: 345,
    category: "Sports",
    brand: "Spalding",
    isNew: false,
    inStock: true,
    description: "Official size basketball with premium leather construction for indoor and outdoor play.",
    specs: ["Official Size 7", "Composite Leather", "Deep Channel Design", "All-Surface"],
    features: ["Superior Grip", "Consistent Bounce", "Durable Build", "Professional Grade"],
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
    ]
  },
  {
    id: 57,
    name: "Tennis Racket Pro",
    price: 8999.99,
    originalPrice: 11999.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
    rating: 4.7,
    reviews: 167,
    category: "Sports",
    brand: "Wilson",
    isNew: true,
    inStock: true,
    description: "Professional tennis racket with advanced frame technology for power and control on the court.",
    specs: ["100 sq in Head", "295g Weight", "16x19 String Pattern", "Carbon Fiber"],
    features: ["Shock Absorption", "Power Enhancement", "Control Technology", "Professional Grade"],
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400"
    ]
  },
  {
    id: 58,
    name: "Resistance Bands Set",
    price: 1999.99,
    originalPrice: 2999.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    rating: 4.5,
    reviews: 456,
    category: "Sports",
    brand: "TRX",
    isNew: true,
    inStock: true,
    description: "Complete resistance bands set with multiple resistance levels for full-body workouts anywhere.",
    specs: ["5 Resistance Levels", "Door Anchor", "Handles & Ankle Straps", "Carrying Bag"],
    features: ["Portable Workout", "Full Body Training", "Durable Material", "Exercise Guide"],
    colors: ["Multi-Color Set"],
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400"
    ]
  },

  // Additional Accessories Products
  {
    id: 59,
    name: "Designer Sunglasses",
    price: 12999.99,
    originalPrice: 15999.99,
    image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400",
    rating: 4.8,
    reviews: 234,
    category: "Accessories",
    brand: "Ray-Ban",
    isNew: true,
    inStock: true,
    description: "Classic designer sunglasses with UV protection and timeless style for any occasion.",
    specs: ["UV400 Protection", "Polarized Lenses", "Metal Frame", "Scratch Resistant"],
    features: ["Classic Design", "Comfortable Fit", "Premium Materials", "Case Included"],
    colors: ["Black", "Brown", "Gold", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
    ]
  },
  {
    id: 60,
    name: "Luxury Watch Automatic",
    price: 45999.99,
    originalPrice: 54999.99,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
    rating: 4.9,
    reviews: 89,
    category: "Accessories",
    brand: "Seiko",
    isNew: true,
    inStock: true,
    description: "Luxury automatic watch with precision movement and elegant design for the discerning collector.",
    specs: ["Automatic Movement", "Sapphire Crystal", "Water Resistant", "Stainless Steel"],
    features: ["Power Reserve", "Date Display", "Luminous Hands", "Premium Craftsmanship"],
    colors: ["Silver", "Gold", "Black"],
    images: [
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
      "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400"
    ]
  },
  {
    id: 61,
    name: "Leather Wallet Premium",
    price: 4999.99,
    originalPrice: 6999.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    rating: 4.7,
    reviews: 345,
    category: "Accessories",
    brand: "Coach",
    isNew: false,
    inStock: true,
    description: "Premium leather wallet with RFID protection and multiple card slots for everyday use.",
    specs: ["Genuine Leather", "RFID Blocking", "8 Card Slots", "Bill Compartment"],
    features: ["Handcrafted", "Slim Design", "Durable Construction", "Gift Box"],
    colors: ["Black", "Brown", "Tan"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400"
    ]
  },
  {
    id: 62,
    name: "Silk Scarf Designer",
    price: 8999.99,
    originalPrice: 11999.99,
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400",
    rating: 4.6,
    reviews: 167,
    category: "Accessories",
    brand: "Hermès",
    isNew: true,
    inStock: true,
    description: "Luxurious silk scarf with artistic design and premium quality for elegant styling.",
    specs: ["100% Silk", "90cm x 90cm", "Hand-Rolled Edges", "Artistic Print"],
    features: ["Versatile Styling", "Premium Quality", "Gift Packaging", "Timeless Design"],
    colors: ["Blue", "Red", "Green", "Multi-Color"],
    images: [
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
    ]
  },
  {
    id: 63,
    name: "Phone Case Protective",
    price: 1999.99,
    originalPrice: 2999.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    rating: 4.5,
    reviews: 789,
    category: "Accessories",
    brand: "OtterBox",
    isNew: true,
    inStock: true,
    description: "Heavy-duty protective phone case with drop protection and wireless charging compatibility.",
    specs: ["Drop Protection", "Wireless Charging", "Precise Cutouts", "Raised Edges"],
    features: ["Military Grade", "Easy Installation", "Screen Protection", "Button Covers"],
    colors: ["Clear", "Black", "Blue", "Pink"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400"
    ]
  },

  // Flash Deals Products
  {
    id: 1001,
    name: "Flash Deal - Wireless Earbuds Pro",
    price: 1499.99,
    originalPrice: 3999.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
    rating: 4.8,
    reviews: 234,
    category: "Electronics",
    brand: "Apple",
    isNew: true,
    inStock: true,
    isFlashDeal: true,
    flashDealData: {
      sold: 189,
      stock: 50,
      discount: 63
    },
    description: "Premium wireless earbuds with active noise cancellation and spatial audio technology for ultimate listening experience.",
    specs: ["Active Noise Cancellation", "Spatial Audio", "6 Hour Battery", "Wireless Charging", "Sweat Resistant"],
    features: ["Transparency Mode", "Adaptive EQ", "Quick Charge", "Premium Sound Quality"],
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    ]
  },
  {
    id: 1002,
    name: "Flash Deal - Gaming Mouse RGB",
    price: 999.99,
    originalPrice: 2499.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    rating: 4.7,
    reviews: 456,
    category: "Electronics",
    brand: "Logitech",
    isNew: true,
    inStock: true,
    isFlashDeal: true,
    flashDealData: {
      sold: 267,
      stock: 33,
      discount: 60
    },
    description: "High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons for competitive gaming.",
    specs: ["25,600 DPI", "Wireless 2.4GHz", "11 Programmable Buttons", "RGB Lighting", "Ultra-Fast Response"],
    features: ["Long Battery Life", "Ergonomic Design", "Gaming Software", "Professional Grade"],
    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
      "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=400"
    ]
  },
  {
    id: 1003,
    name: "Flash Deal - Bluetooth Speaker",
    price: 1249.99,
    originalPrice: 4999.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    rating: 4.6,
    reviews: 189,
    category: "Audio",
    brand: "JBL",
    isNew: true,
    inStock: true,
    isFlashDeal: true,
    flashDealData: {
      sold: 423,
      stock: 77,
      discount: 75
    },
    description: "Portable Bluetooth speaker with powerful sound and waterproof design for outdoor adventures and parties.",
    specs: ["Bluetooth 5.0", "20W Output", "12 Hour Battery", "IPX7 Waterproof", "360° Sound"],
    features: ["Voice Assistant", "Party Mode", "Rugged Design", "Premium Audio"],
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400"
    ]
  },
  {
    id: 1004,
    name: "Flash Deal - Smartwatch Fitness",
    price: 2999.99,
    originalPrice: 7999.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
    rating: 4.5,
    reviews: 123,
    category: "Wearables",
    brand: "Samsung",
    isNew: true,
    inStock: true,
    isFlashDeal: true,
    flashDealData: {
      sold: 156,
      stock: 44,
      discount: 63
    },
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and comprehensive health insights for active lifestyle.",
    specs: ["Heart Rate Monitor", "Built-in GPS", "7-Day Battery", "Water Resistant", "Health Sensors"],
    features: ["Sleep Tracking", "Stress Management", "Smartphone Notifications", "Workout Tracking"],
    colors: ["Black", "Silver", "Rose Gold"],
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400"
    ]
  },
  {
    id: 1005,
    name: "Flash Deal - Mechanical Keyboard",
    price: 3999.99,
    originalPrice: 7999.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
    rating: 4.9,
    reviews: 345,
    category: "Computers",
    brand: "Corsair",
    isNew: true,
    inStock: true,
    isFlashDeal: true,
    flashDealData: {
      sold: 89,
      stock: 21,
      discount: 50
    },
    description: "Premium mechanical keyboard with RGB backlighting and customizable switches for gaming and professional typing.",
    specs: ["Cherry MX Switches", "RGB Backlighting", "USB-C", "Aluminum Frame", "Hot-Swappable"],
    features: ["Programmable Keys", "Media Controls", "Wrist Rest", "Gaming Mode"],
    images: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
    ]
  },
  {
    id: 1006,
    name: "Flash Deal - Wireless Charger",
    price: 799.99,
    originalPrice: 1999.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    rating: 4.4,
    reviews: 167,
    category: "Electronics",
    brand: "Anker",
    isNew: true,
    inStock: true,
    isFlashDeal: true,
    flashDealData: {
      sold: 234,
      stock: 66,
      discount: 60
    },
    description: "Fast wireless charging pad compatible with all Qi-enabled devices for convenient charging.",
    specs: ["Qi Wireless Charging", "10W Fast Charge", "LED Indicator", "Non-Slip Surface"],
    features: ["Universal Compatibility", "Overcharge Protection", "Compact Design", "Easy Setup"],
    colors: ["Black", "White"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400"
    ]
  },
  {
    id: 1007,
    name: "Flash Deal - Fitness Resistance Bands",
    price: 599.99,
    originalPrice: 1499.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    rating: 4.6,
    reviews: 234,
    category: "Sports",
    brand: "TRX",
    isNew: true,
    inStock: true,
    isFlashDeal: true,
    flashDealData: {
      sold: 345,
      stock: 55,
      discount: 60
    },
    description: "Complete resistance bands set with multiple resistance levels for full-body workouts anywhere.",
    specs: ["5 Resistance Levels", "Door Anchor", "Handles & Ankle Straps", "Carrying Bag"],
    features: ["Portable Workout", "Full Body Training", "Durable Material", "Exercise Guide"],
    sizes: ["Light", "Medium", "Heavy"],
    colors: ["Black", "Blue", "Red"],
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400"
    ]
  },
  {
    id: 1008,
    name: "Flash Deal - Phone Case Premium",
    price: 499.99,
    originalPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    rating: 4.7,
    reviews: 789,
    category: "Accessories",
    brand: "OtterBox",
    isNew: true,
    inStock: true,
    isFlashDeal: true,
    flashDealData: {
      sold: 567,
      stock: 133,
      discount: 62
    },
    description: "Heavy-duty protective phone case with drop protection and wireless charging compatibility.",
    specs: ["Drop Protection", "Wireless Charging", "Precise Cutouts", "Raised Edges"],
    features: ["Military Grade", "Easy Installation", "Screen Protection", "Button Covers"],
    sizes: ["iPhone 14", "iPhone 15", "Samsung S24"],
    colors: ["Black", "Clear", "Blue"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400"
    ]
  },
  {
    id: 1009,
    name: "Flash Deal - LED Desk Lamp",
    price: 1199.99,
    originalPrice: 2999.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    rating: 4.5,
    reviews: 156,
    category: "Electronics",
    brand: "Philips",
    isNew: true,
    inStock: true,
    isFlashDeal: true,
    flashDealData: {
      sold: 123,
      stock: 27,
      discount: 60
    },
    description: "Adjustable LED desk lamp with multiple brightness levels and color temperature settings.",
    specs: ["LED Technology", "Adjustable Brightness", "Color Temperature Control", "USB Charging Port"],
    features: ["Eye Protection", "Energy Efficient", "Touch Controls", "Memory Function"],
    colors: ["White", "Black", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
    ]
  },

  // Featured Products
  {
    id: 2001,
    name: "Premium Wireless Headphones Pro",
    price: 14999.99,
    originalPrice: 19999.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    rating: 4.8,
    reviews: 1284,
    category: "Audio",
    brand: "Sony",
    isNew: true,
    inStock: true,
    isFeatured: true,
    description: "Premium wireless headphones with industry-leading noise cancellation and exceptional sound quality for audiophiles.",
    specs: ["Active Noise Cancellation", "30-Hour Battery", "Hi-Res Audio", "Touch Controls", "Quick Charge"],
    features: ["Premium Materials", "Comfortable Fit", "Voice Assistant", "Multipoint Connection"],
    colors: ["Black", "Silver", "Gold"],
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    ]
  },
  {
    id: 2002,
    name: "Professional Laptop Workstation",
    price: 64999.99,
    originalPrice: 74999.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    rating: 4.9,
    reviews: 856,
    category: "Computers",
    brand: "Dell",
    isNew: false,
    inStock: true,
    isFeatured: true,
    description: "High-performance professional laptop designed for demanding workloads and creative professionals.",
    specs: ["Intel i9 Processor", "32GB RAM", "1TB NVMe SSD", "RTX 4060", "15.6\" 4K Display"],
    features: ["Thunderbolt 4", "Backlit Keyboard", "Fingerprint Reader", "Long Battery Life"],
    colors: ["Space Gray", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400"
    ]
  },
  {
    id: 2003,
    name: "Smart Watch Pro Max",
    price: 22499.99,
    originalPrice: 27499.99,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
    rating: 4.7,
    reviews: 623,
    category: "Wearables",
    brand: "Apple",
    isNew: true,
    inStock: true,
    isFeatured: true,
    description: "Advanced smartwatch with comprehensive health monitoring and seamless connectivity features.",
    specs: ["Always-On Display", "ECG Monitoring", "Blood Oxygen", "GPS + Cellular", "Water Resistant"],
    features: ["Health Insights", "Fitness Tracking", "Siri Integration", "App Ecosystem"],
    colors: ["Midnight", "Starlight", "Product Red", "Alpine Loop"],
    sizes: ["41mm", "45mm"],
    images: [
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400"
    ]
  },
  {
    id: 2004,
    name: "Professional DSLR Camera Kit",
    price: 44999.99,
    originalPrice: 54999.99,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    rating: 4.9,
    reviews: 445,
    category: "Photography",
    brand: "Canon",
    isNew: false,
    inStock: true,
    isFeatured: true,
    description: "Professional DSLR camera with complete lens kit for photography enthusiasts and professionals.",
    specs: ["24.2MP Sensor", "4K Video", "Dual Pixel AF", "Weather Sealed", "18-55mm + 55-250mm Lenses"],
    features: ["Image Stabilization", "WiFi Connectivity", "Articulating Screen", "Professional Grade"],
    images: [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400"
    ]
  },
  {
    id: 2005,
    name: "Gaming Smartphone Elite",
    price: 34999.99,
    originalPrice: 39999.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    rating: 4.6,
    reviews: 932,
    category: "Electronics",
    brand: "ASUS",
    isNew: true,
    inStock: true,
    isFeatured: true,
    description: "Ultimate gaming smartphone with flagship performance and gaming-focused features.",
    specs: ["Snapdragon 8 Gen 2", "16GB RAM", "512GB Storage", "6.78\" AMOLED 165Hz", "6000mAh Battery"],
    features: ["Gaming Triggers", "RGB Lighting", "Advanced Cooling", "Gaming Mode"],
    colors: ["Phantom Black", "Storm White"],
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400"
    ]
  },
  {
    id: 2006,
    name: "Designer Leather Jacket Premium",
    price: 9999.99,
    originalPrice: 14999.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    rating: 4.5,
    reviews: 378,
    category: "Fashion",
    brand: "Hugo Boss",
    isNew: false,
    inStock: true,
    isFeatured: true,
    description: "Luxury designer leather jacket crafted from premium materials with timeless style.",
    specs: ["Genuine Leather", "Italian Craftsmanship", "YKK Zippers", "Silk Lining"],
    features: ["Handcrafted", "Lifetime Warranty", "Premium Hardware", "Tailored Fit"],
    colors: ["Black", "Brown", "Cognac"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400"
    ]
  },
  {
    id: 2007,
    name: "Professional Tools Set Deluxe",
    price: 7499.99,
    originalPrice: 9999.99,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
    rating: 4.7,
    reviews: 267,
    category: "Tools",
    brand: "DeWalt",
    isNew: false,
    inStock: true,
    isFeatured: true,
    description: "Comprehensive professional tools set with premium quality tools for serious craftsmen.",
    specs: ["200+ Pieces", "Chrome Vanadium Steel", "Lifetime Warranty", "Organized Case"],
    features: ["Professional Grade", "Precision Tools", "Durable Construction", "Complete Set"],
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
    ]
  },
  {
    id: 2008,
    name: "Premium Baby Care System",
    price: 4499.99,
    originalPrice: 5999.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
    rating: 4.8,
    reviews: 534,
    category: "Baby & Kids",
    brand: "Philips Avent",
    isNew: true,
    inStock: true,
    isFeatured: true,
    description: "Complete baby care system with everything new parents need for their little one's comfort and safety.",
    specs: ["Complete Care Kit", "BPA-Free Materials", "Easy Sterilization", "Travel Friendly"],
    features: ["Safety Certified", "Easy to Clean", "Pediatrician Recommended", "Premium Quality"],
    ageRange: "0-12 months",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
      "https://images.unsplash.com/photo-1558877385-1c2d7b8e7b35?w=400"
    ]
  },

  // Sale Products
  {
    id: 1001,
    name: "Premium Wireless Headphones",
    price: 8999.99,
    originalPrice: 14999.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    rating: 4.8,
    reviews: 456,
    category: "Audio",
    brand: "Sony",
    isNew: false,
    inStock: true,
    isOnSale: true,
    description: "Premium wireless headphones with active noise cancellation and superior sound quality. Perfect for music lovers and professionals.",
    specs: ["Active Noise Cancellation", "30-hour Battery", "Quick Charge", "Hi-Res Audio"],
    features: ["Touch Controls", "Voice Assistant", "Foldable Design", "Carrying Case"],
    colors: ["Black", "Silver", "Blue"],
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    ]
  },
  {
    id: 1002,
    name: "Smart Fitness Watch",
    price: 12999.99,
    originalPrice: 18999.99,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
    rating: 4.7,
    reviews: 789,
    category: "Wearables",
    brand: "Garmin",
    isNew: true,
    inStock: true,
    isOnSale: true,
    description: "Advanced fitness watch with GPS tracking, heart rate monitoring, and comprehensive health insights for active lifestyles.",
    specs: ["GPS Tracking", "Heart Rate Monitor", "7-Day Battery", "Water Resistant"],
    features: ["Sleep Tracking", "Workout Modes", "Smart Notifications", "Health Insights"],
    colors: ["Black", "White", "Rose Gold"],
    images: [
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400"
    ]
  },
  {
    id: 1003,
    name: "Professional Camera Lens 50mm",
    price: 34999.99,
    originalPrice: 49999.99,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
    rating: 4.9,
    reviews: 234,
    category: "Photography",
    brand: "Canon",
    isNew: true,
    inStock: true,
    isOnSale: true,
    description: "Professional 50mm lens with exceptional sharpness and beautiful bokeh for portrait and street photography.",
    specs: ["50mm Focal Length", "f/1.8 Maximum Aperture", "USM Autofocus", "Full Frame"],
    features: ["Image Stabilization", "Weather Sealed", "Silent Focusing", "Professional Grade"],
    images: [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400"
    ]
  },
  {
    id: 1004,
    name: "Gaming Mechanical Keyboard",
    price: 5999.99,
    originalPrice: 8999.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
    rating: 4.6,
    reviews: 567,
    category: "Computers",
    brand: "Razer",
    isNew: false,
    inStock: true,
    isOnSale: true,
    description: "High-performance mechanical gaming keyboard with RGB backlighting and tactile switches for competitive gaming.",
    specs: ["Mechanical Switches", "RGB Backlighting", "Anti-Ghosting", "USB-C"],
    features: ["Programmable Keys", "Gaming Mode", "Media Controls", "Wrist Rest"],
    colors: ["Black", "White"],
    images: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
    ]
  },
  {
    id: 1005,
    name: "Luxury Leather Handbag",
    price: 15999.99,
    originalPrice: 24999.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    rating: 4.8,
    reviews: 345,
    category: "Accessories",
    brand: "Michael Kors",
    isNew: true,
    inStock: true,
    isOnSale: true,
    description: "Elegant luxury leather handbag with spacious interior and timeless design perfect for any occasion.",
    specs: ["Genuine Leather", "Multiple Compartments", "Adjustable Strap", "Gold Hardware"],
    features: ["Handcrafted", "Dust Bag Included", "Premium Lining", "Lifetime Warranty"],
    colors: ["Black", "Brown", "Tan", "Navy"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400"
    ]
  }
];

// Helper functions
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = [...new Set(products.map(product => product.category))];
  return ["All", ...categories.sort()];
};

export const getAllBrands = (): string[] => {
  const brands = [...new Set(products.map(product => product.brand))];
  return ["All", ...brands.sort()];
};

export const getPriceRanges = () => [
  { label: "Under ₱5,000", min: 0, max: 5000 },
  { label: "₱5,000 - ₱15,000", min: 5000, max: 15000 },
  { label: "₱15,000 - ₱50,000", min: 15000, max: 50000 },
  { label: "Over ₱50,000", min: 50000, max: Infinity }
];

export const getFlashDeals = (): Product[] => {
  return products.filter(product => product.isFlashDeal === true);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured === true);
};

export const getSaleProducts = (): Product[] => {
  return products.filter(product => product.isOnSale === true);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2
  }).format(price);
};
