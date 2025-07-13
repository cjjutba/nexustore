import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCheckout } from "@/contexts/CheckoutContext";
import { CreditCard, Banknote, Smartphone } from "lucide-react";

export const PaymentForm = () => {
  const { state: checkoutState, setPaymentMethod, setStep, canProceedToNextStep } = useCheckout();
  
  const [formData, setFormData] = useState(checkoutState.paymentMethod);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handlePaymentTypeChange = (type: string) => {
    const updatedFormData = {
      ...formData,
      type: type as any,
      // Clear card details if switching to COD
      ...(type === 'cash_on_delivery' ? {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: ''
      } : {})
    };
    setFormData(updatedFormData);
    setPaymentMethod(updatedFormData);
    setErrors({});
  };

  const handleInputChange = (field: string, value: string) => {
    const updatedFormData = { ...formData, [field]: value };
    setFormData(updatedFormData);
    setPaymentMethod(updatedFormData);

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const formatCardNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Add spaces every 4 digits
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const formatExpiryDate = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Add slash after 2 digits
    if (digits.length >= 2) {
      return digits.substring(0, 2) + '/' + digits.substring(2, 4);
    }
    return digits;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.type === 'cash_on_delivery') {
      // No validation needed for COD
      setErrors({});
      return true;
    }

    // Credit/Debit card validation
    if (!formData.cardNumber?.replace(/\s/g, '')) {
      newErrors.cardNumber = 'Card number is required';
    } else if (formData.cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }

    if (!formData.expiryDate) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Invalid expiry date format';
    }

    if (!formData.cvv) {
      newErrors.cvv = 'CVV is required';
    } else if (formData.cvv.length < 3) {
      newErrors.cvv = 'CVV must be 3-4 digits';
    }

    if (!formData.cardholderName?.trim()) {
      newErrors.cardholderName = 'Cardholder name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      // Process card number for storage (remove spaces, keep only last 4 digits)
      const processedPaymentMethod = {
        ...formData,
        last4: formData.cardNumber ? formData.cardNumber.replace(/\s/g, '').slice(-4) : undefined,
        brand: formData.cardNumber ? getCardBrand(formData.cardNumber) : undefined
      };
      
      setPaymentMethod(processedPaymentMethod);
      setStep(3);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const getCardBrand = (cardNumber: string) => {
    const number = cardNumber.replace(/\s/g, '');
    if (number.startsWith('4')) return 'Visa';
    if (number.startsWith('5') || number.startsWith('2')) return 'Mastercard';
    if (number.startsWith('3')) return 'American Express';
    return 'Unknown';
  };

  const paymentMethods = [
    {
      id: 'credit_card',
      title: 'Credit Card',
      description: 'Pay securely with your credit card',
      icon: CreditCard
    },
    {
      id: 'debit_card',
      title: 'Debit Card',
      description: 'Pay directly from your bank account',
      icon: CreditCard
    },
    {
      id: 'cash_on_delivery',
      title: 'Cash on Delivery',
      description: 'Pay when your order arrives',
      icon: Banknote
    }
  ];

  return (
    <Card className="minimalist-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CreditCard className="w-5 h-5 text-primary" />
          <span>Payment Method</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Payment Method Selection */}
        <div className="space-y-4">
          <h3 className="font-medium text-foreground">Choose Payment Method</h3>
          
          <RadioGroup
            value={formData.type}
            onValueChange={handlePaymentTypeChange}
            className="space-y-3"
          >
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={method.id} id={method.id} />
                  <Icon className="w-5 h-5 text-muted-foreground" />
                  <div className="flex-1">
                    <Label htmlFor={method.id} className="font-medium cursor-pointer">
                      {method.title}
                    </Label>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              );
            })}
          </RadioGroup>
        </div>

        {/* Card Details Form */}
        {(formData.type === 'credit_card' || formData.type === 'debit_card') && (
          <div className="space-y-4 p-4 border rounded-lg bg-muted/20">
            <h3 className="font-medium text-foreground">Card Details</h3>
            
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number *</Label>
              <Input
                id="cardNumber"
                value={formData.cardNumber || ''}
                onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                className={errors.cardNumber ? 'border-destructive' : ''}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
              {errors.cardNumber && <p className="text-sm text-destructive">{errors.cardNumber}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date *</Label>
                <Input
                  id="expiryDate"
                  value={formData.expiryDate || ''}
                  onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                  className={errors.expiryDate ? 'border-destructive' : ''}
                  placeholder="MM/YY"
                  maxLength={5}
                />
                {errors.expiryDate && <p className="text-sm text-destructive">{errors.expiryDate}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="cvv">CVV *</Label>
                <Input
                  id="cvv"
                  value={formData.cvv || ''}
                  onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                  className={errors.cvv ? 'border-destructive' : ''}
                  placeholder="123"
                  maxLength={4}
                />
                {errors.cvv && <p className="text-sm text-destructive">{errors.cvv}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardholderName">Cardholder Name *</Label>
              <Input
                id="cardholderName"
                value={formData.cardholderName || ''}
                onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                className={errors.cardholderName ? 'border-destructive' : ''}
                placeholder="Enter name as shown on card"
              />
              {errors.cardholderName && <p className="text-sm text-destructive">{errors.cardholderName}</p>}
            </div>
          </div>
        )}

        {/* Cash on Delivery Info */}
        {formData.type === 'cash_on_delivery' && (
          <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
            <div className="flex items-center space-x-2 text-blue-800">
              <Banknote className="w-5 h-5" />
              <h3 className="font-medium">Cash on Delivery</h3>
            </div>
            <p className="text-sm text-blue-700 mt-2">
              You will pay for your order when it's delivered to your address. Please have the exact amount ready.
            </p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={handleBack}
            className="px-8 py-3"
          >
            Back to Shipping
          </Button>
          
          <Button
            onClick={handleContinue}
            disabled={!canProceedToNextStep()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
          >
            Review Order
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
