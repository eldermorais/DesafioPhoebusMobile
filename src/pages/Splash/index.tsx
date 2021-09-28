import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, SectionImage, SectionText } from './styles';
import SplashLogo from '../../assets/MarvelLogo.png';
export default function Splash() {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate('Home' as never, {} as never);
  }, 3000);
  return (
    <Container>
      <SectionImage source={SplashLogo} resizeMode="contain"/>
      <SectionText>Store</SectionText>
    </Container>
  );
}
