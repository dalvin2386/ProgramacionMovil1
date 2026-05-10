import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { StudentContext } from '../context/StudentContext';

export default function StudentList() {
  const { students } = useContext(StudentContext);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Lista de Estudiantes</Text>
      <ScrollView>
        {students.map((item) => (
          <View style={styles.item} key={item.id}>
            <Text>{item.id}. {item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, padding: 20, marginTop: 20 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#aaa' },
});
