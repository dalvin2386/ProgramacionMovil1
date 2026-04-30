export interface ExerciseResult {
  periodDays: number;
  trainingDays: number;
  target: number;
  averageHours: number;
  targetReached: boolean;
  rating: number;
  explanation: string;
}

export function calculateExercises(hours: number[], target: number): ExerciseResult {
  const periodDays = 7;
  const trainingDays = hours.filter(h => h > 0).length;
  const totalHours = hours.reduce((sum, h) => sum + h, 0);
  const averageHours = totalHours / periodDays;
  const targetReached = averageHours >= target;

  let rating: number;
  let explanation: string;

  if (averageHours >= target) {
    rating = 3;
    explanation = "¡Excelente! Alcanzaste tu objetivo de entrenamiento semanal";
  } else if (averageHours >= target / 2) {
    rating = 2;
    explanation = "Buen esfuerzo, pero necesitas entrenar más para alcanzar tu objetivo";
  } else {
    rating = 1;
    explanation = "Muy bajo, debes aumentar significativamente tus horas de entrenamiento";
  }

  return {
    periodDays,
    trainingDays,
    target,
    averageHours,
    targetReached,
    rating,
    explanation,
  };
}
