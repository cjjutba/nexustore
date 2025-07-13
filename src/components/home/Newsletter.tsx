import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-charcoal via-dark-gray to-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Stay Updated with Latest Deals
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter and be the first to know about flash sales, new arrivals, and exclusive offers
          </p>

          {/* Newsletter Form */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-2 shadow-2xl border border-white/20">
              <div className="flex-1 min-w-0">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-14 px-6 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/50 text-charcoal font-medium text-base shadow-lg transition-all duration-300 placeholder:text-gray-500 bg-white hover:shadow-xl"
                />
              </div>
              <Button className="h-14 bg-primary hover:bg-primary/90 text-white font-semibold px-8 rounded-xl text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform whitespace-nowrap border-0 min-w-fit">
                Subscribe Now
              </Button>
            </div>
          </div>

          <div className="text-white/70 text-base">
            <p>Join 50,000+ subscribers • No spam, unsubscribe anytime</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
    </section>
  );
};

export default Newsletter;
