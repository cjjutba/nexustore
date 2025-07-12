import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from '@/data/products';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  color?: string;
  size?: string;
  category: string;
  brand: string;
  inStock: boolean;
  selectedOptions: {
    size?: string;
    color?: string;
  };
}

export interface WaitlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  selectedOptions: {
    size?: string;
    color?: string;
  };
  dateAdded: string;
}

interface CartState {
  items: CartItem[];
  waitlist: WaitlistItem[];
  isLoading: boolean;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number; selectedOptions: { size?: string; color?: string } } }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_TO_WAITLIST'; payload: { product: Product; selectedOptions: { size?: string; color?: string } } }
  | { type: 'REMOVE_FROM_WAITLIST'; payload: number }
  | { type: 'LOAD_FROM_STORAGE'; payload: CartState }
  | { type: 'SET_LOADING'; payload: boolean };

const initialState: CartState = {
  items: [],
  waitlist: [],
  isLoading: true,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity, selectedOptions } = action.payload;
      
      // Create a unique key for the item based on product ID and selected options
      const itemKey = `${product.id}-${selectedOptions.size || 'no-size'}-${selectedOptions.color || 'no-color'}`;
      
      // Check if item with same options already exists
      const existingItemIndex = state.items.findIndex(item => 
        item.id === product.id && 
        item.selectedOptions.size === selectedOptions.size &&
        item.selectedOptions.color === selectedOptions.color
      );

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        return { ...state, items: updatedItems };
      } else {
        // Add new item
        const newItem: CartItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          quantity,
          color: selectedOptions.color,
          size: selectedOptions.size,
          category: product.category,
          brand: product.brand,
          inStock: product.inStock,
          selectedOptions
        };
        return { ...state, items: [...state.items, newItem] };
      }
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'ADD_TO_WAITLIST': {
      const { product, selectedOptions } = action.payload;
      
      // Check if item with same options already exists in waitlist
      const existingItem = state.waitlist.find(item => 
        item.id === product.id && 
        item.selectedOptions.size === selectedOptions.size &&
        item.selectedOptions.color === selectedOptions.color
      );

      if (existingItem) {
        return state; // Don't add duplicate
      }

      const newWaitlistItem: WaitlistItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        brand: product.brand,
        selectedOptions,
        dateAdded: new Date().toISOString()
      };

      return { ...state, waitlist: [...state.waitlist, newWaitlistItem] };
    }

    case 'REMOVE_FROM_WAITLIST':
      return {
        ...state,
        waitlist: state.waitlist.filter((_, index) => index !== action.payload)
      };

    case 'LOAD_FROM_STORAGE':
      return { ...action.payload, isLoading: false };

    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addToCart: (product: Product, quantity: number, selectedOptions: { size?: string; color?: string }) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  addToWaitlist: (product: Product, selectedOptions: { size?: string; color?: string }) => void;
  removeFromWaitlist: (index: number) => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
  isInCart: (productId: number, selectedOptions: { size?: string; color?: string }) => boolean;
  isInWaitlist: (productId: number, selectedOptions: { size?: string; color?: string }) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const loadCartFromStorage = () => {
      try {
        const savedCart = localStorage.getItem('nexustore-cart');
        const savedWaitlist = localStorage.getItem('nexustore-waitlist');
        
        if (savedCart || savedWaitlist) {
          const cartData = savedCart ? JSON.parse(savedCart) : [];
          const waitlistData = savedWaitlist ? JSON.parse(savedWaitlist) : [];
          
          dispatch({
            type: 'LOAD_FROM_STORAGE',
            payload: {
              items: cartData,
              waitlist: waitlistData,
              isLoading: false
            }
          });
        } else {
          dispatch({ type: 'SET_LOADING', payload: false });
        }
      } catch (error) {
        console.error('Error loading cart from storage:', error);
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    loadCartFromStorage();
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (!state.isLoading) {
      try {
        localStorage.setItem('nexustore-cart', JSON.stringify(state.items));
        localStorage.setItem('nexustore-waitlist', JSON.stringify(state.waitlist));
      } catch (error) {
        console.error('Error saving cart to storage:', error);
      }
    }
  }, [state.items, state.waitlist, state.isLoading]);

  const addToCart = (product: Product, quantity: number, selectedOptions: { size?: string; color?: string }) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity, selectedOptions } });
  };

  const removeFromCart = (index: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const addToWaitlist = (product: Product, selectedOptions: { size?: string; color?: string }) => {
    dispatch({ type: 'ADD_TO_WAITLIST', payload: { product, selectedOptions } });
  };

  const removeFromWaitlist = (index: number) => {
    dispatch({ type: 'REMOVE_FROM_WAITLIST', payload: index });
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  const isInCart = (productId: number, selectedOptions: { size?: string; color?: string }) => {
    return state.items.some(item => 
      item.id === productId && 
      item.selectedOptions.size === selectedOptions.size &&
      item.selectedOptions.color === selectedOptions.color
    );
  };

  const isInWaitlist = (productId: number, selectedOptions: { size?: string; color?: string }) => {
    return state.waitlist.some(item => 
      item.id === productId && 
      item.selectedOptions.size === selectedOptions.size &&
      item.selectedOptions.color === selectedOptions.color
    );
  };

  const value: CartContextType = {
    state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addToWaitlist,
    removeFromWaitlist,
    getCartTotal,
    getCartItemsCount,
    isInCart,
    isInWaitlist,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
