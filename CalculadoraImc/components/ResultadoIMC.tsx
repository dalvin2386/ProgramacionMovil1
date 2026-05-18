import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { AppContext } from "../context/AppContext";

export default function ResultadoIMC() {
  const { imc, clasificacion } = useContext(AppContext);

  return (
    <View style={styles.resultado}>
      <Text style={styles.imcTexto}>IMC: {imc}</Text>
      {clasificacion !== "" && (
        <Text style={styles.clasificacion}>{clasificacion}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  resultado: {
    marginTop: 20,
    alignItems: "center",
  },
  imcTexto: {
    fontSize: 28,
    fontWeight: "bold",
  },
  clasificacion: {
    fontSize: 25,
    color: "#4CAF50",
    marginTop: 4,
    fontWeight: "bold",
  },
});
