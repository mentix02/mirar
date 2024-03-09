<script setup lang="ts">
import usePlannerStore from "@/stores/planner";
import type { DayTaskField } from "@/stores/types/planner";
import TaskListItem from "@/components/task/TaskListItem.vue";

const store = usePlannerStore();

interface TaskListProps {
  type: DayTaskField;
  height: number | string;
}

const props = defineProps<TaskListProps>();
</script>

<template>
  <v-virtual-scroll :items="store.selectedDay[props.type]" :height="props.height">
    <template v-slot:default="{ item, index }">
      <TaskListItem :key="`todo-${index}`" :type="props.type" :task-idx="index" />
    </template>
  </v-virtual-scroll>
  <v-btn class="py-5" rounded block color="primary" @click="store.addTask(props.type)">Add Task</v-btn>
</template>
