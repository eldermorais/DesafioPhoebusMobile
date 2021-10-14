import styled from 'styled-components/native';

export const ContainerList = styled.View`
  height: 70%;

`;

export const ContainerFooter = styled.View``;

export const ContainerTotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
`;

export const TextTotal = styled.Text`
  font-size: 18px;
  color: #000;
`;

export const ContainerActions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  `;
export const ButtonOrder = styled.TouchableOpacity`
margin-top: 16px;
  width: 50%;
  background-color: #000;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 8px;

`;

export const ContainerInput = styled.View`
  width: 90%;
  height: 50px;
  background-color:  #e6e6e6;
  margin: 16px auto;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`;

export const InputCode = styled.TextInput`
  margin: 0 12px;
  font-size: 16px;
  flex: 1;

`;

export const ButtonApllyCode = styled.TouchableOpacity`
  background-color: #ff1b21;
  border-radius: 50px;
`;



