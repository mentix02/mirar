<script setup lang="ts">
const emit = defineEmits<{ (e: "close"): void }>();
</script>

<template>
  <v-card title="Recap" prepend-icon="mdi-chart-bar" subtitle="See how you've been doing.">
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" md="6"> <h1 class="text-center">coming soon!</h1></v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success" @click="emit('close')"> Exit </v-btn>
    </v-card-actions>
  </v-card>
</template>
