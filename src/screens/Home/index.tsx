import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerInput}>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.botao} />
      </View>
    </View>
  );
}