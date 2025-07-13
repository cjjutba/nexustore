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
    <section className="py-5 mobile-xs:py-6 mobile-l:py-8 sm:py-12 tablet:py-16 lg:py-16 bg-pure-white">
      <div className="container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10">
        <div className="text-center mb-4 mobile-l:mb-6 sm:mb-10 tablet:mb-12 lg:mb-12">
          <h2 className="text-lg mobile-xs:text-xl mobile-l:text-2xl sm:text-3xl tablet:text-4xl font-bold text-charcoal mb-1.5 mobile-xs:mb-2 mobile-l:mb-2 sm:mb-4 tablet:mb-5">CATEGORIES</h2>
          <p className="text-dark-gray text-xs mobile-xs:text-sm mobile-l:text-base sm:text-lg tablet:text-xl lg:text-lg">Explore our wide range of product categories</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 tablet:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3 mobile-l:gap-4 sm:gap-5 tablet:gap-6 lg:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} to={category.path} state={{ fromHome: true }} className="group">
                <div className="bg-pure-white rounded-lg mobile-l:rounded-xl sm:rounded-xl p-2.5 mobile-xs:p-3 mobile-l:p-4 sm:p-5 tablet:p-6 lg:p-6 text-center hover:shadow-xl transition-all duration-300 border border-light-gray hover:border-medium-gray hover:scale-105 transform min-h-[44px]">
                  <div className="w-10 h-10 mobile-l:w-12 mobile-l:h-12 sm:w-14 sm:h-14 tablet:w-16 tablet:h-16 lg:w-16 lg:h-16 bg-primary/10 rounded-lg mobile-l:rounded-xl sm:rounded-xl flex items-center justify-center mx-auto mb-2 mobile-xs:mb-2 mobile-l:mb-3 sm:mb-4 tablet:mb-5 lg:mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 mobile-l:w-6 mobile-l:h-6 sm:w-7 sm:h-7 tablet:w-8 tablet:h-8 lg:w-8 lg:h-8 text-primary" />
                  </div>
                  <p className="text-xs mobile-xs:text-xs mobile-l:text-sm sm:text-base tablet:text-lg font-semibold text-charcoal leading-tight group-hover:text-primary transition-colors">
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
