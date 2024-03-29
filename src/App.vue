<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "mirar" });
</script>

<script lang="ts" setup>
import dayjs from "dayjs";
import { useTheme } from "vuetify";
import { ref, watch, onMounted } from "vue";

import Meals from "@/components/Meals.vue";
import Heading from "@/components/Heading.vue";
import usePlannerStore from "@/stores/planner";
import Moods from "@/components/mood/Moods.vue";
import TaskList from "@/components/task/TaskList.vue";
import usePreferencesStore from "@/stores/preferences";
import WaterIntake from "@/components/WaterIntake.vue";

const theme = useTheme();
const store = usePlannerStore();
const preferencesStore = usePreferencesStore();

const selectedDate = ref(dayjs());

watch(selectedDate, (newDate) => store.setSelectedDate(newDate.format("YYYY-MM-DD")));

watch(
  () => preferencesStore.theme,
  (newTheme) => {
    theme.global.name.value = newTheme;
  },
);

onMounted(() => {
  // Set the theme based on the preferences.
  theme.global.name.value = preferencesStore.theme;
});
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
          <v-date-picker
            width="100%"
            color="primary"
            title="calendar"
            v-model="selectedDate"
            :show-adjacent-months="preferencesStore.showAdjacentMonths"
          />
        </v-col>
        <v-col cols="12" md="5">
          <h2>To-Do List</h2>
          <TaskList type="todos" height="370" />
        </v-col>
        <v-col cols="6" md="3">
          <Meals />
        </v-col>
        <v-col cols="6" md="4">
          <h2>Must Get Done Today</h2>
          <TaskList type="mustDos" height="310" />
        </v-col>
        <v-col cols="12" md="5">
          <h2>Notes & Stuff</h2>
          <v-textarea rows="12" variant="outlined" label="Whatever is on your mind" v-model="store.selectedDay.notes" />
        </v-col>
        <v-col cols="12" md="3">
          <Moods />
          <br />
          <h2>Water Intake</h2>
          <br />
          <v-row justify="center">
            <v-col cols="auto">
              <WaterIntake />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
