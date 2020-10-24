import React, { Component } from 'react';
import {View, Button, Text, StyleSheet, Modal, Image  } from "react-native";



class Cron extends Component{

    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
            timer: null


        };

        this.iniciarCronometro = this.iniciarCronometro.bind(this);
        this.zerarCronometro = this.zerarCronometro.bind(this);

    }


    iniciarCronometro() {
       this.timer =  setInterval(() => {
            
            this.setState({contador: this.state.contador + 0.1})

        }, 100)

        
    }

    zerarCronometro() {
        clearInterval(this.timer);
        this.setState({contador: 0})
        this.timer = null;

    }

    render() {
        
        return (
        <View style={estilos.telaContador}>
                    
                    <Image
      source={require('./cronometro.png')}
      style={estilos.cronometro}
      />
                <Text style={estilos.contador}>{this.state.contador.toFixed(1)}</Text>
 
                <View style={estilos.botoes}>
                <Button title="Iniciar" onPress={this.iniciarCronometro}/>
                <Button title="Parar"onPress={this.zerarCronometro}/>
                <Button title="Fechar" onPress={this.props.closeModal}/>
                </View>
          
            </View>
        )




    }
}

const estilos = StyleSheet.create({
        cronometro:{    marginTop:-50
    },
    botoes:{ flexDirection:'row', marginBottom:-50},
        contador:{ fontSize: 50, marginTop:-100},
        telaContador: {backgroundColor: 'red', height: '100%', alignItems:'center',justifyContent:'center' }
    
    
    }



)


export default Cron;