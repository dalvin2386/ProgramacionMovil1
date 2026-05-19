import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import { Transaccion } from '../models/Transaccion'
import { useContextBanco } from '../providers/ProviderBanco'

export default function Inicio() {

  const {saldo, transacciones, depositar} = useContextBanco();

  return (
    <View>
      <Text>Bienvenido a tu Banca</Text>
      <Text>Saldo Actual: L.{saldo}</Text>
      <Button title='Depositar Saldo' onPress={() => depositar()} />

      <Text>Transacciones</Text>
      <FlatList 
      data={transacciones} 
      renderItem={({item}) => <Text>{item.tipo} de L.{item.monto} - {item.fecha}</Text>} 
      keyExtractor={(item: Transaccion) => item.id.toString()}
      />
    </View>
  )
}
