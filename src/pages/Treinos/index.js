
import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Datatable, DataTable, TextInput} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export default function Treino() {
const [opcao, setOpcao] = useState();

const opcoes = [
  {key: 'A', n: 'dice-one'},
  {key: 'B', n: 'dice-two'},
  {key: 'C', n: 'dice-three'},
  {key: 'D', n: 'dice-four'},
  {key: 'E', n: 'dice-five'},
];

const A = [
  {treino: 'Flexão', repeticao: '4x 10'},
  {treino: 'Supino Maq', repeticao: '5x 12-10-8-6-4'},
  {treino: 'Crucifixo Maq', repeticao: '6x 12'},
  {treino: 'Voador', repeticao: '4x 10'},
  {treino: 'Fly Declinado', repeticao: '4x 10'},
  {treino: 'ABS Maq', repeticao: '4x 20'},
  {treino: 'ABS Infra', repeticao: '4x 20'},
  {treino: 'Prancha', repeticao: '4x 2min'},
];
const B = [
  {treino: 'Puxada Aberta', repeticao: '5x 12-10-8-6-4'},
  {treino: 'Remada Curvada Pronada', repeticao: '5x 12-10-8-6-4'},
  {treino: 'Remada Aberta (chão)', repeticao: '5x 12'},
  {treino: 'Serrote', repeticao: '4x 10'},
  {treino: 'Pulldown', repeticao: '6x 12'},
  {treino: 'Encolhimento c/ barra', repeticao: '5x 20'},
  {treino: 'Encolhimento c/ halter', repeticao: '5x 20'},
  {treino: 'Extensão/Flexão de Punho', repeticao: '5x 20'},
];
const C = [
  {treino: 'Agachamento Maq', repeticao: '5x 5'},
  {treino: 'Mesa Flexora', repeticao: '5x 8'},
  {treino: 'Cadeira Extensora', repeticao: '4x 8'},
  {treino: 'Perdigueiro', repeticao: '3x 20s'},
  {treino: 'Superman', repeticao: '3x 20s'},
  {treino: 'Stiff', repeticao: '4x 12'},
];
const D = [
  {treino: 'Desenv. Militar c/ barra ', repeticao: '5x 5'},
  {treino: 'Desenv. Arnold', repeticao: '4x 8'},
  {treino: 'Elevacão Frontal', repeticao: '5x 12'},
  {treino: 'Evevação Lateral', repeticao: '5x 12'},
  {treino: 'Remada Alta Maq', repeticao: '5x12'},
  {treino: 'Crucifixo Inverso', repeticao: '5x12'},
  {treino: 'Panturrilha', repeticao: '5x 20'},
];
const E = [
  {treino: 'Rosca Direta', repeticao: '4x 12-10-8-6'},
  {treino: 'Triceps Testa na maq', repeticao: '4x 12-10-8-6'},
  {treino: 'Rosca Alternada', repeticao: '4x 8'},
  {treino: 'Triceps Corda', repeticao: '4x 8'},
  {treino: 'Rosca Concentrada', repeticao: '4x 10'},
  {treino: 'Rosca Martelo', repeticao: '6x 12'},
  {treino: 'Triceps Coice', repeticao: '6x 12'},
];

  const [treino, setTreino] = useState(A);
  const [visivel, setVisivel] = useState(false);

function definirTreino(opcao) {
  alert("Treino '" + opcao + "' ativado.");
  switch (opcao) {
    case 'A':
      setTreino(A);
      break;
    case 'B':
      setTreino(B);
      break;
    case 'C':
      setTreino(C);
      break;
    case 'D':
      setTreino(D);
      break;
    case 'E':
      setTreino(E);
      break;
    default:
      setTreino(A);
      break;
  }
}

  function controlaModal(props) {
    setVisivel(true);
  }
  
  function alterarValor(props,repeticao) {
    alert('valor'+props+' repeticao '+repeticao+'  ')
  }

  return (
    <View style={style.body}>
      <View style={style.header}>
        <FlatList
          horizontal
          data={opcoes}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => definirTreino(item.key)}>
              <Text style={style.fonteBotao}>
                <FontAwesome name={item.n} size={45}>
                  {item.key}
                </FontAwesome>
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={style.content}>
        <DataTable>
          <DataTable.Header style={style.headerTable}>
            <DataTable.Title>
              <Text style={style.headerTable}>Exercício</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={style.headerTable}>Repetição</Text>
            </DataTable.Title>
          </DataTable.Header>

          {treino.map((treino, key) => (
            <DataTable.Row>
              <DataTable.Cell>
                <Text style={style.exercicioText}>{treino.treino}</Text>
              </DataTable.Cell>

              <DataTable.Cell numeric>
                <Text style={style.repeticaoText}>{treino.repeticao}</Text>
              </DataTable.Cell>

              <Modal animationType="slide" transparent={true} visible={visivel}>
                <View style={style.modalView}>
                  <TouchableOpacity onPress={() => setVisivel(false)}>
                    <Text>Fechar Modal</Text>
                  </TouchableOpacity>

                </View>
              </Modal>
            </DataTable.Row>
          ))}
        </DataTable>
      </View>
      <View style={style.foot}>
        <TouchableOpacity onPress={() => controlaModal()}>
          <FontAwesome name="edit" size={40} color="#FF7A9AFF">
            
          </FontAwesome>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  body: {flex: 1},
  header: {
    backgroundColor: '#FF7A9AFF',
    flex: 1,
    flexDirection: 'row',
  },

  content: {backgroundColor: '#62A0C8FF', flex: 6},
  treinos: {backgroundColor: '#FF7A9AFF'},

  foot: {
    backgroundColor: '#FFF',
    flex: 0.5,
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#53777AFF',

    width: 95,
    height: 75,
    alignItems: 'center',
    margin: 1,
  },
  fonteBotao: {
    color: '#F7F4F4FF',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 35,
  },
  headerTable: {backgroundColor: '#FF7A9AFF', fontSize: 25, color: 'white'},

  exercicioText: {fontSize: 28, color: 'white'},
  repeticaoText: {fontSize: 23, color: 'white'},
  modalView: {
    margin: 20,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  insideModal: {
    flex: 1,
    flexDirection: 'column',
  },
  modalInput: {

    width: 100,
    height: 40,
  },
});
