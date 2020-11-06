import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';



export default function Home() {

    const navegacao = useNavigation();

    function irCronometro() {
        navegacao.navigate('Cronometro')
    
    
    }
    
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navegacao.navigate('Treinos')}>
        <Text>Treinos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.botao} onPress={irCronometro}>
        <Text>Cronometro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
