import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

import Home from './src/pages/Home';
import Treinos from './src/pages/Treinos';
import Cronometro from './src/pages/Cronometro';
  
const navegacao = createStackNavigator()
export default function App() {
   

   return (

     <NavigationContainer>
        {/* Define os 'menus' que vao existir. */}
      <navegacao.Navigator>
         <navegacao.Screen name="Home" component={Home} />
         <navegacao.Screen name="Treinos" component={Treinos} />
         <navegacao.Screen name="Cronometro" component={Cronometro} />
         </navegacao.Navigator> 
     </NavigationContainer>
   );

 }






