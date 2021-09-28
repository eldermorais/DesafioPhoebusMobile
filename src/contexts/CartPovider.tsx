import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

interface CartContextData{
  cart:number[];
  setCart: React.Dispatch<SetStateAction<number[]>>;
  findCart:()=>void
}

interface CartProviderProps{
  children:ReactNode
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider = ({children}:CartProviderProps ) => {
  const [cart, setCart] = useState<number[]>([]);

  const findCart = async () => {
    const result = await AsyncStorage.getItem('@MarvelStore_Cart');
    if (result !== null) setCart(JSON.parse(result));
  };

  useEffect(() => {
    findCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, findCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
