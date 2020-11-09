import { useNavigation } from '@react-navigation/native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';


export default function Home() {
  const navegacao = useNavigation();

  function irCronometro() {
    navegacao.navigate('Cronometro');
  }
  const image = {
    uri:
      'https://midias.agazeta.com.br/2020/03/17/coronavirus-academias-ficarao-fechadas-em-linhares--209864-article.jpg',
  };

  return (
    <View>
      <ImageBackground source={image} imageStyle={{opacity:0.3}} style={styles.image}>
        <View style={styles.titulo}>
          <FontAwesome name="dumbbell" size={40} color={'#7FDCF8FF'}>
            <Text> Pró ACAD </Text>
            <FontAwesome
              name="dumbbell"
              size={40}
              color={'#7FDCF8FF'}></FontAwesome>
          </FontAwesome>
        </View>
        {/* Através de função anonima */}
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navegacao.navigate('Treinos')}>
          <FontAwesome name="fire-alt" size={30} color={'white'}>
            <Text> Treinos</Text>
          </FontAwesome>
        </TouchableOpacity>

        {/* chamando funcao externa */}
        <TouchableOpacity style={styles.botao} onPress={irCronometro}>
          <FontAwesome name="stopwatch-20" size={30} color={'white'}>
            <Text> Cronômetro </Text>
          </FontAwesome>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    backgroundColor: '#5191FDFF',

    alignItems: 'center',
    padding: 20,
    margin: 3,
    borderBottomWidth: 3,
    borderBottomColor: '#7FDCF8FF',
  },
  botao: {
    alignItems: 'center',
    backgroundColor: '#FF7A9AFF',
    padding: 20,
    margin: 20,
  },
  image: {
    width: '100%',
    height: '100%',

  },
});
