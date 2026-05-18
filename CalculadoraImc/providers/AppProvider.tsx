import React, { useState, useContext, ReactNode } from 'react'
import { AppContext } from "../context/AppContext";
import { calcularIMC, clasificacionIMC } from "../models/PesoAltura";

interface AppProviderProps {
    children: ReactNode
}

export default function AppProvider(props: AppProviderProps) {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)

    const imc = peso > 0 && altura > 0 ? calcularIMC(peso, altura).toFixed(1) : "--"
    const clasificacion = peso > 0 && altura > 0 ? clasificacionIMC(peso, altura) : ""

    return (
        <AppContext.Provider value={{ peso, setPeso, altura, setAltura, imc, clasificacion }}>
            {props.children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}
