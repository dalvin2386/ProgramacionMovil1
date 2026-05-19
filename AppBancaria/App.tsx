import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navegacion from './src/components/Navegacion';
import ProviderBanco from './src/providers/ProviderBanco';

export default function App() {
  return (
     <ProviderBanco>
        <Navegacion/>
     </ProviderBanco>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
