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
    name: "Premium White Cotton T-Shirt",
    price: 1499.99,
    originalPrice: 1999.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    rating: 4.7,
    reviews: 89,
    category: "Fashion",
    brand: "StyleCo",
    isNew: true,
    inStock: true,
    description: "Premium quality white cotton t-shirt with superior comfort and style. Made from 100% organic cotton for ultimate softness and breathability. Perfect for casual wear and everyday activities.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Off-White", "Cream"],
    specs: ["100% Organic Cotton", "Pre-shrunk", "Machine Washable", "Tagless Design", "Reinforced Seams"],
    features: ["Breathable Fabric", "Fade Resistant", "Eco-Friendly", "Comfortable Fit"],
    // images: [
    //   "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    //   "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400",
    //   "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400",
    //   "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400",
    //   "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400"
    // ]
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
    description: "Classic fit blue denim jeans made from premium 100% cotton denim fabric. Timeless style with authentic vintage wash that never goes out of fashion. Features traditional 5-pocket design.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Classic Blue", "Dark Blue", "Light Blue", "Indigo"],
    specs: ["100% Cotton Denim", "Classic Fit", "5-Pocket Design", "Reinforced Stitching", "Vintage Wash"],
    features: ["Durable Construction", "Fade Resistant", "Comfortable Waistband", "Authentic Styling"],
    // images: [
    //   "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    //   "https://images.unsplash.com/photo-1506629905607-d9c297d3f5f5?w=400",
    //   "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400",
    //   "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
    //   "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400"
    // ]
  },
  {
    id: 3,
    name: "Elegant Red Summer Dress",
    price: 4499.99,
    originalPrice: 5999.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    rating: 4.9,
    reviews: 203,
    category: "Fashion",
    brand: "ElegantWear",
    isNew: true,
    inStock: true,
    description: "Beautiful flowing red summer dress perfect for special occasions and casual outings. Made from lightweight chiffon fabric with elegant draping and comfortable fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Red", "Burgundy", "Coral", "Rose"],
    specs: ["Chiffon Fabric", "Flowing Design", "Lined Interior", "Easy Care", "Elegant Cut"],
    features: ["Wrinkle Resistant", "UV Protection", "Quick Dry", "Comfortable Fit", "Breathable"],
    // images: [
    //   "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    //   "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
    //   "https://images.unsplash.com/photo-1566479179817-c0b8b8b5b8b8?w=400",
    //   "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400",
    //   "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400"
    // ]
  },
  {
    id: 17,
    name: "Black Leather Jacket",
    price: 12999.99,
    originalPrice: 15999.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    rating: 4.8,
    reviews: 145,
    category: "Fashion",
    brand: "LeatherCraft",
    isNew: true,
    inStock: true,
    description: "Premium genuine black leather jacket with modern biker design and superior craftsmanship. Made from top-grain leather with quilted lining for comfort and style.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Dark Brown", "Cognac"],
    specs: ["Genuine Top-Grain Leather", "YKK Zippers", "Quilted Lining", "Water Resistant", "Hand-Stitched"],
    features: ["Handcrafted", "Lifetime Warranty", "Premium Hardware", "Tailored Fit", "Breathable Lining"],
    // images: [
    //   "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    //   "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400",
    //   "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
    //   "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    //   "https://images.unsplash.com/photo-1506629905607-d9c297d3f5f5?w=400"
    // ]
  },
  {
    id: 18,
    name: "Plain White T-shirt",
    price: 2299.99,
    originalPrice: 2999.99,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400",
    rating: 4.6,
    reviews: 298,
    category: "Fashion",
    brand: "PoloStyle",
    isNew: false,
    inStock: true,
    description: "Classic navy blue polo shirt made from premium cotton pique blend for everyday comfort and style. Features traditional collar and three-button placket design.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy Blue", "White", "Red", "Forest Green", "Black"],
    specs: ["Cotton Pique Blend", "Moisture Wicking", "Fade Resistant", "Easy Care", "Reinforced Collar"],
    features: ["Breathable Fabric", "Collar Stay", "Side Vents", "Machine Washable", "Preshrunk"],
    // images: [
    //   "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400",
    //   "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400",
    //   "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400",
    //   "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    //   "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400"
    // ]
  },
  {
    id: 19,
    name: "Athletic Running Shoes",
    price: 6999.99,
    originalPrice: 8999.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    rating: 4.7,
    reviews: 567,
    category: "Fashion",
    brand: "SportMax",
    isNew: true,
    inStock: true,
    description: "High-performance black running shoes with advanced cushioning technology and breathable mesh design. Perfect for running, training, and everyday athletic activities.",
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    colors: ["Black", "White", "Gray", "Navy"],
    specs: ["Breathable Mesh Upper", "EVA Midsole", "Rubber Outsole", "Reflective Details", "Cushioned Insole"],
    features: ["Shock Absorption", "Lightweight Design", "Breathable", "Durable Construction", "Non-Slip Sole"],
    // images: [
    //   "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    //   "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    //   "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
    //   "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400",
    //   "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400"
    // ]
  },
  {
    id: 20,
    name: "Charcoal Business Suit",
    price: 18999.99,
    originalPrice: 24999.99,
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400",
    rating: 4.9,
    reviews: 89,
    category: "Fashion",
    brand: "Executive",
    isNew: true,
    inStock: true,
    description: "Premium charcoal business suit tailored for the modern professional with impeccable fit and style. Made from high-quality wool blend with half-canvas construction.",
    sizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["Charcoal", "Navy", "Black", "Dark Gray"],
    specs: ["Wool Blend Fabric", "Slim Fit", "Half Canvas Construction", "Horn Buttons", "Fully Lined"],
    features: ["Tailored Fit", "Wrinkle Resistant", "Dry Clean Only", "Professional Grade", "Italian Styling"],
    // images: [
    //   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    //   "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
    //   "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400",
    //   "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400",
    //   "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400"
    // ]
  },
  {
    id: 21,
    name: "Long Sleeve Polo Shirt",
    price: 2799.99,
    originalPrice: 3499.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
    rating: 4.5,
    reviews: 124,
    category: "Fashion",
    brand: "CasualWear",
    isNew: false,
    inStock: true,
    description: "Comfortable striped long sleeve shirt perfect for casual and semi-formal occasions. Made from soft cotton blend with classic horizontal stripes pattern.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy/White", "Black/White", "Blue/White", "Gray/White"],
    specs: ["Cotton Blend", "Long Sleeves", "Button-Down Collar", "Chest Pocket", "Regular Fit"],
    features: ["Breathable Fabric", "Easy Care", "Wrinkle Resistant", "Comfortable Fit", "Classic Design"],
    // images: [
    //   "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
    //   "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
    //   "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400",
    //   "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
    //   "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
    // ]
  },
  {
    id: 22,
    name: "Fitted Blue Jeans",
    price: 4299.99,
    originalPrice: 5299.99,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400",
    rating: 4.8,
    reviews: 267,
    category: "Fashion",
    brand: "DenimPro",
    isNew: true,
    inStock: true,
    description: "Trendy high-waisted black jeans with skinny fit design. Made from premium stretch denim for comfort and style. Perfect for creating versatile outfits.",
    sizes: ["24", "26", "28", "30", "32", "34"],
    colors: ["Black", "Dark Gray", "Charcoal"],
    specs: ["Stretch Denim", "High-Waisted", "Skinny Fit", "5-Pocket Design", "Zip Fly"],
    features: ["Stretch Comfort", "Shape Retention", "Fade Resistant", "Flattering Fit", "Versatile Style"],
    // images: [
    //   "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
    //   "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
    //   "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400",
    //   "https://images.unsplash.com/photo-1506629905607-d9c297d3f5f5?w=400",
    //   "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400"
    // ]
  },
  {
    id: 23,
    name: "Side-Slit Wrap Dress",
    price: 3199.99,
    originalPrice: 3999.99,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400",
    rating: 4.6,
    reviews: 189,
    category: "Fashion",
    brand: "FloralFashion",
    isNew: false,
    inStock: true,
    description: "Elegant floral print blouse with delicate pattern and flowing silhouette. Perfect for office wear or casual outings. Features button-front design and relaxed fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pink Floral", "Blue Floral", "White Floral", "Black Floral"],
    specs: ["Polyester Blend", "Button-Front", "3/4 Sleeves", "Relaxed Fit", "Floral Print"],
    features: ["Lightweight Fabric", "Easy Care", "Wrinkle Resistant", "Feminine Design", "Versatile Styling"],
    // images: [
    //   "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
    //   "https://images.unsplash.com/photo-1566479179817-c0b8b8b5b8b8?w=400",
    //   "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400",
    //   "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400",
    //   "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400"
    // ]
  },
  {
    id: 24,
    name: "Casual Khaki Chinos",
    price: 3599.99,
    originalPrice: 4299.99,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",
    rating: 4.7,
    reviews: 156,
    category: "Fashion",
    brand: "CasualWear",
    isNew: true,
    inStock: true,
    description: "Classic khaki chino pants with slim fit design. Made from premium cotton twill fabric for comfort and durability. Perfect for smart-casual occasions.",
    sizes: ["30", "32", "34", "36", "38", "40"],
    colors: ["Khaki", "Navy", "Olive", "Stone"],
    specs: ["Cotton Twill", "Slim Fit", "Flat Front", "Side Pockets", "Belt Loops"],
    features: ["Wrinkle Resistant", "Easy Care", "Comfortable Fit", "Versatile Style", "Durable Construction"],
    // images: [
    //   "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",
    //   "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
    //   "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400",
    //   "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400",
    //   "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400"
    // ]
  },
  {
    id: 25,
    name: "Classic Button-Up Shirt",
    price: 4999.99,
    originalPrice: 6299.99,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
    rating: 4.8,
    reviews: 234,
    category: "Fashion",
    brand: "WarmWear",
    isNew: true,
    inStock: true,
    description: "Soft and cozy knit sweater perfect for cooler weather. Made from premium wool blend with ribbed cuffs and hem. Features crew neck design and relaxed fit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Cream", "Gray", "Navy", "Burgundy", "Forest Green"],
    specs: ["Wool Blend", "Crew Neck", "Ribbed Cuffs", "Relaxed Fit", "Machine Washable"],
    features: ["Soft Texture", "Warm & Cozy", "Breathable", "Easy Care", "Comfortable Fit"],
    // images: [
    //   "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    //   "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400",
    //   "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
    //   "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
    //   "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400"
    // ]
  },
  {
    id: 26,
    name: "Low-Top Leather Sneakers",
    price: 4599.99,
    originalPrice: 5799.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    rating: 4.6,
    reviews: 345,
    category: "Fashion",
    brand: "UrbanStep",
    isNew: false,
    inStock: true,
    description: "Classic white canvas sneakers with timeless design. Made from durable canvas material with rubber sole. Perfect for casual everyday wear and street style.",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["White", "Off-White", "Cream", "Light Gray"],
    specs: ["Canvas Upper", "Rubber Sole", "Lace-Up Design", "Cushioned Insole", "Breathable Lining"],
    features: ["Comfortable Fit", "Durable Construction", "Easy to Clean", "Versatile Style", "All-Day Comfort"],
    // images: [
    //   "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    //   "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
    //   "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400",
    //   "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400",
    //   "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
    // ]
  },
  {
    id: 27,
    name: "Off-Shoulder White Dress",
    price: 2899.99,
    originalPrice: 3599.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
    rating: 4.7,
    reviews: 98,
    category: "Fashion",
    brand: "LuxeAccessories",
    isNew: true,
    inStock: true,
    description: "Luxurious silk scarf with elegant patterns and premium quality. Perfect accessory for adding sophistication to any outfit. Made from 100% pure silk.",
    sizes: ["One Size"],
    colors: ["Floral Blue", "Geometric Black", "Abstract Red", "Classic Navy"],
    specs: ["100% Pure Silk", "Hand-Rolled Edges", "Digital Print", "Square Shape", "Lightweight"],
    features: ["Luxurious Feel", "Versatile Styling", "Fade Resistant", "Easy Care", "Premium Quality"],
    // images: [
    //   "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
    //   "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
    //   "https://images.unsplash.com/photo-1566479179817-c0b8b8b5b8b8?w=400",
    //   "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400",
    //   "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400"
    // ]
  },
  {
    id: 28,
    name: "Black Leather Jacket",
    price: 5999.99,
    originalPrice: 7499.99,
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400",
    rating: 4.8,
    reviews: 178,
    category: "Fashion",
    brand: "DenimPro",
    isNew: true,
    inStock: true,
    description: "Classic blue denim jacket with vintage wash and modern fit. Made from premium cotton denim with button-front closure and chest pockets. Perfect layering piece.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Classic Blue", "Dark Blue", "Light Blue", "Black Denim"],
    specs: ["100% Cotton Denim", "Button-Front", "Chest Pockets", "Regular Fit", "Vintage Wash"],
    features: ["Durable Construction", "Fade Resistant", "Comfortable Fit", "Versatile Styling", "Classic Design"],
    // images: [
    //   "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400",
    //   "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    //   "https://images.unsplash.com/photo-1506629905607-d9c297d3f5f5?w=400",
    //   "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400",
    //   "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400"
    // ]
  },
  {
    id: 29,
    name: "Ribbed Knit Midi Dress",
    price: 3799.99,
    originalPrice: 4699.99,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400",
    rating: 4.5,
    reviews: 142,
    category: "Fashion",
    brand: "ElegantWear",
    isNew: false,
    inStock: true,
    description: "Elegant pleated midi skirt with flowing silhouette and comfortable fit. Made from lightweight polyester blend with elastic waistband. Perfect for office or casual wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy", "Forest Green", "Camel"],
    specs: ["Polyester Blend", "Pleated Design", "Midi Length", "Elastic Waistband", "Lined Interior"],
    features: ["Comfortable Fit", "Wrinkle Resistant", "Easy Care", "Flowing Silhouette", "Versatile Style"],
    // images: [
    //   "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400",
    //   "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400",
    //   "https://images.unsplash.com/photo-1566479179817-c0b8b8b5b8b8?w=400",
    //   "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
    //   "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400"
    // ]
  },
  {
    id: 30,
    name: "Retro Basketball Sneakers",
    price: 14999.99,
    originalPrice: 18999.99,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
    rating: 4.9,
    reviews: 87,
    category: "Fashion",
    brand: "WinterWear",
    isNew: true,
    inStock: true,
    description: "Luxurious wool blend coat with classic tailoring and sophisticated design. Features double-breasted closure and elegant silhouette. Perfect for formal occasions and winter wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Black", "Navy", "Gray"],
    specs: ["Wool Blend", "Double-Breasted", "Tailored Fit", "Lined Interior", "Button Closure"],
    features: ["Warm & Cozy", "Professional Look", "Durable Construction", "Elegant Design", "Weather Resistant"],
    // images: [
    //   "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400",
    //   "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400",
    //   "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
    //   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    //   "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400"
    // ]
  },
  {
    id: 31,
    name: "Gray Hoodie",
    price: 3999.99,
    originalPrice: 4999.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    rating: 4.6,
    reviews: 267,
    category: "Fashion",
    brand: "StreetStyle",
    isNew: true,
    inStock: true,
    description: "Trendy graphic print hoodie with comfortable fit and stylish design. Made from soft cotton blend with kangaroo pocket and drawstring hood. Perfect for casual wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Navy", "White"],
    specs: ["Cotton Blend", "Graphic Print", "Kangaroo Pocket", "Drawstring Hood", "Ribbed Cuffs"],
    features: ["Soft & Comfortable", "Trendy Design", "Easy Care", "Relaxed Fit", "Durable Print"],
    // images: [
    //   "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    //   "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    //   "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400",
    //   "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
    //   "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400"
    // ]
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
    // images: [
    //   "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    //   "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
    // ]
  },
  {
    id: 5,
    name: "Apple iPhone",
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
    // images: [
    //   "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    //   "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400"
    // ]
  },

  // Photography Products
  {
    id: 6,
    name: "Canon EOS R5 Mirrorless Camera",
    price: 194999.99,
    originalPrice: 214999.99,
    image: "https://cdn.media.amplience.net/i/canon/eos-r5_front_rf24-105mmf4lisusm_square_32c26ad194234d42b3cd9e582a21c99b",
    rating: 4.9,
    reviews: 234,
    category: "Photography",
    brand: "Canon",
    isNew: true,
    inStock: true,
    description: "Professional mirrorless camera with 45MP sensor, 8K video recording, and advanced autofocus system.",
    specs: ["45MP Full Frame", "8K Video", "In-Body Stabilization", "Dual Card Slots"],
    features: ["Weather Sealed", "4K 120p", "Animal Detection AF", "WiFi/Bluetooth"],
    // images: [
    //   "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    //   "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400"
    // ]
  },

  // Computers Products
  {
    id: 7,
    name: "MacBook Pro 16\" M3 Max",
    price: 199999.99,
    originalPrice: 214999.99,
    image: "https://powermaccenter.com/cdn/shop/files/MacBook_Pro_16_in_M3_Pro_Max_Space_Black_PDP_Image_Position-1__en-US.jpg?v=1699060555&width=823",
    rating: 4.9,
    reviews: 567,
    category: "Computers",
    brand: "Apple",
    isNew: true,
    inStock: true,
    description: "The most powerful MacBook Pro ever with M3 Max chip, stunning Liquid Retina XDR display, and all-day battery life.",
    specs: ["M3 Max Chip", "32GB RAM", "1TB SSD", "16.2\" Liquid Retina XDR"],
    features: ["Touch ID", "Thunderbolt 4", "MagSafe 3", "macOS Sonoma"],
    // images: [
    //   "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    //   "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
    // ]
  },

  // Baby & Kids Products
  {
    id: 8,
    name: "Premium Baby Stroller",
    price: 14999.99,
    originalPrice: 19999.99,
    image: "https://www.aprica.com.ph/cdn/shop/products/AP2031728_Black.png?v=1601518567",
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
    // images: [
    //   "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
    //   "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400"
    // ]
  },

  // Tools Products
  {
    id: 9,
    name: "Cordless Drill Set",
    price: 7499.99,
    originalPrice: 9999.99,
    image: "https://www.gigatools.ph/cdn/shop/products/DeWaltDCD7771D2ACLEAR.jpg?v=1648027020",
    rating: 4.8,
    reviews: 456,
    category: "Tools",
    brand: "DeWalt",
    isNew: true,
    inStock: true,
    description: "Professional cordless drill set with powerful motor and long-lasting battery for all your drilling needs.",
    specs: ["18V Battery", "2-Speed Gearbox", "LED Light", "Carrying Case"],
    features: ["Brushless Motor", "Quick Chuck", "Belt Clip", "2-Year Warranty"],
    // images: [
    //   "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
    //   "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400"
    // ]
  },

  // Audio Products
  {
    id: 10,
    name: "Sony WH-1000XM5 Headphones",
    price: 17499.99,
    originalPrice: 19999.99,
    image: "https://onward.ph/cdn/shop/files/SonyWH-1000XM5_Black_Front_2048x.png?v=1750985267",
    rating: 4.9,
    reviews: 1247,
    category: "Audio",
    brand: "Sony",
    isNew: true,
    inStock: true,
    description: "Industry-leading noise canceling headphones with exceptional sound quality and all-day comfort.",
    specs: ["30-hour Battery", "Active Noise Canceling", "Hi-Res Audio", "Quick Charge"],
    features: ["Touch Controls", "Voice Assistant", "Multipoint Connection", "Carry Case"],
    // images: [
    //   "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    //   "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    // ]
  },

  // Wearables Products
  {
    id: 11,
    name: "Apple Watch Series 9",
    price: 19999.99,
    originalPrice: 21499.99,
    image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/apple-watch-series-9.png",
    rating: 4.8,
    reviews: 1247,
    category: "Wearables",
    brand: "Apple",
    isNew: true,
    inStock: true,
    description: "The most advanced Apple Watch with powerful health features and seamless connectivity.",
    specs: ["S9 Chip", "Always-On Display", "Health Sensors", "Water Resistant"],
    features: ["ECG App", "Blood Oxygen", "Fall Detection", "Crash Detection"],
    // images: [
    //   "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
    //   "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    // ]
  },

  // Sports Products
  {
    id: 12,
    name: "Adjustable Dumbbell Set",
    price: 14999.99,
    originalPrice: 19999.99,
    image: "https://fitrxrecovery.com/wp-content/uploads/2023/02/8361_FtRx_SB-D-01.jpg",
    rating: 4.8,
    reviews: 456,
    category: "Sports",
    brand: "PowerBlock",
    isNew: true,
    inStock: true,
    description: "Space-saving adjustable dumbbell set perfect for home workouts and strength training.",
    specs: ["5-50 lbs per hand", "Quick Weight Change", "Compact Design", "Expandable"],
    features: ["Steel Construction", "Rubber Grips", "Space Efficient", "Professional Grade"],
    // images: [
    //   "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    //   "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400"
    // ]
  },

  // Accessories Products
  {
    id: 13,
    name: "Leather Crossbody Bag",
    price: 7499.99,
    originalPrice: 9999.99,
    image: "https://buffalojackson.com/cdn/shop/products/Madison_Leather_Crossbody_Foldover_Clutch_Saddle_Tan_3_2000x.jpg?v=1641568116",
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
    // images: [
    //   "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    //   "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400"
    // ]
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
    // images: [
    //   "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
    //   "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
    // ]
  },
  {
    id: 65,
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
    // images: [
    //   "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    //   "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400"
    // ]
  },
  {
    id: 66,
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
    // images: [
    //   "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    //   "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=400"
    // ]
  },
  {
    id: 67,
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
    // images: [
    //   "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    //   "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400"
    // ]
  },
  {
    id: 68,
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
    // images: [
    //   "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    //   "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400"
    // ]
  },

  // Additional Photography Products
  {
    id: 15,
    name: "Professional Tripod Carbon Fiber",
    price: 24999.99,
    originalPrice: 29999.99,
    image: "https://ph-live.slatic.net/v2/resize/products/S-22728-df6d382600c12f994a93e3909cd46f0c.jpg",
    rating: 4.8,
    reviews: 167,
    category: "Photography",
    brand: "Manfrotto",
    isNew: true,
    inStock: true,
    description: "Professional carbon fiber tripod with advanced stability and precision for professional photographers.",
    specs: ["Carbon Fiber Construction", "Max Load 8kg", "Height 180cm", "Compact Folding"],
    features: ["Weather Resistant", "Quick Release", "Adjustable Legs", "Carrying Case"],
    // images: [
    //   "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    //   "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
    //   "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    //   "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
    // ]
  },
  {
    id: 5000,
    name: "Camera Lens 85mm f/1.4",
    price: 54999.99,
    originalPrice: 64999.99,
    image: "https://www.sony.com.ph/image/97853a17952f240620b83732595b0e87?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
    rating: 4.9,
    reviews: 123,
    category: "Photography",
    brand: "Canon",
    isNew: true,
    inStock: true,
    description: "Professional portrait lens with exceptional bokeh and sharpness for stunning photography.",
    specs: ["85mm Focal Length", "f/1.4 Maximum Aperture", "USM Autofocus", "Weather Sealed"],
    features: ["Image Stabilization", "Fluorine Coating", "Full Frame Compatible", "Professional Grade"],
    // images: [
    //   "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
    //   "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    //   "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
    //   "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
    // ]
  },
  {
    id: 5001,
    name: "LED Ring Light 18 inch",
    price: 8999.99,
    originalPrice: 11999.99,
    image: "https://gotygot.com/cdn/shop/files/51DiCQ66PTL._SX679.jpg?v=1693322133",
    rating: 4.7,
    reviews: 345,
    category: "Photography",
    brand: "Neewer",
    isNew: false,
    inStock: true,
    description: "Professional LED ring light with adjustable brightness and color temperature for perfect lighting.",
    specs: ["18\" Ring Light", "Dimmable LED", "3200K-5600K", "Remote Control"],
    features: ["Phone Holder", "Adjustable Stand", "Memory Function", "Flicker-Free"],
    // images: [
    //   "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    //   "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
    // ]
  },
  {
    id: 5002,
    name: "Camera Bag Professional",
    price: 4999.99,
    originalPrice: 6999.99,
    image: "https://images-cdn.ubuy.ae/6410938f44295a157971f308-tarion-camera-bag-professional-camera.jpg",
    rating: 4.6,
    reviews: 234,
    category: "Photography",
    brand: "Peak Design",
    isNew: true,
    inStock: true,
    description: "Professional camera bag with customizable dividers and weather protection for all your gear.",
    specs: ["Weather Resistant", "Customizable Dividers", "Laptop Compartment", "Quick Access"],
    features: ["Lifetime Warranty", "Ergonomic Design", "Multiple Pockets", "TSA Friendly"],
    // images: [
    //   "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    //   "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400"
    // ]
  },
  {
    id: 2003,
    name: "Wireless Flash Trigger",
    price: 3499.99,
    originalPrice: 4499.99,
    image: "https://www.henryscameraphoto.com/image/cache/catalog/Godox/GDXTTLX2TS/GDXTTLX2TS-800x800.jpeg",
    rating: 4.5,
    reviews: 156,
    category: "Photography",
    brand: "Godox",
    isNew: true,
    inStock: true,
    description: "Wireless flash trigger system for professional studio and outdoor photography setups.",
    specs: ["2.4GHz Wireless", "100m Range", "16 Channels", "TTL Support"],
    features: ["High Speed Sync", "Multi-Flash Control", "LCD Display", "Long Battery Life"],
    // images: [
    //   "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
    //   "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    //   "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    //   "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400"
    // ]
  },

  // Additional Audio Products
  {
    id: 16,
    name: "Studio Monitor Speakers",
    price: 34999.99,
    originalPrice: 39999.99,
    image: "https://i5.walmartimages.com/seo/Edifier-MR4-Powered-Studio-Monitor-Speakers-4-Active-Near-field-Monitor-Speaker-Black-Pair_7783a227-9b49-4bb5-bd7f-89981ab6da45.2d3142726a1c503e447c053b75079fcb.jpeg",
    rating: 4.9,
    reviews: 89,
    category: "Audio",
    brand: "KRK",
    isNew: true,
    inStock: true,
    description: "Professional studio monitor speakers with accurate sound reproduction for music production and mixing.",
    specs: ["5-inch Woofer", "1-inch Tweeter", "50W Power", "Frequency Response 45Hz-35kHz"],
    features: ["Bi-Amplified", "Front-Firing Port", "Multiple Inputs", "Room EQ"],
    // images: [
    //   "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    //   "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    // ]
  },

  // Additional Computers Products
  {
    id: 6001,
    name: "Gaming Desktop PC",
    price: 75999.99,
    originalPrice: 89999.99,
    image: "https://i5.walmartimages.com/seo/iBUYPOWER-Gaming-Desktop-PC-SlateMR289A-AMD-Ryzen-7-5800X-GeForce-RTX-3070-8GB-16GB-RAM-1TB-NVMe-SSD-RGB-Windows-11-Home-Advanced_60731a45-86f2-415e-b156-4ef761b0659b.1274440b178dfb0e567c1e92d30dda90.png",
    rating: 4.8,
    reviews: 156,
    category: "Computers",
    brand: "Custom Build",
    isNew: true,
    inStock: true,
    description: "High-performance gaming desktop with latest components for ultimate gaming and productivity.",
    specs: ["Intel i7-13700K", "RTX 4070", "32GB DDR5", "1TB NVMe SSD", "850W PSU"],
    features: ["RGB Lighting", "Liquid Cooling", "Tempered Glass", "Cable Management"],
    // images: [
    //   "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400",
    //   "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400"
    // ]
  },
  {
    id: 6002,
    name: "Ultrabook 13 inch",
    price: 54999.99,
    originalPrice: 64999.99,
    image: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2024/09/xs9350t-cnb-05052lf116-sl-oled.png",
    rating: 4.7,
    reviews: 234,
    category: "Computers",
    brand: "Dell",
    isNew: true,
    inStock: true,
    description: "Ultra-portable laptop with premium build quality and all-day battery life for professionals.",
    specs: ["Intel i5-1340P", "16GB RAM", "512GB SSD", "13.3\" FHD", "Thunderbolt 4"],
    features: ["Fingerprint Reader", "Backlit Keyboard", "WiFi 6E", "Fast Charging"],
    // images: [
    //   "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    //   "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400"
    // ]
  },
  {
    id: 6003,
    name: "Mechanical Keyboard RGB",
    price: 7999.99,
    originalPrice: 9999.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/71N2s8su9aL.jpg",
    rating: 4.6,
    reviews: 567,
    category: "Computers",
    brand: "Corsair",
    isNew: false,
    inStock: true,
    description: "Premium mechanical keyboard with RGB backlighting and customizable switches for gaming and typing.",
    specs: ["Cherry MX Switches", "RGB Backlighting", "USB-C", "Aluminum Frame"],
    features: ["Hot-Swappable", "Programmable Keys", "Media Controls", "Wrist Rest"],
    // images: [
    //   "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
    //   "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
    // ]
  },
  {
    id: 6004,
    name: "4K Monitor 27 inch",
    price: 24999.99,
    originalPrice: 29999.99,
    image: "https://www.lg.com/content/dam/channel/wcms/ph/images/monitors/27us500-w(gallery)/ultrafine-27us500-gallery-01-2010.jpg/_jcr_content/renditions/thum-1600x1062.jpeg",
    rating: 4.8,
    reviews: 345,
    category: "Computers",
    brand: "LG",
    isNew: true,
    inStock: true,
    description: "Professional 4K monitor with accurate colors and multiple connectivity options for creative work.",
    specs: ["27\" 4K IPS", "99% sRGB", "USB-C Hub", "HDR10", "60Hz Refresh"],
    features: ["Color Calibration", "Ergonomic Stand", "Blue Light Filter", "Picture-in-Picture"],
    // images: [
    //   "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    //   "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400"
    // ]
  },
  {
    id: 6005,
    name: "External SSD 2TB",
    price: 12999.99,
    originalPrice: 15999.99,
    image: "https://www.itech.ph/wp-content/uploads/2024/05/SanDisk-Extreme-Portable-1TB-External-USB-C-NVMe-SSD-Black.jpg",
    rating: 4.7,
    reviews: 234,
    category: "Computers",
    brand: "Samsung",
    isNew: true,
    inStock: true,
    description: "High-speed external SSD with massive storage capacity and portable design for professionals.",
    specs: ["2TB Capacity", "USB 3.2 Gen 2", "1050 MB/s Read", "Shock Resistant"],
    features: ["Password Protection", "AES Encryption", "Compact Design", "Cross-Platform"],
    // images: [
    //   "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400",
    //   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
    // ]
  },

  // Additional Baby & Kids Products
  {
    id: 34,
    name: "Baby Stroller Lightweight",
    price: 8999.99,
    originalPrice: 11999.99,
    image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1694028866-joolz-aer-stroller-gray-64f8d43046e85.jpg?crop=1xw:1xh;center,top&resize=980:*",
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
    // images: [
    //   "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400",
    //   "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400"
    // ]
  },
  {
    id: 35,
    name: "Educational Toy Set",
    price: 2999.99,
    originalPrice: 3999.99,
    image: "https://cdn11.bigcommerce.com/s-5kcaxd50lw/images/stencil/1280x1280/products/60834/6730532/97dcf94e8b7cfcff8d65b9c0d843b1666be0c99440f62d9c58be4ec926fd5d49__28658.1590774086.jpg?c=2?imbypass=on",
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
    // images: [
    //   "https://images.unsplash.com/photo-1558877385-1c2d7b8e7b35?w=400",
    //   "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400"
    // ]
  },
  {
    id: 36,
    name: "Baby Car Seat",
    price: 12999.99,
    originalPrice: 15999.99,
    image: "https://chicco.com.ph/cdn/shop/files/87072_72_ChiccoKoryAirPlus_Mainimage.jpg?v=1696908592",
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
    // images: [
    //   "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
    //   "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400"
    // ]
  },
  {
    id: 37,
    name: "Kids Bicycle 16 inch",
    price: 6999.99,
    originalPrice: 8999.99,
    image: "https://contents.mediadecathlon.com/p2025491/k$cb5c8a71800bc89cc73923e320fb7d68/kids-city-bike-900-blue-alloy-16-inch-4-6-years-btwin-8767498.jpg",
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
    // images: [
    //   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    //   "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400"
    // ]
  },
  {
    id: 38,
    name: "Baby Monitor with Camera",
    price: 7999.99,
    originalPrice: 9999.99,
    image: "https://www.tommeetippee.com/media/catalog/product/cache/7f121940ab2d375b7892f1db9e452e3c/d/r/dreamview_product_photography_2_1_2_1_.png",
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
    // images: [
    //   "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
    //   "https://images.unsplash.com/photo-1558877385-1c2d7b8e7b35?w=400"
    // ]
  },

  // Additional Tools Products
  {
    id: 39,
    name: "Cordless Drill Set",
    price: 8999.99,
    originalPrice: 11999.99,
    image: "https://khmtools.com.ph/cdn/shop/files/HKTHP10891.jpg?v=1728114972",
    rating: 4.7,
    reviews: 345,
    category: "Tools",
    brand: "DeWalt",
    isNew: true,
    inStock: true,
    description: "Professional cordless drill set with multiple bits and carrying case for all your drilling needs.",
    specs: ["18V Battery", "13mm Chuck", "2-Speed Gearbox", "LED Light"],
    features: ["Quick Charge", "Belt Clip", "Carrying Case", "Multiple Bits"],
    // images: [
    //   "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
    //   "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
    // ]
  },
  {
    id: 40,
    name: "Tool Set 150 Pieces",
    price: 12999.99,
    originalPrice: 16999.99,
    image: "https://asia.stanleytools.global/ASIA/PRODUCT/IMAGES/HIRES/94-181/94-181_P3.jpg?resize=530x530",
    rating: 4.8,
    reviews: 234,
    category: "Tools",
    brand: "Craftsman",
    isNew: true,
    inStock: true,
    description: "Comprehensive 150-piece tool set with everything you need for home repairs and projects.",
    specs: ["150 Pieces", "Chrome Vanadium Steel", "Ratcheting Handles", "Organized Case"],
    features: ["Lifetime Warranty", "Professional Grade", "Organized Storage", "Complete Set"],
    // images: [
    //   "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
    //   "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400"
    // ]
  },
  {
    id: 41,
    name: "Circular Saw",
    price: 6999.99,
    originalPrice: 8999.99,
    image: "https://www.bosch-pt.com.ph/ph/en/ocsmedia/64925-54/application-image/full/hand-held-circular-saw-gks-190-06016230k0.png",
    rating: 4.6,
    reviews: 167,
    category: "Tools",
    brand: "Makita",
    isNew: false,
    inStock: true,
    description: "Powerful circular saw with precision cutting capabilities for woodworking and construction projects.",
    specs: ["1400W Motor", "185mm Blade", "Depth Adjustment", "Dust Port"],
    features: ["Laser Guide", "Safety Guard", "Ergonomic Handle", "Dust Collection"],
    // images: [
    //   "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
    //   "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
    // ]
  },
  {
    id: 42,
    name: "Digital Multimeter",
    price: 2999.99,
    originalPrice: 3999.99,
    image: "https://tolsen.com.ph/cdn/shop/files/38033.jpg?v=1740798479",
    rating: 4.5,
    reviews: 123,
    category: "Tools",
    brand: "Fluke",
    isNew: true,
    inStock: true,
    description: "Professional digital multimeter for electrical testing and troubleshooting with high accuracy.",
    specs: ["True RMS", "Auto Range", "Data Hold", "Backlit Display"],
    features: ["Safety Rated", "Drop Protection", "Long Battery Life", "Test Leads Included"],
    // images: [
    //   "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
    //   "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400"
    // ]
  },
  {
    id: 43,
    name: "Workbench with Storage",
    price: 15999.99,
    originalPrice: 19999.99,
    image: "https://www.workplace-products.co.uk/pub/media/catalog/product/cache/e52e6f8cd2099922bc719140899699df/t/u/tuff-workbench-laminate-9-drawers.jpg",
    rating: 4.8,
    reviews: 89,
    category: "Tools",
    brand: "Keter",
    isNew: true,
    inStock: true,
    description: "Heavy-duty workbench with integrated storage drawers and pegboard for organized workspace.",
    specs: ["Steel Frame", "Bamboo Top", "Storage Drawers", "Pegboard"],
    features: ["Adjustable Feet", "Tool Holders", "Heavy Duty", "Easy Assembly"],
    // images: [
    //   "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
    //   "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
    // ]
  },

  // Additional Audio Products
  {
    id: 44,
    name: "Wireless Earbuds Pro",
    price: 8999.99,
    originalPrice: 11999.99,
    image: "https://jblstore.com.ph/cdn/shop/files/JBLLivePro2Black.png?v=1752194760",
    rating: 4.7,
    reviews: 567,
    category: "Audio",
    brand: "Apple",
    isNew: true,
    inStock: true,
    description: "Premium wireless earbuds with active noise cancellation and spatial audio technology.",
    specs: ["Active Noise Cancellation", "Spatial Audio", "6 Hour Battery", "Wireless Charging"],
    features: ["Transparency Mode", "Adaptive EQ", "Sweat Resistant", "Quick Charge"],
    // images: [
    //   "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
    //   "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    // ]
  },
  {
    id: 45,
    name: "Gaming Headset RGB",
    price: 5999.99,
    originalPrice: 7999.99,
    image: "https://accenthub.com.ph/wp-content/uploads/2023/09/Micropack-Wired-RGB-Gaming-Headset-7.1-Surround-GH-03-Black-1.jpg",
    rating: 4.6,
    reviews: 345,
    category: "Audio",
    brand: "SteelSeries",
    isNew: false,
    inStock: true,
    description: "Professional gaming headset with surround sound and RGB lighting for immersive gaming experience.",
    specs: ["7.1 Surround Sound", "Noise Cancelling Mic", "RGB Lighting", "50mm Drivers"],
    features: ["Comfortable Padding", "Retractable Mic", "Multi-Platform", "Durable Build"],
    // images: [
    //   "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400",
    //   "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400"
    // ]
  },
  {
    id: 46,
    name: "Vinyl Record Player",
    price: 18999.99,
    originalPrice: 24999.99,
    image: "https://img.lazcdn.com/g/p/8f26b5c2be9fd770c9ee79903b204d98.jpg_720x720q80.jpg",
    rating: 4.8,
    reviews: 123,
    category: "Audio",
    brand: "Audio-Technica",
    isNew: true,
    inStock: true,
    description: "Premium vinyl record player with high-quality cartridge and built-in preamp for audiophiles.",
    specs: ["Belt Drive", "Anti-Resonance Platter", "Magnetic Cartridge", "Built-in Preamp"],
    features: ["USB Output", "Pitch Control", "Dust Cover", "Professional Grade"],
    // images: [
    //   "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    //   "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400"
    // ]
  },
  {
    id: 47,
    name: "Soundbar with Subwoofer",
    price: 24999.99,
    originalPrice: 29999.99,
    image: "https://www.ubuy.com.ph/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFxQnMxcTRBR0wuX0FDX1NMMTUwMF8uanBn.jpg",
    rating: 4.7,
    reviews: 234,
    category: "Audio",
    brand: "Sonos",
    isNew: true,
    inStock: true,
    description: "Premium soundbar with wireless subwoofer for cinematic home theater experience.",
    specs: ["Dolby Atmos", "Wireless Subwoofer", "HDMI eARC", "Voice Control"],
    features: ["Room Calibration", "Multi-Room Audio", "Streaming Services", "Easy Setup"],
    // images: [
    //   "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    //   "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    // ]
  },
  {
    id: 48,
    name: "Podcast Microphone USB",
    price: 7999.99,
    originalPrice: 9999.99,
    image: "https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-lzi15uq3ej6q79",
    rating: 4.6,
    reviews: 189,
    category: "Audio",
    brand: "Blue Yeti",
    isNew: true,
    inStock: true,
    description: "Professional USB microphone perfect for podcasting, streaming, and content creation.",
    specs: ["USB Connectivity", "Multiple Pickup Patterns", "Headphone Monitoring", "Mute Button"],
    features: ["Zero-Latency Monitoring", "Plug and Play", "Adjustable Stand", "Studio Quality"],
    // images: [
    //   "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400",
    //   "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    // ]
  },

  // Additional Wearables Products
  {
    id: 49,
    name: "Fitness Tracker Advanced",
    price: 12999.99,
    originalPrice: 15999.99,
    image: "https://www.axtrosports.com/cdn/shop/products/Fitbit_Charge_4_Render_3QTR_Core_Black_Clock_Default_Shadow_700x700.jpg?v=1593146629",
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
    // images: [
    //   "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
    //   "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400"
    // ]
  },
  {
    id: 50,
    name: "VR Headset Gaming",
    price: 34999.99,
    originalPrice: 39999.99,
    image: "https://i5.walmartimages.com/asr/18234d9c-8848-4071-bc23-2cb5f08c797d.a1324999d69e7883a6340534ada60a74.jpeg",
    rating: 4.8,
    reviews: 234,
    category: "Wearables",
    brand: "Meta",
    isNew: true,
    inStock: true,
    description: "Immersive VR headset for gaming and entertainment with high-resolution displays and spatial audio.",
    specs: ["4K Display", "120Hz Refresh", "Spatial Audio", "Hand Tracking"],
    features: ["Wireless Freedom", "Guardian System", "Social VR", "Extensive Library"],
    // images: [
    //   "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400",
    //   "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400"
    // ]
  },
  {
    id: 51,
    name: "Smart Glasses AR",
    price: 28999.99,
    originalPrice: 34999.99,
    image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1685725563-xreal-air-ar-glasses-647a2121eb36e.jpg?crop=1xw:1xh;center,top&resize=980:*",
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
    // images: [
    //   "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400",
    //   "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400"
    // ]
  },
  {
    id: 52,
    name: "Wireless Charging Watch",
    price: 18999.99,
    originalPrice: 24999.99,
    image: "https://image.made-in-china.com/2f0j00erjcVIAWraoS/Ultra-Smart-Watch-8-for-Ios-Android-with-Retina-HD-Screen-Wireless-Charging-NFC-Rotary-Control.webp",
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
    // images: [
    //   "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
    //   "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400"
    // ]
  },
  {
    id: 53,
    name: "Smart Ring Health",
    price: 14999.99,
    originalPrice: 18999.99,
    image: "https://m.media-amazon.com/images/I/612Su5lCijL._AC_SL1500_.jpg",
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
    // images: [
    //   "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
    //   "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400"
    // ]
  },

  // Additional Sports Products
  {
    id: 54,
    name: "Yoga Mat Premium",
    price: 3999.99,
    originalPrice: 4999.99,
    image: "https://chrissports.com/cdn/shop/products/Fitness_AthleticsPremiumYogaMat_Purple_EcofriendlyYoga_800x.jpg?v=1689589776",
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
    // images: [
    //   "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    //   "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
    // ]
  },
  {
    id: 55,
    name: "Dumbbells Adjustable Set",
    price: 15999.99,
    originalPrice: 19999.99,
    image: "https://chrissports.com/cdn/shop/files/1223121_800x.png?v=1738819398",
    rating: 4.8,
    reviews: 234,
    category: "Sports",
    brand: "Bowflex",
    isNew: true,
    inStock: true,
    description: "Adjustable dumbbell set that replaces multiple weights with quick-change system for home workouts.",
    specs: ["5-50 lbs Range", "Quick Adjust", "Compact Design", "Durable Construction"],
    features: ["Space Saving", "Easy Storage", "Professional Grade", "Safety Lock"],
    // images: [
    //   "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    //   "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400"
    // ]
  },
  {
    id: 56,
    name: "Basketball Official Size",
    price: 2499.99,
    originalPrice: 2999.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/A1riVR8CU+L.jpg",
    rating: 4.6,
    reviews: 345,
    category: "Sports",
    brand: "Spalding",
    isNew: false,
    inStock: true,
    description: "Official size basketball with premium leather construction for indoor and outdoor play.",
    specs: ["Official Size 7", "Composite Leather", "Deep Channel Design", "All-Surface"],
    features: ["Superior Grip", "Consistent Bounce", "Durable Build", "Professional Grade"],
    // images: [
    //   "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400",
    //   "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
    // ]
  },
  {
    id: 57,
    name: "Tennis Racket Pro",
    price: 8999.99,
    originalPrice: 11999.99,
    image: "https://ph-test-11.slatic.net/p/841db34aac2c475bc47a69840ca72aef.png",
    rating: 4.7,
    reviews: 167,
    category: "Sports",
    brand: "Wilson",
    isNew: true,
    inStock: true,
    description: "Professional tennis racket with advanced frame technology for power and control on the court.",
    specs: ["100 sq in Head", "295g Weight", "16x19 String Pattern", "Carbon Fiber"],
    features: ["Shock Absorption", "Power Enhancement", "Control Technology", "Professional Grade"],
    // images: [
    //   "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
    //   "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400"
    // ]
  },
  {
    id: 58,
    name: "Resistance Bands Set",
    price: 1999.99,
    originalPrice: 2999.99,
    image: "https://starkfitness.com.ph/cdn/shop/files/ResistanceLoopBandSet.png?v=1715827838",
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
    // images: [
    //   "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    //   "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400"
    // ]
  },

  // Additional Accessories Products
  {
    id: 59,
    name: "Designer Sunglasses",
    price: 12999.99,
    originalPrice: 15999.99,
    image: "https://m.media-amazon.com/images/I/51tcmeLYJCL._UY1000_.jpg",
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
    // images: [
    //   "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400",
    //   "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
    // ]
  },
  {
    id: 60,
    name: "Luxury Watch Automatic",
    price: 45999.99,
    originalPrice: 54999.99,
    image: "https://winner-watch.com/cdn/shop/products/519_3_5da28711-bf70-4db5-b155-5996d4962280_1024x1024.jpg?v=1600671523",
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
    // images: [
    //   "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
    //   "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400"
    // ]
  },
  {
    id: 61,
    name: "Leather Wallet Premium",
    price: 4999.99,
    originalPrice: 6999.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/51w81UfPWOL.jpg",
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
    // images: [
    //   "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    //   "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400"
    // ]
  },
  {
    id: 62,
    name: "Silk Scarf Designer",
    price: 8999.99,
    originalPrice: 11999.99,
    image: "https://jimweaverdesigns.com/wp-content/uploads/2022/06/Diwata-v2-Featured-Product-Photo.jpg",
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
    // images: [
    //   "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400",
    //   "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
    // ]
  },
  {
    id: 63,
    name: "Phone Case Protective",
    price: 1999.99,
    originalPrice: 2999.99,
    image: "https://m.media-amazon.com/images/I/71-X9BxK8vL.jpg",
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
    // images: [
    //   "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    //   "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400"
    // ]
  },

  // Flash Deals Products
  {
    id: 1001,
    name: "Flash Deal - Wireless Earbuds Pro",
    price: 1479.99,
    originalPrice: 3999.99,
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=QWZBLzc3NVhRYmpqTWh3WEU0STNPQWtuVHYzMERCZURia3c5SzJFOTlPaTY2U2V0cFlidDNjaDV1MFlycTJXbnhBUFRTdlI5VGJDVCtMejFJd09mS3c",
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
    // images: [
    //   "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
    //   "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    // ]
  },
  {
    id: 1002,
    name: "Flash Deal - Gaming Mouse RGB",
    price: 999.99,
    originalPrice: 2499.99,
    image: "https://www.itech.ph/wp-content/uploads/2021/09/Razer-Basilisk-V3-Customizable-Gaming-Mouse-with-Razer-Chroma-RGB.jpg",
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
    // images: [
    //   "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    //   "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=400"
    // ]
  },
  {
    id: 1003,
    name: "Flash Deal - Bluetooth Speaker",
    price: 1249.99,
    originalPrice: 4999.99,
    image: "https://d2jpx6ncc90twu.cloudfront.net/files/product/large/512580.jpg",
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
    // images: [
    //   "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    //   "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400"
    // ]
  },
  {
    id: 1004,
    name: "Flash Deal - Smartwatch Fitness",
    price: 2959.99,
    originalPrice: 7999.99,
    image: "https://ph.garmin.com/m/ph/g/products/vivoactive6-cf-lg.png",
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
    // images: [
    //   "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
    //   "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400"
    // ]
  },
  {
    id: 1005,
    name: "Flash Deal - Mechanical Keyboard",
    price: 3999.99,
    originalPrice: 7999.99,
    image: "https://digitalwalker.ph/cdn/shop/files/SM1MechanicalKeyboard_Light_-USLightGray1.png?v=1721119717",
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
    // images: [
    //   "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
    //   "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
    // ]
  },
  {
    id: 1006,
    name: "Gaming PC Build",
    price: 799.99,
    originalPrice: 1999.99,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400",
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
    // images: [
    //   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    //   "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400"
    // ]
  },
  {
    id: 1007,
    name: "Flash Deal - Fitness Resistance Bands",
    price: 599.99,
    originalPrice: 1499.99,
    image: "https://www.tigerfitness.com/cdn/shop/products/tiger-fitness-pullup-resistance-workout-and-exercise-bands-5-pack-1005198-108110_grande.jpg?v=1701817550",
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
    // images: [
    //   "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    //   "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400"
    // ]
  },
  {
    id: 1008,
    name: "Flash Deal - Phone Case Premium",
    price: 493.99,
    originalPrice: 1299.99,
    image: "https://urbangadgets.ph/wp-content/uploads/Aukey-PC-GJ10A-Magnetic-Hard-Shell-Phone-Case-iPhone-15-Pro-Max-Silicon-Lilac.webp",
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
    // images: [
    //   "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    //   "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400"
    // ]
  },
  {
    id: 1009,
    name: "Flash Deal - DSLR Camera Bundle",
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
    // images: [
    //   "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    //   "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
    // ]
  },

  // Featured Products
  {
    id: 2001,
    name: "Premium Wireless Headphones Pro",
    price: 14999.99,
    originalPrice: 19999.99,
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTP3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=SUFReFd6NEVVOW50TTcxUzVyWlhHZ2tuVHYzMERCZURia3c5SzJFOTlPZ3oveDdpQVpwS0ltY2w2UW05aU90TzVtaW9peGdOaitwV1Nxb1VublZoTVE",
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
    // images: [
    //   "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    //   "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    // ]
  },
  {
    id: 2002,
    name: "Professional Laptop Workstation",
    price: 64999.99,
    originalPrice: 74999.99,
    image: "https://s3-eu-west-1.amazonaws.com/backcslimages/newsite/product-images/1500-1500/Fellowes-Professional-Series-Laptop-Workstation-Laptop.jpg",
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
    // images: [
    //   "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    //   "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400"
    // ]
  },
  {
    id: 8050,
    name: "Smart Watch Pro Max",
    price: 22499.99,
    originalPrice: 27499.99,
    image: "https://down-ph.img.susercontent.com/file/65ad1328f03b26b9a5cb16fd2f26ee1b",
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
    // images: [
    //   "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
    //   "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400"
    // ]
  },
  {
    id: 5004,
    name: "Professional DSLR Camera Kit",
    price: 44999.99,
    originalPrice: 54999.99,
    image: "https://s7d1.scene7.com/is/image/canon/2727C021_eos-rebel-t7-double-zoom-lens-kit_3?fmt=webp-alpha&wid=800&hei=800",
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
    name: "Apple iPhone 11 128gb",
    price: 34999.99,
    originalPrice: 39999.99,
    image: "https://m.media-amazon.com/images/I/71P60TP5IwL.jpg",
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
    // images: [
    //   "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    //   "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400"
    // ]
  },
  {
    id: 2007,
    name: "Professional Tools Set Deluxe",
    price: 7499.99,
    originalPrice: 9999.99,
    image: "https://m.media-amazon.com/images/I/91i9Ya8543L._UF1000,1000_QL80_.jpg",
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
    // images: [
    //   "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
    //   "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
    // ]
  },
  {
    id: 2008,
    name: "Premium Baby Care System",
    price: 4499.99,
    originalPrice: 5999.99,
    image: "https://image.made-in-china.com/2f0j00umIoiblcZUkW/Wholesale-Homebaby-Brand-Dry-Baby-Diapers-Factory-OEM-Baby-Diaper-Brand-New-Pull-up-Type-Soft-Care-Diapers-for-Infant.jpg",
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
    // images: [
    //   "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
    //   "https://images.unsplash.com/photo-1558877385-1c2d7b8e7b35?w=400"
    // ]
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
    id: 8051,
    name: "Smart Fitness Watch",
    price: 12999.99,
    originalPrice: 18999.99,
    image: "https://otcer.ph/wp-content/uploads/2019/11/atmos-fit-hydro-smart-fitness-band-800x800.jpg",
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
    // images: [
    //   "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
    //   "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400"
    // ]
  },
  {
    id: 5005,
    name: "Professional Camera Lens 50mm",
    price: 34999.99,
    originalPrice: 49999.99,
    image: "data:image/jpeg;base64,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",
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
    // images: [
    //   "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
    //   "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    //   "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
    //   "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
    // ]
  },
  {
    id: 1004,
    name: "Gaming Mechanical Keyboard",
    price: 5999.99,
    originalPrice: 8999.99,
    image: "https://rkgamingstore.com/cdn/shop/files/RK9696_WirelessMechanicalKeyboard_5_e22f4011-d14f-4de4-b7a2-7d2c88ff5227.png?v=1748578221&width=1946",
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
    // images: [
    //   "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
    //   "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
    // ]
  },
  {
    id: 9050,
    name: "Luxury Leather Handbag",
    price: 15999.99,
    originalPrice: 24999.99,
    image: "https://www.attavanti.com/product_images/uploaded_images/pratesi-bucket-bag-brown-front.jpg",
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
    // images: [
    //   "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    //   "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400"
    // ]
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
