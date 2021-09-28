import React from "react";
import { Comic } from "../../pages/Home";
import { Container, ImageComic, Price, Title } from './styles';

interface CardProps {
  data:Comic
  onClick:()=>void
}

function Card({ data, onClick }: CardProps) {
  return (
    <Container onPress={onClick}>
      <ImageComic source={{uri:`${data.thumbnail.path}.${data.thumbnail.extension}`}} resizeMode="contain" />
      <Title>{data.title}</Title>
      <Price>{`R$ ${data.prices[0].price}`}</Price>
    </Container>
  );
};

export default Card;
