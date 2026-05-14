import React from "react";
import { View, Text, Button } from "react-native";

interface Props {
  onPress: () => void;
}

const IniciarJuego = ({ onPress }: Props) => {
  return (
    <View>
      <Button title="Iniciar Juego" onPress={onPress} />
    </View>
  );
};

export default IniciarJuego;
