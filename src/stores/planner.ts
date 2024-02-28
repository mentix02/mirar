import dayjs from "dayjs";
import { defineStore, acceptHMRUpdate } from "pinia";

import { newEmptyDay } from "./types/planner";
import type { Day, Task, Meals, DateString, PlannerState, DayTaskField, DayTextField } from "./types/planner";

const usePlannerStore = defineStore("planner", {
  state: (): PlannerState => ({
    days: {},
    selectedDate: dayjs().format("YYYY-MM-DD"),
  }),
  actions: {
    reset() {
      this.days = {};
      this.selectedDate = dayjs().format("YYYY-MM-DD");
    },
    ensureDayExists(date: DateString) {
      if (!this.days[date]) {
        this.days[date] = newEmptyDay(date);
      }
    },
    setSelectedDate(date: DateString) {
      this.selectedDate = date;
    },
    addTask(task: Task, type: DayTaskField) {
      this.ensureDayExists(this.selectedDate);
      this.days[this.selectedDate]![type].push(task);
    },
    removeTask(index: number, type: DayTaskField) {
      this.ensureDayExists(this.selectedDate);
      this.days[this.selectedDate]![type].splice(index, 1);
    },
    toggleTaskCompletion(index: number, type: DayTaskField) {
      this.days[this.selectedDate]![type][index].completed = !this.days[this.selectedDate]![type][index].completed;
    },
    setMeal(meal: keyof Meals, text: string) {
      this.ensureDayExists(this.selectedDate);
      this.days[this.selectedDate]!.meals[meal] = text;
    },
    setWaterIntake(amount: number) {
      this.ensureDayExists(this.selectedDate);
      this.days[this.selectedDate]!.waterIntake = amount;
    },
    setText(text: string, type: DayTextField) {
      this.ensureDayExists(this.selectedDate);
      this.days[this.selectedDate]![type] = text;
    },
  },
  getters: {
    selectedDay(): Day {
      const day = this.days[this.selectedDate];
      // This may look weird since we're mutating the state inside a getter but
      // trust me, bro, I know what I'm doing. Go fuck off.
      if (!day) this.days[this.selectedDate] = newEmptyDay(this.selectedDate);
      return this.days[this.selectedDate]!;
    },
  },
  persist: true,
});

export default usePlannerStore;
