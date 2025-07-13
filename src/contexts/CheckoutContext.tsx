import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem } from '@/contexts/CartContext';

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface PaymentMethod {
  type: 'credit_card' | 'debit_card' | 'paypal' | 'cash_on_delivery';
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  cardholderName?: string;
  last4?: string;
  brand?: string;
}

export interface CheckoutState {
  currentStep: number;
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  orderNotes: string;
  isProcessing: boolean;
  error: string | null;
  orderSummary: {
    subtotal: number;
    tax: number;
    shipping: number;
    discount: number;
    total: number;
    promoCode?: string;
  };
}

type CheckoutAction =
  | { type: 'SET_STEP'; payload: number }
  | { type: 'SET_SHIPPING_ADDRESS'; payload: ShippingAddress }
  | { type: 'SET_PAYMENT_METHOD'; payload: PaymentMethod }
  | { type: 'SET_ORDER_NOTES'; payload: string }
  | { type: 'SET_PROCESSING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_ORDER_SUMMARY'; payload: CheckoutState['orderSummary'] }
  | { type: 'RESET_CHECKOUT' };

const initialState: CheckoutState = {
  currentStep: 1,
  shippingAddress: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Philippines'
  },
  paymentMethod: {
    type: 'credit_card'
  },
  orderNotes: '',
  isProcessing: false,
  error: null,
  orderSummary: {
    subtotal: 0,
    tax: 0,
    shipping: 0,
    discount: 0,
    total: 0
  }
};

const checkoutReducer = (state: CheckoutState, action: CheckoutAction): CheckoutState => {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, currentStep: action.payload };
    
    case 'SET_SHIPPING_ADDRESS':
      return { ...state, shippingAddress: action.payload };
    
    case 'SET_PAYMENT_METHOD':
      return { ...state, paymentMethod: action.payload };
    
    case 'SET_ORDER_NOTES':
      return { ...state, orderNotes: action.payload };
    
    case 'SET_PROCESSING':
      return { ...state, isProcessing: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    case 'SET_ORDER_SUMMARY':
      return { ...state, orderSummary: action.payload };
    
    case 'RESET_CHECKOUT':
      return initialState;
    
    default:
      return state;
  }
};

interface CheckoutContextType {
  state: CheckoutState;
  setStep: (step: number) => void;
  setShippingAddress: (address: ShippingAddress) => void;
  setPaymentMethod: (method: PaymentMethod) => void;
  setOrderNotes: (notes: string) => void;
  setProcessing: (processing: boolean) => void;
  setError: (error: string | null) => void;
  setOrderSummary: (summary: CheckoutState['orderSummary']) => void;
  resetCheckout: () => void;
  calculateOrderSummary: (cartItems: CartItem[], promoCode?: string) => void;
  validateStep: (step: number) => boolean;
  canProceedToNextStep: () => boolean;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

interface CheckoutProviderProps {
  children: ReactNode;
}

export const CheckoutProvider: React.FC<CheckoutProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  const setStep = (step: number) => {
    dispatch({ type: 'SET_STEP', payload: step });
  };

  const setShippingAddress = (address: ShippingAddress) => {
    dispatch({ type: 'SET_SHIPPING_ADDRESS', payload: address });
  };

  const setPaymentMethod = (method: PaymentMethod) => {
    dispatch({ type: 'SET_PAYMENT_METHOD', payload: method });
  };

  const setOrderNotes = (notes: string) => {
    dispatch({ type: 'SET_ORDER_NOTES', payload: notes });
  };

  const setProcessing = (processing: boolean) => {
    dispatch({ type: 'SET_PROCESSING', payload: processing });
  };

  const setError = (error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const setOrderSummary = (summary: CheckoutState['orderSummary']) => {
    dispatch({ type: 'SET_ORDER_SUMMARY', payload: summary });
  };

  const resetCheckout = () => {
    dispatch({ type: 'RESET_CHECKOUT' });
  };

  const calculateOrderSummary = (cartItems: CartItem[], promoCode?: string) => {
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.12; // 12% VAT in Philippines
    const shipping = subtotal >= 1500 ? 0 : 150; // Free shipping over ₱1500
    
    let discount = 0;
    if (promoCode === 'SAVE10') {
      discount = subtotal * 0.1; // 10% discount
    }
    
    const total = subtotal + tax + shipping - discount;
    
    setOrderSummary({
      subtotal,
      tax,
      shipping,
      discount,
      total,
      promoCode
    });
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1: // Shipping Address
        const { shippingAddress } = state;
        const isValid = !!(
          shippingAddress.firstName?.trim() &&
          shippingAddress.lastName?.trim() &&
          shippingAddress.email?.trim() &&
          shippingAddress.phone?.trim() &&
          shippingAddress.address?.trim() &&
          shippingAddress.city?.trim() &&
          shippingAddress.state?.trim() &&
          shippingAddress.zipCode?.trim()
        );



        return isValid;
      
      case 2: // Payment Method
        const { paymentMethod } = state;
        if (paymentMethod.type === 'cash_on_delivery') {
          return true;
        }
        const paymentValid = !!(
          paymentMethod.cardNumber?.trim() &&
          paymentMethod.expiryDate?.trim() &&
          paymentMethod.cvv?.trim() &&
          paymentMethod.cardholderName?.trim()
        );



        return paymentValid;
      
      case 3: // Order Review
        return validateStep(1) && validateStep(2);
      
      default:
        return false;
    }
  };

  const canProceedToNextStep = (): boolean => {
    return validateStep(state.currentStep);
  };

  const value: CheckoutContextType = {
    state,
    setStep,
    setShippingAddress,
    setPaymentMethod,
    setOrderNotes,
    setProcessing,
    setError,
    setOrderSummary,
    resetCheckout,
    calculateOrderSummary,
    validateStep,
    canProceedToNextStep
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = (): CheckoutContextType => {
  const context = useContext(CheckoutContext);
  if (context === undefined) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
};
