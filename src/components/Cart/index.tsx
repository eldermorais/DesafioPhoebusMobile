import React from 'react'
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCart } from '../../contexts/CartPovider';


function Cart() {
  const {cart} = useCart()
  return (
      <TouchableOpacity style={{marginRight:16}}>
        <Text style={{color:"#fff"}}>{cart.length}</Text>
        <Icon
      name="shopping-cart" size={26} color="#fff"/>
      </TouchableOpacity>
  );
};

export default Cart;
