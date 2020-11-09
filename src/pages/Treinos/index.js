import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Datatable, DataTable} from 'react-native-paper';


export default function Treino() {
const [opcao, setOpcao] = useState();

const opcoes = [{key: 'A'}, {key: 'B'}, {key: 'C'}, {key: 'D'}, {key: 'E'}];

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
  alert(opcao);
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
            <TouchableOpacity
              style={style.botao}
              onPress={() => definirTreino(item.key)}>
              <Text style={style.fonteBotao}>{item.key}</Text>
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
    backgroundColor: '#CB9898FF',
    flex: 1,
    flexDirection: 'row',
  },

  content: {backgroundColor: '#62A0C8FF', flex: 6},
  treinos: {backgroundColor: '#FF002BFF'},

  foot: {backgroundColor: '#FFF', flex: 0.8},
  botao: {
    backgroundColor: '#8777B4',
    borderWidth: 1,
    width: 90,
    height: 90,
    alignItems: 'center',
    padding: 8,
  },
  fonteBotao: {color: '#F7F4F4FF', fontWeight: 'bold', fontSize: 25},
  headerTable: {backgroundColor: 'red', fontSize: 25, color: 'white'},

  exercicioText: {fontSize: 28, color: 'white'},
  repeticaoText: {fontSize: 23, color: 'white'},
});
