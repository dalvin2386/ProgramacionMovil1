import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  nombre: string;
  ocupacion: string;
}

export default function UserHeader({ nombre, ocupacion }: Props) {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{nombre}</Text>
      <Text style={{ fontSize: 16, color: 'gray' }}>{ocupacion}</Text>
    </View>
  );
}
