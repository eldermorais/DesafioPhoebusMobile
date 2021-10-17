import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Comic } from '../pages/Home';

interface CartContextData {
  findCart: () => void;
  comics: CartStateData[];
  addToCart(item: Comic, comicQuantity: number): void;
  increment(id: number): void;
  decrement(id: number): void;
  remove(id: number): void;
  cart: CartStateData[];
}

interface CartProviderProps {
  children: ReactNode;
}

export interface CartStateData {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: [];
  resourceURI: string;
  quantity: number;
  urls: [
    {
      type: string;
      url: string;
    }
  ];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: [
    {
      resourceURI: string;
      name: string;
    }
  ];
  collections: string[];
  collectedIssues: string[];
  dates: [
    {
      type: string;
      date: string;
    }
  ];
  prices: [
    {
      type: string;
      price: number;
    }
  ];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: [
    {
      path: string;
      extension: string;
    }
  ];
  creators: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
        role: string;
      }
    ];
    returned: number;
  };
  characters: {
    available: number;
    collectionURI: string;
    items: string[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
        type: string;
      }
    ];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: string[];
    returned: number;
  };
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartStateData[]>([]);

  const findCart = async () => {
    const result = await AsyncStorage.getItem('@MarvelStore_Cart');

    if (result !== null) setCart([...JSON.parse(result)]);
  };

  useEffect(() => {
    findCart();
  }, []);

  const addToCart = useCallback(
    async (comic, comicQuantity) => {
      const comicExists = cart.find((p) => p.id === comic.id);

      const quantity = comicExists
        ? comicExists.quantity + comicQuantity
        : comicQuantity;

      if (comicExists) {
        setCart(
          cart.map((p) =>
            p.id === comic.id ? { ...comic, quantity: quantity } : p
          )
        );
      } else {
        setCart([...cart, { ...comic, quantity: quantity }]);
      }
    },
    [cart, setCart]
  );

  AsyncStorage.setItem('@MarvelStore_Cart', JSON.stringify([...cart]));

  const increment = useCallback(
    async (id) => {
      const newCart = cart.map((comic) =>
        comic.id === id ? { ...comic, quantity: comic.quantity + 1 } : comic
      );
      setCart(newCart);

      AsyncStorage.setItem('@MarvelStore_Cart', JSON.stringify(newCart));
    },
    [cart]
  );

  const decrement = useCallback(
    async (id) => {
      const newCart = cart.map((comic) =>
        comic.id === id && comic.quantity > 0
          ? { ...comic, quantity: comic.quantity - 1 }
          : comic
      );
      setCart(newCart);

      await AsyncStorage.setItem('@MarvelStore_Cart', JSON.stringify(newCart));
    },
    [cart]
  );

  const remove = useCallback(
    async (id) => {
      const newCart = cart;
      const removeItem = newCart.findIndex((i) => i.id === id);
      newCart.splice(removeItem, 1);
      setCart([...newCart]);

      await AsyncStorage.setItem('@MarvelStore_Cart', JSON.stringify(cart));
      findCart();
    },
    [cart]
  );
  const comics = cart;

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, comics, findCart, remove, cart }),
    [comics, addToCart, increment, decrement, findCart, remove, cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
