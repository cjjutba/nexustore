import { Button } from "@/components/ui/button";
import { useNewsletter } from "@/hooks/useNewsletter";
import { useNewsletterStorage } from "@/hooks/useNewsletterStorage";
import { NewsletterSecurityManager, HoneypotSecurity } from "@/utils/newsletterSecurity";
import { Loader2, CheckCircle, AlertCircle, Mail, Users, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const Newsletter = () => {
  const { formState, handleEmailChange, handleSubmit, isRateLimited } = useNewsletter();
  const { getStats } = useNewsletterStorage();
  const [stats, setStats] = useState({ active: 0, recent: 0 });
  const [honeypotValue, setHoneypotValue] = useState('');
  const [securityManager] = useState(() => NewsletterSecurityManager.getInstance());

  // Initialize security measures
  useEffect(() => {
    securityManager.initialize();
  }, [securityManager]);

  // Update stats periodically
  useEffect(() => {
    const updateStats = () => {
      const currentStats = getStats();
      setStats({
        active: currentStats.active,
        recent: currentStats.recent
      });
    };

    updateStats();
    const interval = setInterval(updateStats, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [getStats]);

  // Enhanced form submission with security checks
  const handleSecureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform security check
    const securityCheck = securityManager.performSecurityCheck(formState.email, honeypotValue);

    if (!securityCheck.passed) {
      console.warn('Security check failed:', securityCheck.reasons);
      // Don't show specific security errors to user to avoid giving information to attackers
      return;
    }

    // Proceed with normal submission
    await handleSubmit(e);
  };

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
          <form onSubmit={handleSecureSubmit} className="max-w-2xl mx-auto mb-8">
            {/* Honeypot field for bot detection */}
            <input
              {...HoneypotSecurity.getHoneypotProps()}
              value={honeypotValue}
              onChange={(e) => setHoneypotValue(e.target.value)}
            />
            <div className="flex flex-col sm:flex-row gap-3 items-stretch justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-2 shadow-2xl border border-white/20">
              <div className="flex-1 min-w-0 relative">
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  placeholder="Enter your email address"
                  disabled={formState.isLoading || formState.isSubscribed || isRateLimited}
                  className={`w-full h-14 px-6 rounded-xl border-0 focus:outline-none focus:ring-2 text-charcoal font-medium text-base shadow-lg transition-all duration-300 placeholder:text-gray-500 bg-white hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${
                    formState.error
                      ? 'focus:ring-red-500 ring-2 ring-red-500'
                      : formState.isSubscribed
                        ? 'focus:ring-green-500 ring-2 ring-green-500'
                        : 'focus:ring-primary/50'
                  }`}
                  maxLength={254}
                  autoComplete="email"
                  aria-describedby={formState.error ? "email-error" : undefined}
                />

                {/* Input Status Icons */}
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {formState.isLoading && (
                    <Loader2 className="h-5 w-5 text-primary animate-spin" />
                  )}
                  {formState.isSubscribed && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                  {formState.error && (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              </div>

              <Button
                type="submit"
                disabled={formState.isLoading || formState.isSubscribed || isRateLimited || !formState.email.trim()}
                className={`h-14 font-semibold px-8 rounded-xl text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform whitespace-nowrap border-0 min-w-fit ${
                  formState.isSubscribed
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : isRateLimited
                      ? 'bg-red-500 hover:bg-red-600 text-white cursor-not-allowed'
                      : 'bg-primary hover:bg-primary/90 text-white'
                } disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                {formState.isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : formState.isSubscribed ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Subscribed!
                  </>
                ) : isRateLimited ? (
                  <>
                    <Shield className="mr-2 h-4 w-4" />
                    Rate Limited
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Subscribe Now
                  </>
                )}
              </Button>
            </div>

            {/* Error Message */}
            {formState.error && (
              <div id="email-error" className="mt-3 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{formState.error}</span>
                </div>
              </div>
            )}

            {/* Success Message */}
            {formState.isSubscribed && (
              <div className="mt-3 text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 flex-shrink-0" />
                  <span>Welcome to NexuStore newsletter! Check your email for confirmation.</span>
                </div>
              </div>
            )}
          </form>

          {/* Stats and Security Info */}
          <div className="text-white/70 text-base space-y-2">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Join {stats.active.toLocaleString()}+ subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Secure & spam-free</span>
              </div>
            </div>
            <p>No spam, unsubscribe anytime • {stats.recent} joined this month</p>
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
