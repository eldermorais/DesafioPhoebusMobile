import React, { useEffect, useState } from 'react';
import LogoHeader from '../../assets/MarvelComics.jpg';
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CardHome from '../../components/CardHome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, HeaderContainer, HeaderText, Logo, Title, TouchableFilter } from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';


export interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comic[];
}

export interface Comic {
  id: number;
  digitalId: number
  title:string
  issueNumber: number
  variantDescription: string
  description: string
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: []
  resourceURI: string
  urls: [
    {
      type: string
      url: string
    }
  ],
  series: {
    resourceURI: string
    name: string
  },
  variants: [
    {
      resourceURI: string
      name: string
    }
  ],
  collections: string[],
  collectedIssues: string[],
  dates: [
    {
      type: string
      date: string
    }
  ],
  prices: [
    {
      type: string
      price: number
    }
  ],
  thumbnail: {
    path: string
    extension: string
  },
  images: [
    {
      path: string
      extension: string
    }
  ],
  creators: {
    available: number
    collectionURI: string
    items: [
      {
        resourceURI: string
        name: string
        role: string
      }
    ],
    returned: number
  },
  characters: {
    available: number
    collectionURI: string
    items: string[],
    returned: number
  },
  stories: {
    available: number
    collectionURI: string
    items: [
      {
        resourceURI: string
        name: string
        type: string
      }
    ],
    returned: number
  },
  events: {
    available: number
    collectionURI: string
    items: string[],
    returned: number
  }
}

function Home() {

  const [comics, setComics] = useState<Comic[]>([])
  const [page, setpage] = useState(1)
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation();

  const apikey = '6dccb4225f5fc86fb2fdb88c13fc04f0&hash=b84aa685a8d78ea4f0c68c6e4207ae94';
  const limit = 20;
  const offset = page*limit
  const ts = '1626465261626'

  const arrIndex = []
    function markComics(){
      const marked = []
      const rarity = []
      const comicsCopy = [...comics]

      function randomInteger(min:number, max:number){
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      const total = Math.floor(comicsCopy.length * 0.12)

      /* Sempre que a pagina é carregada percorre-se o array de quadrinhos da
      Api, seleciona aleatoriamente os os quadrinhos raros e coloca somente o
      id no array marked e posteriormente na sessionStorage*/

      for (let i = 1; i <= total; i++) {
        const randomIndex = randomInteger(0, comicsCopy.length - 1)
        const comic = comicsCopy.splice(randomIndex, 1).pop()
        arrIndex.push(randomIndex)
        rarity.push(comic)
        marked.push(comic?.id)
        AsyncStorage.setItem('@Marvel-Rarity', JSON.stringify(marked))

      }

      return [...marked]
    }

    const markeds = markComics();



  useEffect(() => {
    loadComics()
  },[])

  const loadComics = async () => {
    if (loading) return;
    setLoading(true)

    const response = await api.get(`comics?limit=${limit}&offset=${offset}&ts=${ts}&apikey=${apikey}`)
    const newsComics = response.data.data.results

    setComics([...comics, ...newsComics])
    setpage(page +1)
    setLoading(false)
  }

  const renderItem:ListRenderItem<Comic> = ({ item }) =>
    <CardHome
      data={item}
      markeds={markeds}
      onClick={()=> navigation.navigate({name:'Details' as never, params:item as never})} />


  return (
    <Container>
      <HeaderContainer>
        <Logo source={LogoHeader} resizeMode="contain" />
        <HeaderText>
          <Title>Quadrinhos</Title>
          <TouchableFilter>
            <Icon name="filter-list" size={24} color="#ff1b21" />
          </TouchableFilter>
        </HeaderText>
      </HeaderContainer>
      <FlatList
      columnWrapperStyle={{flex:1, justifyContent:'space-around'}}
      numColumns={2}
      data={comics}
      renderItem= {renderItem}
      keyExtractor={(item:Comic)  => String(item.id)}
      onEndReached={loadComics}
      onEndReachedThreshold={0.5}
      />
    </Container>
  );
};

export default Home;

