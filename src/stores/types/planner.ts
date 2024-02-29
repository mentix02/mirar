import dayjs from "dayjs";

export type DateString = string;

export type Mood =
  | "happy"
  | "sad"
  | "excited"
  | "neutral"
  | "angry"
  | "tired"
  | "relaxed"
  | "sick"
  | "confused"
  | "anxious";

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

  mood: Mood;
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

export const newEmptyTask = (): Task => ({ text: "", completed: false });

// TypeScript can be really elegant if you let it.
const generateNTasks = (n: number): Task[] => Array(n).fill(null).map(newEmptyTask);

export const newEmptyDay = (date: DateString): Day => ({
  notes: "",
  waterIntake: 0,
  mood: "neutral",
  canDoBetter: "",
  whatWasGreat: "",
  myMotivation: "",
  date: dayjs(date),
  todos: generateNTasks(10),
  mustDos: generateNTasks(4),
  appointments: generateNTasks(7),
  meals: {
    lunch: "",
    dinner: "",
    snacks: "",
    breakfast: "",
  },
});
