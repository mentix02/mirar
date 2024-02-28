<script lang="ts" setup>
import usePlannerStore from "@/stores/planner";

const store = usePlannerStore();
</script>

<template>
  <h2>Water Intake</h2>
  <v-rating
    hover
    length="8"
    color="blue"
    half-increments
    full-icon="mdi-water"
    empty-icon="mdi-water-outline"
    v-model="store.selectedDay.waterIntake"
  />
</template>
