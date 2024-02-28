import dayjs from "dayjs";

export type DateString = string;

export interface Task {
  text: string;
  completed: boolean;
}

export interface Meals {
  lunch: string;
  dinner: string;
  snacks: string;
  breakfast: string;
}

export interface Day {
  date: dayjs.Dayjs;

  todos: Task[];
  mustDos: Task[];
  appointments: Task[];

  meals: Meals;
  waterIntake: number;

  notes: string;

  canDoBetter: string;
  whatWasGreat: string;
  myMotivation: string;
}

export interface Days {
  [date: DateString]: Day;
}

export interface PlannerState {
  days: Days;
  selectedDate: string;
}

export type DayTaskField = "todos" | "mustDos" | "appointments";

export type DayTextField = "notes" | "canDoBetter" | "myMotivation" | "whatWasGreat";

// TypeScript can be really elegant if you let it.
const generateNTasks = (n: number): Task[] =>
  Array(n)
    .fill(null)
    .map(() => ({ text: "", completed: false }));

export const newEmptyDay = (date: DateString): Day => ({
  notes: "",
  waterIntake: 0,
  canDoBetter: "",
  whatWasGreat: "",
  myMotivation: "",
  date: dayjs(date),
  todos: generateNTasks(5),
  mustDos: generateNTasks(3),
  appointments: generateNTasks(7),
  meals: {
    lunch: "",
    dinner: "",
    snacks: "",
    breakfast: "",
  },
});
