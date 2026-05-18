import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import BotonIncremento from "./components/BotonIncremento";
import BotonDecremento from "./components/BotonDecremento";
import ResultadoIMC from "./components/ResultadoIMC";
import AppProvider from "./providers/AppProvider";
import { AppContext } from "./context/AppContext";

function Contenido() {
  const { peso, setPeso, altura, setAltura } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <StatusBar style="auto" />

      <View style={styles.card}>
        <Text style={styles.label}>Peso (kg)</Text>
        <Text style={styles.valor}>{peso}</Text>
        <View style={styles.botones}>
          <BotonIncremento onPress={() => setPeso(peso + 1)} />
          <BotonDecremento onPress={() => setPeso(peso - 1)} />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Altura (cm)</Text>
        <Text style={styles.valor}>{altura}</Text>
        <View style={styles.botones}>
          <BotonIncremento onPress={() => setAltura(altura + 1)} />
          <BotonDecremento onPress={() => setAltura(altura - 1)} />
        </View>
      </View>

      <ResultadoIMC />
    </View>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Contenido />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 20,
    color: "#666",
    marginBottom: 4,
  },
  valor: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 12,
  },
  botones: {
    flexDirection: "row",
    gap: 16,
  },
});
