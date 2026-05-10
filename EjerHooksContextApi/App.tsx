import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { StudentProvider } from './src/providers/StudentProvider';
import StudentList from './src/components/StudentList';
import AddStudentForm from './src/components/AddStudentForm';

export default function App() {
  return (
    <StudentProvider>
      <View style={styles.container}>
        <StudentList />
        <AddStudentForm />
        <StatusBar style="auto" />
      </View>
    </StudentProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
});
