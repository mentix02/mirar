<script setup lang="ts">
import themes from "@/plugins/themes";
import usePlannerStore from "@/stores/planner";
import usePreferencesStore from "@/stores/preferences";

const emit = defineEmits<{ (e: "close"): void }>();

const plannerStore = usePlannerStore();
const themeNames = Object.keys(themes);
const preferencesStore = usePreferencesStore();

const reset = () => {
  plannerStore.$reset();
  preferencesStore.$reset();
  localStorage.clear();
};

const exportData = () => {
  // Serialize the store.
  const data = JSON.stringify(plannerStore, null, 2);
  const blob = new Blob([data], { type: "application/json" });

  // Create a URL for the blob and
  // an element to simulate a click.
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  // Set the element's attributes.
  a.href = url;
  a.download = "mirar.json";

  // Simulate a click and revoke the URL.
  a.click();
  URL.revokeObjectURL(url);
  a.remove();
};
</script>

<template>
  <v-card title="Preferences" prepend-icon="mdi-cog" subtitle="Customise your Mirar experience from here.">
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-text-field v-model.trim="preferencesStore.name" label="your name" />
          <v-select v-model="preferencesStore.theme" label="Theme" :items="themeNames"></v-select>
          <v-switch v-model="preferencesStore.showAdjacentMonths" label="Show adjacent months" color="primary" />
        </v-col>
        <v-col cols="12" md="4">
          <v-btn rounded block append-icon="mdi-delete" color="red" @click="reset">Reset</v-btn>
          <v-divider class="my-2" />
          <v-btn rounded block append-icon="mdi-file-export" color="blue" @click="exportData"> Export Data </v-btn>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success" @click="emit('close')"> Save & Exit </v-btn>
    </v-card-actions>
  </v-card>
</template>
