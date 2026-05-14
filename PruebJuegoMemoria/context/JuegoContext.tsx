import { createContext, useContext } from "react";

export interface Juego {
  id: number;
  fecha: string;
  resultado: string;
  paresEncontrados: number;
}

interface JuegoContextType {
  vecesJugadas: number;
  partidas: Juego[];
  agregarPartida: (resultado: string, pares: number) => void;
}

export const JuegoContext = createContext<JuegoContextType>({
  vecesJugadas: 0,
  partidas: [],
  agregarPartida: () => {},
});

export const useJuego = () => useContext(JuegoContext);
