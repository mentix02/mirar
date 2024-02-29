import dayjs from "dayjs";
import { defineStore, acceptHMRUpdate } from "pinia";

import { newEmptyDay, newEmptyTask } from "./types/planner";
import type { Day, Mood, DateString, PlannerState, DayTaskField } from "./types/planner";

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
    setMood(mood: Mood) {
      this.ensureDayExists(this.selectedDate);
      this.days[this.selectedDate]!.mood = mood;
    },
    addTask(type: DayTaskField) {
      this.ensureDayExists(this.selectedDate);
      this.days[this.selectedDate]![type].push(newEmptyTask());
    },
    removeTask(index: number, type: DayTaskField) {
      this.ensureDayExists(this.selectedDate);
      this.days[this.selectedDate]![type].splice(index, 1);
    },
    toggleTaskCompletion(index: number, type: DayTaskField) {
      this.days[this.selectedDate]![type][index].completed = !this.days[this.selectedDate]![type][index].completed;
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
  persist: false,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePlannerStore, import.meta.hot));
}

export default usePlannerStore;
