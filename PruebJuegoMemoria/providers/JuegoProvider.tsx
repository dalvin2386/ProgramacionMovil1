import React, { useState } from "react";
import { Juego, JuegoContext } from "../context/JuegoContext";

export const JuegoProvider = ({ children }: { children: React.ReactNode }) => {
  const [partidas, setPartidas] = useState<Juego[]>([]);

  const agregarPartida = (resultado: string, pares: number) => {
    const nuevaPartida = {
      id: partidas.length + 1,
      fecha: new Date().toLocaleString(),
      resultado,
      paresEncontrados: pares,
    };
    setPartidas((prev) => [...prev, nuevaPartida]);
  };

  const vecesJugadas = partidas.length;

  return (
    <JuegoContext.Provider value={{ vecesJugadas, partidas, agregarPartida }}>
      {children}
    </JuegoContext.Provider>
  );
};
