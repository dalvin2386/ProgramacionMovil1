import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../page/Inicio';
import Transferencias from '../page/Transferencias';
import Historicos from '../page/Historicos';

export default function Navegacion() {

  const tab = createBottomTabNavigator();
  return (

      <NavigationContainer>
        <tab.Navigator>

          <tab.Screen name="Inicio" component={Inicio} />
          <tab.Screen name="Transferencias" component={Transferencias} />
          <tab.Screen name="Historico" component={Historicos} />
        </tab.Navigator>

      </NavigationContainer>

  )
}
