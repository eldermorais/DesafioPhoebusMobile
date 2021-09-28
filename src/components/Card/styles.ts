import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  width: 44%;
  margin-bottom: 16px ;
  /* flex: 1; */
  `;

export const ImageComic = styled.Image`
  height: 200px;
  width: 100%;
  background-color: #e6e6e6;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`;

export const Price = styled.Text`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #717171;
`;
