<script setup lang="ts">
import { computed } from "vue";

import usePlannerStore from "@/stores/planner";
import type { DayTaskField } from "@/stores/types/planner";

const store = usePlannerStore();

interface TaskProps {
  taskIdx: number;
  type: DayTaskField;
}

const props = defineProps<TaskProps>();

const color = computed(() => (store.selectedDay[props.type][props.taskIdx].completed ? "success" : ""));

const markTaskCompleted = () => store.toggleTaskCompletion(props.taskIdx, props.type);
</script>

<template>
  <v-text-field
    rounded
    :color="color"
    variant="outlined"
    :base-color="color"
    @click:append-inner="markTaskCompleted"
    v-model="store.selectedDay[props.type][props.taskIdx].text"
    :class="{ 'text-decoration-line-through': store.selectedDay[props.type][props.taskIdx].completed }"
    :append-inner-icon="store.selectedDay[props.type][props.taskIdx].completed ? 'mdi-check' : 'mdi-square-outline'"
  />
</template>
