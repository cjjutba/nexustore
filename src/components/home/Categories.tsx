import { Link } from "react-router-dom";
import { Smartphone, Headphones, Camera, Watch, Laptop, Shirt, Baby, Wrench, Star, Package } from "lucide-react";

const Categories = () => {
  const categories = [
    { id: 1, name: "Fashion", icon: Shirt, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400", count: "500+ items", path: "/categories/fashion" },
    { id: 2, name: "Electronics", icon: Smartphone, image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400", count: "300+ items", path: "/categories/electronics" },
    { id: 3, name: "Photography", icon: Camera, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400", count: "150+ items", path: "/categories/photography" },
    { id: 4, name: "Computers", icon: Laptop, image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400", count: "200+ items", path: "/categories/computers" },
    { id: 5, name: "Baby & Kids", icon: Baby, image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400", count: "400+ items", path: "/categories/baby-kids" },
    { id: 6, name: "Tools", icon: Wrench, image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400", count: "250+ items", path: "/categories/tools" },
    { id: 7, name: "Audio", icon: Headphones, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400", count: "180+ items", path: "/categories/audio" },
    { id: 8, name: "Wearables", icon: Watch, image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400", count: "120+ items", path: "/categories/wearables" },
    { id: 9, name: "Sports", icon: Package, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400", count: "350+ items", path: "/categories/sports" },
    { id: 10, name: "Accessories", icon: Star, image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400", count: "600+ items", path: "/categories/accessories" }
  ];

  return (
    <section className="py-16 bg-pure-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-charcoal mb-4">CATEGORIES</h2>
          <p className="text-dark-gray text-lg">Explore our wide range of product categories</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} to={category.path} className="group">
                <div className="bg-pure-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-light-gray hover:border-medium-gray hover:scale-105 transform">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-charcoal leading-tight group-hover:text-primary transition-colors">
                    {category.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
