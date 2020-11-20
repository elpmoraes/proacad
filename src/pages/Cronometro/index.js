import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';



export default function Cronometro() {
  const [counter, setCounter] = useState(60);
  const [isStarted, setIsStarted] = useState(0);
  useEffect(() => {
    const timer =
      isStarted == 1 &&
      counter > 0 &&
      setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [isStarted, counter]);

  function setInicial(props) {
    alert('Status: ' + props);
    // setCounter(props);
  }
  function iniciar() {
    setIsStarted(1);
  }
  function pausar() {
    setIsStarted(0);
  }
  function zerar() {
    setIsStarted(0);
    setCounter(60);
  }

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.titulo}>
          Contad
          <FontAwesome name="clock" color={'black'} size={45}></FontAwesome>r
        </Text>
      </View>
      <View style={styles.corpo}>
        <Text style={styles.contador}>{counter}</Text>
        <Text>Comecou: {isStarted}</Text>
      </View>
      <View style={styles.footer}>
        <TextInput
          style={styles.inputCount}
          placeholder="Personalize os segundos"
          onChangeText={(ex) => setCounter(ex)}
        />
        <View style={styles.botoes}>
          <TouchableOpacity onPress={() => pausar()}>
            <FontAwesome
              name="pause-circle"
              color={'white'}
              size={85}></FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => iniciar()}>
            <FontAwesome
              name="play-circle"
              color={'white'}
              size={85}></FontAwesome>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => zerar()}>
            <FontAwesome
              name="stop-circle"
              color={'white'}
              size={85}></FontAwesome>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  titulo: {
    fontSize: 70,
    alignSelf: 'center',
    color: '#FFF',
  },
  contador: {
    fontSize: 150,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#62A0C8FF',
  },
  page: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#FF7A9AFF',
    flex: 2,
    margin: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  corpo: {
    backgroundColor: '#FFF',
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: '#62A0C8FF',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    flex: 3,
  },
  botoes: {
    backgroundColor: '#62A0C8FF',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnStart: {
    backgroundColor: '#62A0C8FF',
    width: '50%',
    height: 40,
    margin: 5,
    borderWidth: 1,
  },
  inputCount: {
    backgroundColor: '#F7F4F4FF',
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: '#F7F4F4FF',
    width: '70%',
  },
});

