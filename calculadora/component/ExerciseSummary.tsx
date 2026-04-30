import { Text, View, StyleSheet } from 'react-native';
import { ExerciseResult } from '../modelos/calculateExercises';

interface Props {
  result: ExerciseResult;
}

export default function ExerciseSummary({ result }: Props) {
  return (
    <View style={styles.caja}>
      <Text style={styles.titulo}>Resumen de Ejercicio</Text>
      <Text>Días: {result.periodDays}</Text>
      <Text>Días entrenados: {result.trainingDays}</Text>
      <Text>Objetivo: {result.target}h</Text>
      <Text>Promedio: {result.averageHours.toFixed(2)}h</Text>
      <Text>¿Alcanzado?: {result.targetReached ? "Sí" : "No"}</Text>
      <Text>Calificación: {result.rating}/3</Text>
      <Text style={styles.explicacion}>{result.explanation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  caja: { padding: 20, backgroundColor: '#f9f9f9', borderRadius: 10 },
  titulo: { fontWeight: 'bold', fontSize: 18, marginBottom: 10 },
  explicacion: { marginTop: 10, fontStyle: 'italic', color: '#555' },
});
