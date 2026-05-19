import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useContextBanco } from '../providers/ProviderBanco'
import BotonTransferir from '../components/BotonTransferir'

export default function Transferencias() {

  const [cuenta, setCuenta] = useState('');
  const [destinatario, setDestinatario] = useState('');
  const [monto, setMonto] = useState('');

  const {saldo, transferir} = useContextBanco();

  function realizarTransferencia() {
    let montoNumerico = parseInt(monto);
    if (montoNumerico <= saldo) {
      transferir(montoNumerico);
      setCuenta('');
      setDestinatario('');
      setMonto('');
      alert('Transferencia exitosa');
    } else {
      alert('No cuenta con el saldo para completar la transacción');
    }
  }

  return (
    <View>
      <Text>Transferencia</Text>
       <Text>Bienvenido a nuestro banco DS</Text>
      <TextInput placeholder='Número de Cuenta' value={cuenta} onChangeText={setCuenta} />
      <TextInput placeholder='Nombre del Destinatario' value={destinatario} onChangeText={setDestinatario} />
      <TextInput placeholder='Monto a Transferir' value={monto} onChangeText={setMonto} />
      <BotonTransferir onPress={() => realizarTransferencia()} />
    </View>
  )
}
