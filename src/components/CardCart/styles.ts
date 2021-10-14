import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

`;

export const Content = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  padding: 0 16px;
  margin-bottom: 16px;
  border-bottom-color: #717171;
  border-bottom-width: 0.5px;
`;

export const ImageCard = styled.Image`
  height: 200px;
  width: 25%;

`;

export const Title = styled.Text`
  margin-top: 20px;
  margin-bottom: 14px;
  color: #000;
  font-size: 20px;
`;

export const Price = styled.Text`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #717171;
`;

export const ContainerInfo = styled.View`
  align-items: flex-start;
  margin-left: 8px;
  width: 70%;
`;

export const ContainerQty = styled.View`
  margin-top: 18px;
  flex-direction: row;
`;

export const LabelQty = styled.Text`
  margin: 0 24px;
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonQtd = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  background-color: #e6e6e6;
`;

