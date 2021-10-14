import React from 'react';

import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { CartStateData, useCart } from '../../contexts/CartPovider';

import { ButtonQtd, Container, ContainerInfo, ContainerQty, Content, ImageCard, LabelQty, Price, Title } from './styles';

interface CardCartProps {
  data:CartStateData
}

function CardCart({data}:CardCartProps) {

  const {increment, decrement, remove} = useCart()

  const removeComic = (id:number) => {
    remove(id)
    Toast.show({type:'success',text1:'O item foi removido do carrinho'})
  }

  return (
    <Container>
      <Content>
      <ImageCard source={{uri:`${data.thumbnail.path}.${data.thumbnail.extension}`}} resizeMode="contain" />
      <ContainerInfo>
        <Title>{data.title}</Title>
        <Price>{`R$ ${data.prices[0].price}`}</Price>

        <ContainerQty>
          <ButtonQtd style={{borderRadius:5}} onPress={()=> decrement(data.id)}>
            <Text style={{fontSize:18, color:'#000'}}> - </Text>
          </ButtonQtd>
          <LabelQty>{data.quantity}</LabelQty>
          <ButtonQtd style={{borderRadius:5}} onPress={()=> increment(data.id)}>
            <Text style={{fontSize:20, color:'#000'}}> + </Text>
          </ButtonQtd>
        </ContainerQty>
      </ContainerInfo>
      <TouchableOpacity
      style={{marginTop:8}}
      onPress={() =>{}}
      >
        <Icon size={20} name="close" onPress={()=> removeComic(data.id)} />
      </TouchableOpacity>
      </Content>

    </Container>
  );
};

export default CardCart;
