import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Router from './routes/routes';
import CartProvider from './contexts/CartPovider';
import Toast from 'react-native-toast-message';

const App = () => {

  return (
      <CartProvider>
        <StatusBar barStyle="light-content" translucent backgroundColor="#e4151c" />
        <Router />
        <Toast position="bottom" ref={(ref) => Toast.setRef(ref)} />
      </CartProvider>
  );
};

export default App;
