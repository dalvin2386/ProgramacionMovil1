import { StyleSheet, View } from 'react-native';
import { calculateExercises } from './modelos/calculateExercises';
import ExerciseSummary from './component/ExerciseSummary';

export default function App() {
  const hours: number[] = [2, 0, 2, 0, 0, 3, 1];
  const target = 2;
  const result = calculateExercises(hours, target);

  return (
    <View style={styles.container}>
      <ExerciseSummary result={result} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
