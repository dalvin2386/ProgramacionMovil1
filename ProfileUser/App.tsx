import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import UserProfile from './components/UserProfile';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', margin: 20, paddingTop: 30 }}>Usuarios</Text>

        <UserProfile
          nombre="Dalvin Soriano"
          edad={39}
          ciudad="Choluteca"
          ocupacion="Ingeniero de Sistemas Computacionales "
        />

        <UserProfile
          nombre="Susan Soriano"
          edad={23}
          ciudad="Tegucigalpa"
          ocupacion="Ingeniera en Agronomía"
        />

        <UserProfile
          nombre="Heisel Banegas"
          edad={22}
          ciudad="San Pedro Sula"
          ocupacion="Estudiante de Ingeniería en Electrónica"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
