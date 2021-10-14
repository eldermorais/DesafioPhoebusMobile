import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Details from '../pages/Details';
import CartComponent from '../components/CartComponent';
import Cart from '../pages/Cart';

function Router() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={ screenOptions }
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle:{backgroundColor:'#ff1b21',},
  headerTintColor:"#fff",
  headerRight: () => (
  <CartComponent />
  )
}


export default Router;
