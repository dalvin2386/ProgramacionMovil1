import React from "react";
import { View, Text, Button } from "react-native";

const IniciarJuego = () => {
  return (
    <View>
      <Button title="Iniciar Juego" 
      onPress={() => navigation.navigate('VistaCartas')}/>
    </View>
  );
};

export default IniciarJuego;
