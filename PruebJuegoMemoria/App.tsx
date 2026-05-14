import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IniciarJuego from "./components/BotonInicio";
import VistaCartas from "./page/VistaCartas";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Juego de Memoria</Text>
      <StatusBar style="auto" />
   
        <IniciarJuego />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
