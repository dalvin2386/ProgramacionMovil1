import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { Transaccion } from '../models/Transaccion'
import { useContextBanco } from '../providers/ProviderBanco'

export default function Historicos() {

  const {transacciones} = useContextBanco();

  useEffect(() => {
    console.log(transacciones);
  }, [transacciones]);

  return (
    <View>
      <Text>Total de Transacciones: {transacciones.length}</Text>

      <Text>Lista de Transacciones</Text>
      <FlatList 
      data={transacciones} 
      renderItem={({item}) => <Text>{item.tipo} de L.{item.monto} - {item.fecha}</Text>} 
      keyExtractor={(item: Transaccion) => item.id.toString()}
      />
    </View>
  )
}
