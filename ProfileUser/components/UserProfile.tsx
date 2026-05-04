import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserHeader from './UserHeader';
import UserDetails from './UserDetails';
import { Usuario } from '../models/Usuario';

export default function UserProfile(props: Usuario) {
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    setNombre(props.nombre);
  }, []);

  return (
    <View style={{ backgroundColor: '#eee', padding: 15, margin: 10, borderRadius: 10 }}>
      <UserHeader nombre={nombre} ocupacion={props.ocupacion} />
      <UserDetails edad={props.edad} ciudad={props.ciudad} />
    </View>
  );
}
