import { CartItem } from '@/contexts/CartContext';

export interface OrderItem {
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
  selectedOptions: {
    size?: string;
    color?: string;
  };
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  promoCode?: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  estimatedDelivery?: string;
  trackingNumber?: string;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: {
    type: 'credit_card' | 'debit_card' | 'paypal' | 'cash_on_delivery';
    last4?: string;
    brand?: string;
  };
}

const ORDERS_STORAGE_KEY = 'nexustore-orders';

// Get all orders from localStorage
export const getAllOrders = (): Order[] => {
  try {
    const orders = localStorage.getItem(ORDERS_STORAGE_KEY);
    return orders ? JSON.parse(orders) : [];
  } catch (error) {
    console.error('Error reading orders from storage:', error);
    return [];
  }
};

// Get orders for a specific user
export const getUserOrders = (userId: string): Order[] => {
  const allOrders = getAllOrders();
  return allOrders.filter(order => order.userId === userId);
};

// Save orders to localStorage
export const saveOrders = (orders: Order[]): void => {
  try {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  } catch (error) {
    console.error('Error saving orders to storage:', error);
  }
};

// Create a new order from cart items
export const createOrder = (
  userId: string,
  cartItems: CartItem[],
  orderDetails: {
    subtotal: number;
    tax: number;
    shipping: number;
    discount: number;
    promoCode?: string;
    shippingAddress: Order['shippingAddress'];
    paymentMethod: Order['paymentMethod'];
  }
): Order => {
  const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  const orderItems: OrderItem[] = cartItems.map(item => ({
    id: item.id,
    name: item.name,
    price: item.price,
    originalPrice: item.originalPrice,
    image: item.image,
    quantity: item.quantity,
    color: item.color,
    size: item.size,
    category: item.category,
    brand: item.brand,
    selectedOptions: item.selectedOptions
  }));

  const total = orderDetails.subtotal + orderDetails.tax + orderDetails.shipping - orderDetails.discount;
  
  // Generate estimated delivery date (7-14 days from now)
  const deliveryDays = Math.floor(Math.random() * 8) + 7; // 7-14 days
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + deliveryDays);

  const newOrder: Order = {
    id: orderId,
    userId,
    items: orderItems,
    total,
    subtotal: orderDetails.subtotal,
    tax: orderDetails.tax,
    shipping: orderDetails.shipping,
    discount: orderDetails.discount,
    promoCode: orderDetails.promoCode,
    status: 'pending',
    orderDate: new Date().toISOString(),
    estimatedDelivery: estimatedDelivery.toISOString(),
    trackingNumber: `TRK${Date.now()}`,
    shippingAddress: orderDetails.shippingAddress,
    paymentMethod: orderDetails.paymentMethod
  };

  // Save order
  const allOrders = getAllOrders();
  allOrders.push(newOrder);
  saveOrders(allOrders);

  return newOrder;
};

// Update order status
export const updateOrderStatus = (orderId: string, status: Order['status']): boolean => {
  try {
    const allOrders = getAllOrders();
    const orderIndex = allOrders.findIndex(order => order.id === orderId);
    
    if (orderIndex === -1) {
      return false;
    }

    allOrders[orderIndex].status = status;
    saveOrders(allOrders);
    return true;
  } catch (error) {
    console.error('Error updating order status:', error);
    return false;
  }
};

// Get order by ID
export const getOrderById = (orderId: string): Order | null => {
  const allOrders = getAllOrders();
  return allOrders.find(order => order.id === orderId) || null;
};

// Cancel order
export const cancelOrder = (orderId: string): boolean => {
  return updateOrderStatus(orderId, 'cancelled');
};

// Clean up invalid or mock orders from storage
export const cleanupInvalidOrders = (): void => {
  try {
    const allOrders = getAllOrders();

    // Filter out any invalid orders (orders without proper structure)
    const validOrders = allOrders.filter(order => {
      return order.id &&
             order.userId &&
             order.orderDate &&
             order.items &&
             order.items.length > 0 &&
             order.shippingAddress &&
             order.paymentMethod &&
             order.status &&
             typeof order.total === 'number';
    });

    // Only save if there were invalid orders removed
    if (validOrders.length !== allOrders.length) {
      saveOrders(validOrders);
      console.log(`Cleaned up ${allOrders.length - validOrders.length} invalid orders`);
    }
  } catch (error) {
    console.error('Error cleaning up orders:', error);
  }
};

// Remove all orders for a specific user (for testing purposes)
export const clearUserOrders = (userId: string): void => {
  try {
    const allOrders = getAllOrders();
    const filteredOrders = allOrders.filter(order => order.userId !== userId);
    saveOrders(filteredOrders);
  } catch (error) {
    console.error('Error clearing user orders:', error);
  }
};

// Clear all orders from storage (for development/testing)
export const clearAllOrders = (): void => {
  try {
    localStorage.removeItem(ORDERS_STORAGE_KEY);
    console.log('All orders cleared from storage');
  } catch (error) {
    console.error('Error clearing all orders:', error);
  }
};

// Development helper: Make cleanup functions available globally
if (typeof window !== 'undefined') {
  (window as any).clearAllOrders = clearAllOrders;
  (window as any).cleanupInvalidOrders = cleanupInvalidOrders;
  (window as any).getAllOrders = getAllOrders;
}
