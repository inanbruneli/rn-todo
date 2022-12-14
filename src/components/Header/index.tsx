import React from 'react';
import { Image, View } from 'react-native';
import Logo from '../../../assets/Logo.png';
import { styles } from './styles';


export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={Logo}></Image>
    </View>
  );
}