import styled from 'styled-components/native';

export const CardContainer = styled.View`
  margin-top: 30px;
`;

export const CardItem = styled.ImageBackground`
  height: 200px;
  width: 310px;
  align-items: center;
`;

export const CardText = styled.View`
  color: white;
  position: absolute;
  bottom: 20px;
  align-items: center;
`;

export const CardTitle = styled.Text`
  color: white;
  font-family: 'regular';
  font-size: 30px;
  text-transform: uppercase;
`;

export const CardSubtitle = styled.Text`
  color: white;
  font-family: 'light';
  letter-spacing: 3px;
  text-transform: uppercase;
`;