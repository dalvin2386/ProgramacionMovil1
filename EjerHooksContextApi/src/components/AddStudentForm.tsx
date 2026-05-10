import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StudentContext } from '../context/StudentContext';

export default function AddStudentForm() {
  const [nombre, setNombre] = useState('');
  const { addStudent } = useContext(StudentContext);

  const agregarEstudiante = () => {
    if (nombre === '') return;
    addStudent(nombre);
    setNombre('');
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Agregar Estudiante</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe un nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <Button title="Agregar" onPress={agregarEstudiante} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { padding: 20, borderTopWidth: 1, borderTopColor: '#aaa' },
  titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#aaa', padding: 8, fontSize: 16, marginBottom: 10 },
});
