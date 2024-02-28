<script lang="ts" setup>
import usePlannerStore from "@/stores/planner";

const store = usePlannerStore();
</script>

<template>
  <h2>Meals</h2>
  <v-textarea label="Breakfast" v-model="store.selectedDay.meals.breakfast" bg-color="pink" rows="2" />
  <v-textarea label="Lunch" v-model="store.selectedDay.meals.lunch" bg-color="green" rows="2" />
  <v-textarea label="Dinner" v-model="store.selectedDay.meals.dinner" bg-color="pink" rows="2" />
  <v-textarea label="Snacks" v-model="store.selectedDay.meals.snacks" bg-color="green" rows="2" />
</template>
