import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Comic } from "../../pages/Home";
import { Container, ImageComic, Price, Title } from './styles';

interface CardHomeProps {
  data:Comic
  onClick:()=>void
  markeds:(number | undefined)[]
}

function CardHome({ data, onClick, markeds }: CardHomeProps) {

  return (
    <Container onPress={onClick}>
      <ImageComic source={{uri:`${data.thumbnail.path}.${data.thumbnail.extension}`}} resizeMode="contain" />
      <Title>{data.title}</Title>
      <Price>{`R$ ${data.prices[0].price}`}</Price>
      <View style={{backgroundColor:"#ff1b21", width:"100%", alignItems:"center"}}>

      {markeds.includes(data.id) ?
        <Text style={{color:"#fff"}}><Icon name="star"/>Rara</Text> :

        <Text style={{color:"#fff"}}>Comum</Text>
      }
      </View>
    </Container>
  );
};

export default CardHome;
