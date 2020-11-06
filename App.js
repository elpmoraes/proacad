import React, { Component } from 'react';
import { View, Text , Button, StyleSheet, Modal} from "react-native";
import Cron from "./Cron.js";
import { NavigationContainer } from '@react-navigation/native';

class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      descTreino: 'Teste',
      treinos: [{ exec: "Desenv. Militar c/ barra ", repeticao: "5x 5" },
      { exec: "Desenv. Arnold", repeticao: "4x 8" },
      { exec: "Elevacão Frontal", repeticao: "5x 12" },
      { exec: "Evevação Lateral", repeticao: "5x 12" },
        { exec: "Remada Alta Maq", repeticao: "5x12" },
        { exec: "Crucifixo Inverso", repeticao: "5x12" },
      { exec: "Panturrilha", repeticao: "5x 20" }]
    };

    this.selecionarTreino = this.selecionarTreino.bind(this);
    this.setModal = this.setModal.bind(this);

  }

  selecionarTreino = (botao) => {

    let treino = '';
    switch (botao) {
      case 'A':
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
          break;
      default:
        break;
    }
    
    this.setState({
      descTreino: 'Treino ' + botao,
      treinos: treino
    });

  
  }
  
setModal(visible) {
    this.setState({ modalVisible: visible });
}


  
  render() {
    return (

      <View style={{ flex: 1}}>
        
        <View style={styles.header}>
          <Text style={styles.textoPrincipal}>Escolha o treino  </Text>
          <Button style={styles.botao} title="A" onPress={() => this.selecionarTreino('A')} />
          <Button style={styles.botao} title="B" onPress={() => this.selecionarTreino('B')} />
          <Button style={styles.botao} title="C" onPress={() => this.selecionarTreino('C')} />
          <Button style={styles.botao} title="D" onPress={() => this.selecionarTreino('D')} />
          <Button style={styles.botao} title="E" onPress={() => this.selecionarTreino('E')} />  
          <Button style={styles.botao} title="º" onPress={() => this.setModal(true)} />  
        </View>
        
        <View style={styles.superbody}>
          <View style={styles.body}>
     
          {this.state.treinos.map(( item, key)=>(
            <Text key={key} style={styles.textoTreino}> { item.exec} ° <View style={styles.body2}><Text style={styles.textoRepeticao}>{item.repeticao}</Text></View></Text>)
              )} 



      <Modal visible={this.state.modalVisible} animationType='fade'>

          <Cron closeModal={() => this.setModal(false)} />
     
      </Modal>
      
      


          </View>

            </View>
      
        

      </View>
      
      )
    }
}

const styles = StyleSheet.create(
  {
    textoPrincipal: {fontSize: 25,fontWeight:'bold'},

    header: { backgroundColor: 'powderblue', flexDirection: 'row', margin: 5, padding: 10 },
    superbody: { flex: 1, flexDirection:'row', backgroundColor: 'red', margin: 1, padding: 1,},
    body: { flex: 6, backgroundColor: '#00aeef', margin: 0, padding: 0, justifyContent:'space-around' },
    body2: {backgroundColor: '#FFF', margin: 0, padding: 3, },
    textoTreino: { fontSize: 23, color: '#FFF', fontWeight: 'bold', },
    textoRepeticao: {fontSize: 19, color: 'red', fontWeight:'500' },


  }


)


class Treinos extends Component{
  render() {
    return ({




    })
  }


}


  
  export default App;