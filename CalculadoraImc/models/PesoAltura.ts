export interface PesoAltura {
  peso: number;
  altura: number;
}

export function calcularIMC(peso: number, altura: number): number {
  const alturaM = altura / 100;
  return peso / (alturaM * alturaM);
}

export function clasificacionIMC(peso: number, alturaCm: number): string {
  const imc = calcularIMC(peso, alturaCm);
  if (imc < 18.5) return "Bajo peso";
  if (imc < 25) return "Normal";
  if (imc < 30) return "Sobrepeso";
  return "Obesidad";
}
