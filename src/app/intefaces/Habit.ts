// types/habit.ts
export interface Habit {
    id: number;
    title: string;
    archived: boolean;
    periodType: string;
    targetValue: string;
    userId: number;
    description: string;
    colorHex: string;
   
    period: string;
   
  }
  