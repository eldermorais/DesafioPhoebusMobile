import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCart } from '../../contexts/CartPovider';


function CartComponent() {
  const {comics} = useCart()
  const navigation = useNavigation();

  return (
      <TouchableOpacity style={{marginRight:16}} onPress={()=>{navigation.navigate({name:'Cart'} as never)}}>
        <Text style={{color:"#fff"}}>{comics.length}</Text>
        <Icon
      name="shopping-cart" size={26} color="#fff"/>
      </TouchableOpacity>
  );
};

export default CartComponent;
