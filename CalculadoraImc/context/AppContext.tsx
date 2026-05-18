import { createContext } from "react";

export const AppContext = createContext({
    peso: 0,
    setPeso: (valor: number) => {},
    altura: 0,
    setAltura: (valor: number) => {},
    imc: "",
    clasificacion: "",
});
