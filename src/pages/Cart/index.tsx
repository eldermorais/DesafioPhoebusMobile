import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ListRenderItem, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CardCart from '../../components/CardCart';
import { CartStateData, useCart } from '../../contexts/CartPovider';
import {
  ContainerList ,
  ContainerFooter,
  InputCode,
  ContainerInput,
  ButtonApllyCode,
  ContainerTotal,
  TextTotal,
  ContainerActions,
  ButtonOrder
} from './styles';


function Cart() {
  const [price, setprice] = useState(0)
  const [inputCoupon, setInputCoupon] = useState('')
  const {comics} = useCart()
  const [rarityComics, setRarityComics] = useState<number[]>([])
  const cupomComum = 'COMUM'
  const cupomRaro = 'RARO'

  const findStorageRarity = async () => {
    const storageRarity = await AsyncStorage.getItem('@Marvel-Rarity')
    if(storageRarity !== null) setRarityComics(JSON.parse(storageRarity))

  }

  useEffect(()=>{
    findStorageRarity()
  },[])

  const totalPrice = () => {
    const newComics = []
    for(const comic of comics){
      if(inputCoupon.toUpperCase() === cupomRaro){
        newComics.push((comic.prices[0].price - (comic.prices[0].price * 0.25) ) * comic.quantity)
        Toast.show({type: 'success',
        text1: 'Cupom aplicado',
      })
      }else if(inputCoupon.toUpperCase() === cupomComum){
        if(rarityComics.includes(comic.id)){
          newComics.push(comic.prices[0].price * comic.quantity)
          Toast.show({type: 'success',
          text1: 'Cupom aplicado',
        })
        }else{
          newComics.push((comic.prices[0].price - (comic.prices[0].price * 0.1) ) * comic.quantity)
          Toast.show({type: 'success',
          text1: 'Cupom aplicado',
        })

        }
      }else{
        newComics.push(comic.prices[0].price * comic.quantity)
        if (inputCoupon !== ''){
          Toast.show({type: 'error',
          text1: 'Cupom Inválido',
        })
      }
      }
    }
   setprice(newComics.reduce((soma, atual) => soma + atual, 0))

  }

  useEffect(() => {
    totalPrice()

  }, [comics])

  const renderItem:ListRenderItem<CartStateData> = ({ item }) => (
    <CardCart data={item} />
)


  return (
    <>
      <ContainerList>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={comics}
          renderItem= {renderItem}
          keyExtractor={(item:CartStateData)  => String(item.id)}
        />
      </ContainerList>
      <ContainerFooter>
        <ContainerInput>
          <Icon name="local-offer" size={24} color="red"/>
          <InputCode placeholder="Insira o cupom promocional" onChangeText={setInputCoupon}/>
          <ButtonApllyCode onPress={() => totalPrice()}>
          <Icon name="navigate-next" size={24} color="#fff"/>
          </ButtonApllyCode>
        </ContainerInput>
        <ContainerTotal>
          <TextTotal>Preço total</TextTotal>
          <TextTotal>{`R$ ${price.toFixed(2)}`}</TextTotal>
        </ContainerTotal>
        <ContainerActions>
          <ButtonOrder>
            <Text style={{color:"#fff",fontSize:16}}>Finalizar compra</Text>
          </ButtonOrder>
        </ContainerActions>
      </ContainerFooter>
    </>
  );
};

export default Cart;
