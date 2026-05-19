import { createContext } from "react";
import { Transaccion } from "../models/Transaccion";

export const contextBanco = createContext({
    saldo: 0,
    transacciones: [] as Transaccion[],
    depositar: () => {},
    transferir: (monto: number) => {}
})
