import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Router from './routes/routes';
import CartProvider from './contexts/CartPovider';

const App = () => {

  return (
      <CartProvider>
        <StatusBar barStyle="light-content" translucent backgroundColor="#e4151c" />
        <Router />
      </CartProvider>
  );
};

export default App;
