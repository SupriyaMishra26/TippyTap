// import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react';
// import { toast } from 'sonner';

// export type CartItem = {
//   id: string | number;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
//   variant?: string;
// };

// export type WishlistItem = {
//   id: string | number;
//   name: string;
//   price: number;
//   image: string;
// };

// export type User = {
//   id: string;
//   name: string;
//   email: string;
// };

// type Ctx = {
//   // Cart
//   cart: CartItem[];
//   addToCart: (item: Omit<CartItem, 'quantity'>, qty?: number) => void;
//   removeFromCart: (id: CartItem['id']) => void;
//   updateQty: (id: CartItem['id'], qty: number) => void;
//   clearCart: () => void;
//   cartCount: number;
//   cartTotal: number;

//   // Wishlist
//   wishlist: WishlistItem[];
//   toggleWishlist: (item: WishlistItem) => void;
//   inWishlist: (id: WishlistItem['id']) => boolean;

//   // Auth
//   user: User | null;
//   login: (email: string, password: string) => Promise<void>;
//   signup: (name: string, email: string, password: string) => Promise<void>;
//   logout: () => void;

//   // UI
//   authOpen: boolean;
//   setAuthOpen: (v: boolean) => void;
//   authMode: 'login' | 'signup';
//   setAuthMode: (m: 'login' | 'signup') => void;
// };

// const AppCtx = createContext<Ctx | null>(null);
// const LS = {
//   cart: 'ttn_cart',
//   wishlist: 'ttn_wishlist',
//   user: 'ttn_user',
// };

// function read<T>(key: string, fallback: T): T {
//   try {
//     const raw = localStorage.getItem(key);
//     return raw ? (JSON.parse(raw) as T) : fallback;
//   } catch {
//     return fallback;
//   }
// }

// export function AppProvider({ children }: { children: ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>(() => read<CartItem[]>(LS.cart, []));
//   const [wishlist, setWishlist] = useState<WishlistItem[]>(() => read<WishlistItem[]>(LS.wishlist, []));
//   const [user, setUser] = useState<User | null>(() => read<User | null>(LS.user, null));
//   const [authOpen, setAuthOpen] = useState(false);
//   const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

//   useEffect(() => { localStorage.setItem(LS.cart, JSON.stringify(cart)); }, [cart]);
//   useEffect(() => { localStorage.setItem(LS.wishlist, JSON.stringify(wishlist)); }, [wishlist]);
//   useEffect(() => {
//     if (user) localStorage.setItem(LS.user, JSON.stringify(user));
//     else localStorage.removeItem(LS.user);
//   }, [user]);

//   const addToCart: Ctx['addToCart'] = (item, qty = 1) => {
//     setCart((prev) => {
//       const idx = prev.findIndex((p) => p.id === item.id && p.variant === item.variant);
//       if (idx >= 0) {
//         const next = [...prev];
//         next[idx] = { ...next[idx], quantity: next[idx].quantity + qty };
//         return next;
//       }
//       return [...prev, { ...item, quantity: qty }];
//     });
//     toast.success(`${item.name} added to cart`);
//   };

//   const removeFromCart: Ctx['removeFromCart'] = (id) =>
//     setCart((p) => p.filter((i) => i.id !== id));

//   const updateQty: Ctx['updateQty'] = (id, qty) =>
//     setCart((p) => p.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, qty) } : i)));

//   const clearCart = () => setCart([]);

//   const toggleWishlist: Ctx['toggleWishlist'] = (item) => {
//     setWishlist((prev) => {
//       const exists = prev.some((p) => p.id === item.id);
//       if (exists) {
//         toast(`${item.name} removed from wishlist`);
//         return prev.filter((p) => p.id !== item.id);
//       }
//       toast.success(`${item.name} added to wishlist`);
//       return [...prev, item];
//     });
//   };
//   const inWishlist: Ctx['inWishlist'] = (id) => wishlist.some((p) => p.id === id);

//   const login: Ctx['login'] = async (email) => {
//     if (!email) throw new Error('Email required');
//     const u: User = { id: crypto.randomUUID(), name: email.split('@')[0], email };
//     setUser(u);
//     setAuthOpen(false);
//     toast.success(`Welcome back, ${u.name}!`);
//   };
//   const signup: Ctx['signup'] = async (name, email) => {
//     if (!email || !name) throw new Error('Required');
//     const u: User = { id: crypto.randomUUID(), name, email };
//     setUser(u);
//     setAuthOpen(false);
//     toast.success(`Welcome, ${name}!`);
//   };
//   const logout = () => { setUser(null); toast('Signed out'); };

//   const cartCount = cart.reduce((n, i) => n + i.quantity, 0);
//   const cartTotal = cart.reduce((n, i) => n + i.price * i.quantity, 0);

//   const value = useMemo<Ctx>(() => ({
//     cart, addToCart, removeFromCart, updateQty, clearCart, cartCount, cartTotal,
//     wishlist, toggleWishlist, inWishlist,
//     user, login, signup, logout,
//     authOpen, setAuthOpen, authMode, setAuthMode,
//   }), [cart, wishlist, user, authOpen, authMode]);

//   return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
// }

// export function useApp() {
//   const ctx = useContext(AppCtx);
//   if (!ctx) throw new Error('useApp must be used within AppProvider');
//   return ctx;
// }
import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react';
import { toast } from 'sonner';

export type CartItem = {
  id: string | number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
};

export type WishlistItem = {
  id: string | number;
  name: string;
  price: number;
  image: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

type Ctx = {
  // Cart
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, qty?: number) => void;
  removeFromCart: (id: CartItem['id']) => void;
  updateQty: (id: CartItem['id'], qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;

  // Wishlist
  wishlist: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  inWishlist: (id: WishlistItem['id']) => boolean;

  // Auth
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;

  // UI
  authOpen: boolean;
  setAuthOpen: (v: boolean) => void;
  authMode: 'login' | 'signup';
  setAuthMode: (m: 'login' | 'signup') => void;
};

const AppCtx = createContext<Ctx | null>(null);
const LS = {
  cart: 'ttn_cart',
  wishlist: 'ttn_wishlist',
  user: 'ttn_user',
  users: 'ttn_users',
};

type StoredUser = User & { password: string };

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => read<CartItem[]>(LS.cart, []));
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => read<WishlistItem[]>(LS.wishlist, []));
  const [user, setUser] = useState<User | null>(() => read<User | null>(LS.user, null));
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  useEffect(() => { localStorage.setItem(LS.cart, JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem(LS.wishlist, JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => {
    if (user) localStorage.setItem(LS.user, JSON.stringify(user));
    else localStorage.removeItem(LS.user);
  }, [user]);

  const addToCart: Ctx['addToCart'] = (item, qty = 1) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id && p.variant === item.variant);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + qty };
        return next;
      }
      return [...prev, { ...item, quantity: qty }];
    });
    toast.success(`${item.name} added to cart`);
  };

  const removeFromCart: Ctx['removeFromCart'] = (id) =>
    setCart((p) => p.filter((i) => i.id !== id));

  const updateQty: Ctx['updateQty'] = (id, qty) =>
    setCart((p) => p.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, qty) } : i)));

  const clearCart = () => setCart([]);

  const toggleWishlist: Ctx['toggleWishlist'] = (item) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === item.id);
      if (exists) {
        toast(`${item.name} removed from wishlist`);
        return prev.filter((p) => p.id !== item.id);
      }
      toast.success(`${item.name} added to wishlist`);
      return [...prev, item];
    });
  };
  const inWishlist: Ctx['inWishlist'] = (id) => wishlist.some((p) => p.id === id);

  const login: Ctx['login'] = async (email, password) => {
    const e = email.trim().toLowerCase();
    if (!e || !password) throw new Error('Email and password are required');
    if (!EMAIL_RE.test(e)) throw new Error('Please enter a valid email address');
    const users = read<StoredUser[]>(LS.users, []);
    const found = users.find((u) => u.email.toLowerCase() === e);
    if (!found) throw new Error('No account found with this email. Please sign up first.');
    if (found.password !== password) throw new Error('Incorrect password. Please try again.');
    const u: User = { id: found.id, name: found.name, email: found.email };
    setUser(u);
    setAuthOpen(false);
    toast.success(`Welcome back, ${u.name}!`);
  };
  const signup: Ctx['signup'] = async (name, email, password) => {
    const n = name.trim();
    const e = email.trim().toLowerCase();
    if (!n) throw new Error('Name is required');
    if (n.length < 2) throw new Error('Name must be at least 2 characters');
    if (!e) throw new Error('Email is required');
    if (!EMAIL_RE.test(e)) throw new Error('Please enter a valid email address');
    if (!password) throw new Error('Password is required');
    if (password.length < 6) throw new Error('Password must be at least 6 characters');
    const users = read<StoredUser[]>(LS.users, []);
    if (users.some((u) => u.email.toLowerCase() === e)) {
      throw new Error('An account with this email already exists. Please sign in.');
    }
    const stored: StoredUser = { id: crypto.randomUUID(), name: n, email: e, password };
    localStorage.setItem(LS.users, JSON.stringify([...users, stored]));
    const u: User = { id: stored.id, name: stored.name, email: stored.email };
    setUser(u);
    setAuthOpen(false);
    toast.success(`Welcome, ${n}!`);
  };
  const logout = () => { setUser(null); toast('Signed out'); };

  const cartCount = cart.reduce((n, i) => n + i.quantity, 0);
  const cartTotal = cart.reduce((n, i) => n + i.price * i.quantity, 0);

  const value = useMemo<Ctx>(() => ({
    cart, addToCart, removeFromCart, updateQty, clearCart, cartCount, cartTotal,
    wishlist, toggleWishlist, inWishlist,
    user, login, signup, logout,
    authOpen, setAuthOpen, authMode, setAuthMode,
  }), [cart, wishlist, user, authOpen, authMode]);

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

export function useApp() {
  const ctx = useContext(AppCtx);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
