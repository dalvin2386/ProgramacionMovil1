import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Vista } from '../models/Vista';
import { Transaccion } from '../models/Transaccion';
import { contextBanco } from '../context/ContextBanco';

export default function ProviderBanco(props: Vista) {

  const [saldo, setSaldo] = useState(10000);
  const [transacciones, setTransacciones] = useState<Transaccion[]>([
    { id: 1, tipo: 'Depósito', monto: 500, fecha: '2026-05-01' },
    { id: 2, tipo: 'Retiro', monto: 200, fecha: '2026-05-02' },
    { id: 3, tipo: 'Depósito', monto: 1000, fecha: '2026-05-03' },
  ]);

  function depositar() {
    let nuevaTransaccion: Transaccion = {
      id: transacciones.length + 1,
      tipo: 'Depósito',
      monto: 500,
      fecha: new Date().toISOString().split('T')[0]
    };
    setSaldo(saldo + 500);
    setTransacciones([...transacciones, nuevaTransaccion]);
  }

  function transferir(monto: number) {
    let nuevaTransaccion: Transaccion = {
      id: transacciones.length + 1,
      tipo: 'Retiro',
      monto: monto,
      fecha: new Date().toISOString().split('T')[0]
    };
    setSaldo(saldo - monto);
    setTransacciones([...transacciones, nuevaTransaccion]);
  }

  return (
        <contextBanco.Provider value={{saldo, transacciones, depositar, transferir}}>
            {props.children}
        </contextBanco.Provider>
    
  )
}

export function useContextBanco() {
    return useContext(contextBanco);
}
