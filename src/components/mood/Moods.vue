<script setup lang="ts">
import usePlannerStore from "@/stores/planner";

import MoodButton from "@/components/mood/MoodButton.vue";
import type { MoodButtonProps } from "@/components/mood/MoodButton.vue";

const store = usePlannerStore();

const moodButtons: MoodButtonProps[] = [
  {
    mood: "happy",
    location: "left",
    icon: "mdi-emoticon-happy",
  },
  {
    mood: "sad",
    location: "top",
    icon: "mdi-emoticon-sad",
  },
  {
    mood: "neutral",
    location: "top",
    icon: "mdi-emoticon-neutral",
  },
  {
    mood: "angry",
    location: "right",
    icon: "mdi-emoticon-angry",
  },
  {
    mood: "anxious",
    location: "left",
    icon: "mdi-emoticon-cry",
  },
  {
    mood: "tired",
    icon: "mdi-sleep",
  },
  {
    mood: "relaxed",
    location: "right",
    icon: "mdi-emoticon-cool",
  },
];
</script>

<template>
  <h2>Mood & Energy</h2>
  <br />
  <v-row justify="center" align="center">
    <v-col cols="auto" v-for="moodButton in moodButtons" :key="moodButton.mood">
      <MoodButton :mood="moodButton.mood" :icon="moodButton.icon" :location="moodButton.location" />
    </v-col>
  </v-row>
</template>
