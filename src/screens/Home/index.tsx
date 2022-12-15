import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';

import Header from '../../components/Header';
import { styles } from './styles';


export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerInput}>
        <TextInput style={styles.input} placeholder='Digite uma nova tarefa' placeholderTextColor='#808080' />
        <TouchableOpacity style={styles.botao}>
          <AntDesign name='pluscircleo' color='#F2F2F2' size={17} />
        </TouchableOpacity >
      </View>
      <View style={styles.containerStatus}>
        <View style={styles.itemStatus}>
          <Text style={[styles.textStatus, styles.criadas]}>Criadas</Text>
          <Text style={styles.numeroStatus}>0</Text>
        </View>
        <View style={styles.itemStatus}>
          <Text style={[styles.textStatus, styles.concluidas]}>Concluidas</Text>
          <View style={styles.containerNumero}>
            <Text style={styles.numeroStatus}>0</Text>
          </View>
        </View>
      </View>
    </View>
  );
}