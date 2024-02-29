<script lang="ts" setup>
import usePlannerStore from "@/stores/planner";
import type { Mood } from "@/stores/types/planner";

const store = usePlannerStore();

type Direction = "top" | "bottom" | "left" | "right";

export interface MoodButtonProps {
  mood: Mood;
  icon: string;
  location?: Direction;
}

const props = withDefaults(defineProps<MoodButtonProps>(), {
  location: "bottom",
});
</script>

<template>
  <v-btn
    :icon="true"
    variant="elevated"
    @click="store.setMood(props.mood)"
    :color="store.selectedDay.mood === props.mood ? 'pink' : ''"
  >
    <v-icon>{{ props.icon }}</v-icon>
    <v-tooltip activator="parent" :text="props.mood" :location="props.location" />
  </v-btn>
</template>
