import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { JuegoProvider } from "./providers/JuegoProvider";
import IniciarJuego from "./components/BotonInicio";

function PantallaInicio({ onIniciar }: { onIniciar: () => void }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Juego de Memoria</Text>
      <IniciarJuego onPress={onIniciar} />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  const [mostrarCartas, setMostrarCartas] = useState(false);

  if (mostrarCartas) {
    return (
      <JuegoProvider>
        <VistaCartas onVolver={() => setMostrarCartas(false)} />
      </JuegoProvider>
    );
  }

  return (
    <JuegoProvider>
      <PantallaInicio onIniciar={() => setMostrarCartas(true)} />
    </JuegoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
