import { View, Text, StyleSheet } from "react-native";
import { useJuego } from "../context/JuegoContext";

export default function HistorialPartidas() {
  const { vecesJugadas, partidas } = useJuego();

  if (vecesJugadas === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Historial de partidas</Text>
      <Text>Veces jugadas: {vecesJugadas}</Text>
      {partidas.map((p) => (
        <Text key={p.id}>#{p.id} - {p.fecha} - {p.resultado} ({p.paresEncontrados} pares)</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  texto: {
    fontSize: 14,
    color: "#555",
  },
});
