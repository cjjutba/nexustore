import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCheckout } from "@/contexts/CheckoutContext";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Truck, MapPin } from "lucide-react";

export const ShippingForm = () => {
  const { state: checkoutState, setShippingAddress, setStep, calculateOrderSummary, canProceedToNextStep } = useCheckout();
  const { state: authState } = useAuth();
  const { state: cartState } = useCart();
  
  const [formData, setFormData] = useState(checkoutState.shippingAddress);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Pre-fill with user data if available
  useEffect(() => {
    if (authState.user && !checkoutState.shippingAddress.firstName) {
      const updatedFormData = {
        ...checkoutState.shippingAddress,
        firstName: authState.user?.firstName || '',
        lastName: authState.user?.lastName || '',
        email: authState.user?.email || '',
        phone: authState.user?.phone || ''
      };
      setFormData(updatedFormData);
      setShippingAddress(updatedFormData);
    }
  }, [authState.user, checkoutState.shippingAddress, setShippingAddress]);

  // Calculate order summary when component mounts
  useEffect(() => {
    calculateOrderSummary(cartState.items);
  }, [cartState.items, calculateOrderSummary]);



  const handleInputChange = (field: string, value: string) => {
    const updatedFormData = { ...formData, [field]: value };
    setFormData(updatedFormData);

    // Update the checkout context in real-time for validation
    setShippingAddress(updatedFormData);

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone?.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address?.trim()) newErrors.address = 'Address is required';
    if (!formData.city?.trim()) newErrors.city = 'City is required';
    if (!formData.state?.trim()) newErrors.state = 'State/Province is required';
    if (!formData.zipCode?.trim()) newErrors.zipCode = 'ZIP code is required';



    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      setShippingAddress(formData);
      setStep(2);
    }
  };

  const philippineStates = [
    'Metro Manila', 'Cebu', 'Davao', 'Calabarzon', 'Central Luzon',
    'Western Visayas', 'Central Visayas', 'Northern Mindanao', 'Bicol',
    'Eastern Visayas', 'Zamboanga Peninsula', 'Cagayan Valley', 'Ilocos',
    'SOCCSKSARGEN', 'Caraga', 'MIMAROPA', 'Cordillera', 'BARMM'
  ];

  return (
    <Card className="minimalist-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Truck className="w-5 h-5 text-primary" />
          <span>Shipping Information</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="font-medium text-foreground flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Personal Details</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={errors.firstName ? 'border-destructive' : ''}
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={errors.lastName ? 'border-destructive' : ''}
                placeholder="Enter your last name"
              />
              {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={errors.email ? 'border-destructive' : ''}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={errors.phone ? 'border-destructive' : ''}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
            </div>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="space-y-4">
          <h3 className="font-medium text-foreground">Shipping Address</h3>
          
          <div className="space-y-2">
            <Label htmlFor="address">Street Address *</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className={errors.address ? 'border-destructive' : ''}
              placeholder="Enter your street address"
            />
            {errors.address && <p className="text-sm text-destructive">{errors.address}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className={errors.city ? 'border-destructive' : ''}
                placeholder="Enter your city"
              />
              {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">State/Province *</Label>
              <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                <SelectTrigger className={errors.state ? 'border-destructive' : ''}>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {philippineStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.state && <p className="text-sm text-destructive">{errors.state}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipCode">ZIP Code *</Label>
              <Input
                id="zipCode"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                className={errors.zipCode ? 'border-destructive' : ''}
                placeholder="Enter ZIP code"
              />
              {errors.zipCode && <p className="text-sm text-destructive">{errors.zipCode}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              value={formData.country}
              disabled
              className="bg-muted"
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-end pt-4">
          <Button
            onClick={handleContinue}
            disabled={!canProceedToNextStep()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
          >
            Continue to Payment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
