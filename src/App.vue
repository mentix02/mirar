<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "mirar" });
</script>

<script lang="ts" setup>
import { ref, watch } from "vue";
import dayjs from "dayjs";

import Task from "@/components/Task.vue";
import Meals from "@/components/Meals.vue";
import usePlannerStore from "@/stores/planner";
import Heading from "@/components/Heading.vue";
import WaterIntake from "@/components/WaterIntake.vue";

const store = usePlannerStore();

const selectedDate = ref(dayjs());

watch(selectedDate, (newDate) => store.setSelectedDate(newDate.format("YYYY-MM-DD")));
</script>

<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <Heading />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-date-picker v-model="selectedDate" title="calendar" color="pink" width="100%" />
        </v-col>
        <v-col cols="12" md="5">
          <!-- todos -->
          <h2>To-Do List</h2>
          <Task :key="`todo-${idx}`" type="todos" :task-idx="idx" v-for="(_, idx) in store.selectedDay.todos" />
        </v-col>
        <v-col cols="6" md="3">
          <Meals />
        </v-col>
        <v-col cols="6" md="4">
          <!-- water intake -->
          <h2>Must Get Done Today</h2>
          <Task type="mustDos" :task-idx="idx" :key="`mustDo-${idx}`" v-for="(_, idx) in store.selectedDay.mustDos" />
          <WaterIntake />
        </v-col>
        <v-col cols="12" md="5">
          <h2>Notes & Stuff</h2>
          <v-textarea label="Notes" variant="outlined" v-model="store.selectedDay.notes" bg-color="" rows="8" />
        </v-col>
        <v-col cols="6" md="3">
          <h2>Mood & Energy</h2>

          <v-btn icon="mdi-robot-happy" size="large" variant="elevated">
            <v-tooltip activator="parent" location="top">I'm feeling great today!</v-tooltip>
          </v-btn>

          <v-btn icon="mdi-emoticon-excited" size="large" variant="elevated" />
          <v-btn icon="mdi-emoticon-sad" size="large" variant="elevated" />
          <v-btn icon="mdi-sleep" size="large" variant="elevated" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style>
.border {
  border: 1px solid red;
}
</style>
