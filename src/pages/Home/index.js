import React from 'react';
import { StatusBar } from 'react-native';

import { Background, HeaderContainer, SafeArea, Logo } from './styles';

import { Ionicons, Feather } from '@expo/vector-icons';

import TopCharts from '../../components/TopCharts';

const Home = () => {
  return (
    <Background
      source={require('../../../assets/images/bg.png')}
    >
      <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
      <SafeArea
        style={{ flex: 1 }}
      >
        <HeaderContainer>
          <Ionicons name="md-notifications" size={24} color="white" />
          <Logo>vMusic</Logo>
          <Feather name="menu" size={24} color="white" />
        </HeaderContainer>
        <TopCharts />
      </SafeArea>
    </Background>
  );
}

export default Home;