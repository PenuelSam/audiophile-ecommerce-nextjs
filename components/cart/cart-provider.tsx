'use client';

import { createContext, useCallback, useContext, useMemo, useReducer, type ReactNode } from 'react';
import type { CartItem, Product } from '@/types';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = { items: [] };

type CartAction =
  | { type: 'ADD'; product: Product; quantity: number }
  | { type: 'REMOVE'; slug: string }
  | { type: 'CLEAR' }
  | { type: 'SET_QUANTITY'; slug: string; quantity: number };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find((item) => item.product.slug === action.product.slug);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.slug === action.product.slug
              ? { ...item, quantity: item.quantity + action.quantity }
              : item
          )
        };
      }
      return { items: [...state.items, { product: action.product, quantity: action.quantity }] };
    }
    case 'REMOVE': {
      return { items: state.items.filter((item) => item.product.slug !== action.slug) };
    }
    case 'SET_QUANTITY': {
      return {
        items: state.items.map((item) =>
          item.product.slug === action.slug ? { ...item, quantity: Math.max(1, action.quantity) } : item
        )
      };
    }
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}

interface CartContextValue extends CartState {
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  setQuantity: (slug: string, quantity: number) => void;
  total: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = useCallback((product: Product, quantity = 1) => {
    dispatch({ type: 'ADD', product, quantity });
  }, []);

  const removeFromCart = useCallback((slug: string) => {
    dispatch({ type: 'REMOVE', slug });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    dispatch({ type: 'SET_QUANTITY', slug, quantity });
  }, []);

  const total = useMemo(
    () => state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [state.items]
  );

  const value = useMemo(
    () => ({ ...state, addToCart, removeFromCart, clearCart, setQuantity, total }),
    [state, addToCart, removeFromCart, clearCart, setQuantity, total]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
