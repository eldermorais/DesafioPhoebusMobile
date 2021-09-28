import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding-top: 24px;

`;

export const ImageComic = styled.Image`
  width: 100%;
  height: 300px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #000;
  margin: 8px 18px;
  `;

export const Price = styled.Text`
  margin:  8px 0;
  font-size: 36px;
  font-weight: 400;
  color: #000;
`;

export const Description = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 300;
  margin: 8px 0;
  margin-bottom: 50px;
`;

export const ContainerQtd = styled.View`
  flex-direction: row;
  height: 50px;
  margin-bottom: 8px;
  justify-content: center;
`;

export const ButtonQtd = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: gray;
  margin: 0 5px;
`;

export const InputQtd = styled.TextInput`
  width: 50px;
  background-color: #dadada;
  font-size: 24px;
  padding: 0 10px;
`;

