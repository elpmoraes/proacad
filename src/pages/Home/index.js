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
          {/* Através de função anonima */}
      <TouchableOpacity style={styles.botao} onPress={() => navegacao.navigate('Treinos')}>
        <Text>Treinos</Text>
          </TouchableOpacity>
                
    {/* chamando funcao externa */}
          <TouchableOpacity style={styles.botao} onPress={irCronometro}>
        <Text>Cronometro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    alignItems: 'center',
    backgroundColor: '#F0E68C',
    padding: 10,
  },
});
