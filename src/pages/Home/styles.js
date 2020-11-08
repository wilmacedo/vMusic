import styled from 'styled-components/native';

import { Platform } from 'react-native';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? 30 : 0}px;
`;

export const HeaderContainer = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px 0 30px;
`;

export const Logo = styled.Text`
  align-items: center;
  font-family: 'regular';
  color: #fff;
  font-size: 35px;
`;
