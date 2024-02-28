<script lang="ts" setup>
import usePlannerStore from "@/stores/planner";

const store = usePlannerStore();
</script>

<template>
  <h1>
    Mirar - a tiny planner

    <v-btn rounded color="pink" @click="store.reset">reset</v-btn>
  </h1>
  <br />
  <hr />
</template>
