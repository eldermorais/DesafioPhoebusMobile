
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { CartStateData, useCart } from '../../contexts/CartPovider';
import { Comic } from '../Home';
import {
  Container,
  ImageComic,
  Title,
  Price,
  Description,
  ContainerQtd,
  ButtonQtd,
  InputQtd } from './styles';


function Details() {
    const [quantity, setQuantity] = useState('0')
    const {params} = useRoute()
    const [comic, setComic] = useState<Comic>(params as Comic)
    const {findCart, addToCart} = useCart()


    useEffect(()=>{
      findCart()
    },[])

    const subtract = () => {
      setQuantity(String(Number(quantity)-1))
    }
    const add = () => {
      setQuantity(String(Number(quantity)+1))
    }

    function handleAddToCart(comic: Comic ) : void {

      addToCart(comic, Number(quantity));
      Toast.show({type: 'success',
        text1: 'Item Adicionado ao Carrinho',
      })
    }


  return (
    <Container>
      <Title>{comic?.title}</Title>
      <ImageComic source={{uri:`${comic.thumbnail.path}.${comic.thumbnail.extension}`}} resizeMode="contain"/>
      <View style={{marginHorizontal:16}}>
        <Price>{`R$ ${comic.prices[0].price}`}</Price>
        <ContainerQtd>

          <ButtonQtd style={{borderRadius:5}} onPress={()=> subtract()}>
            <Text style={{fontSize:24, color:'#000'}}> - </Text>
          </ButtonQtd>

          <InputQtd style={{borderRadius:5}} keyboardType='numeric' value={quantity} onChangeText={setQuantity}/>
          <ButtonQtd style={{borderRadius:5}} onPress={()=> add()}>
            <Text style={{fontSize:24, color:'#000'}}> + </Text>
          </ButtonQtd>

        </ContainerQtd>

        <Button title="Adicionar ao Carrinho" color="#198754" onPress={()=> handleAddToCart(comic)}/>
        <Text style={{fontSize:24, color:'#000', marginHorizontal:16, marginTop:24}}>
          Descrição
        </Text>

        <Description>{comic.description}</Description>
      </View>
    </Container>
  );
}
export default Details;
