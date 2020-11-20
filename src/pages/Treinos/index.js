  /*   case 'A':
        treino = [{ exec: "Flexão", repeticao: "4x 10" },
          { exec: "Supino Maq", repeticao: "5x 12-10-8-6-4" },
          { exec: "Crucifixo Maq", repeticao: "6x 12" },
          { exec: "Voador", repeticao: "4x 10" },
          { exec: "Fly Declinado", repeticao: "4x 10" },
          { exec: "ABS Maq", repeticao: "4x 20" },
          { exec: "ABS Infra", repeticao: "4x 20" },
          { exec: "Prancha", repeticao: "4x 2min"},
        ]
        break;
        case 'B':
          treino = [{ exec: "Puxada Aberta", repeticao: "5x 12-10-8-6-4" },
          { exec: "Remada Curvada Pronada", repeticao: "5x 12-10-8-6-4" },
          { exec: "Remada Aberta (chão)", repeticao: "5x 12" },
          { exec: "Serrote", repeticao: "4x 10" },
          { exec: "Pulldown", repeticao: "6x 12" },
          { exec: "Encolhimento c/ barra", repeticao: "5x 20" },
          { exec: "Encolhimento c/ halter", repeticao: "5x 20" },
          { exec: "Extensão/Flexão de Punho", repeticao: "5x 20"},
        ]
        break;
        case 'C':
          treino = [{ exec: "Agachamento Maq", repeticao: "5x 5" },
          { exec: "Mesa Flexora", repeticao: "5x 8" },
          { exec: "Cadeira Extensora", repeticao: "4x 8" },
          { exec: "Perdigueiro", repeticao: "3x 20s" },
          { exec: "Superman", repeticao: "3x 20s" },
          { exec: "Stiff", repeticao: "4x 12" }]
      break;
        case 'D':
          treino = [{ exec: "Desenv. Militar c/ barra ", repeticao: "5x 5" },
          { exec: "Desenv. Arnold", repeticao: "4x 8" },
          { exec: "Elevacão Frontal", repeticao: "5x 12" },
          { exec: "Evevação Lateral", repeticao: "5x 12" },
            { exec: "Remada Alta Maq", repeticao: "5x12" },
            { exec: "Crucifixo Inverso", repeticao: "5x12" },
          { exec: "Panturrilha", repeticao: "5x 20" }]
        break;
        case 'E':
          treino = [{ exec: "Rosca Direta", repeticao: "4x 12-10-8-6" },
          { exec: "Triceps Testa na maq", repeticao: "4x 12-10-8-6" },
          { exec: "Rosca Alternada", repeticao: "4x 8" },
          { exec: "Triceps Corda", repeticao: "4x 8" },
            { exec: "Rosca Concentrada", repeticao: "4x 10" },
            { exec: "Rosca Martelo", repeticao: "6x 12" },
  { exec: "Triceps Coice", repeticao: "6x 12" }]
          /*/
import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Datatable, DataTable} from 'react-native-paper';
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
  {treino: 'flexao', repeticao: '5x 12-10-8-6-4'},
  {treino: 'supino', repeticao: '5'},
  {treino: 'Abdominal', repeticao: '5'},
];
const B = [{treino: 'Extensora', repeticao: '2x 12'}];
const C = [{treino: 'Flexão Punho', repeticao: '2x 50'}];
const D = [{treino: 'flexao', repeticao: '2'}];
const E = [{treino: 'flexao', repeticao: '200'}];

const [treino, setTreino] = useState(A);

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
              <Text style={style.headerTable}>
                <FontAwesome name="edit" size={25}></FontAwesome>Repetição
              </Text>
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
            </DataTable.Row>
          ))}
        </DataTable>
      </View>
      <View style={style.foot}></View>
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

  foot: {backgroundColor: '#FFF', flex: 0.8},
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
});
