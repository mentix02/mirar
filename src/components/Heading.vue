<script lang="ts" setup>
import Recap from "@/components/Recap.vue";
import Preferences from "@/components/Preferences.vue";
import usePreferencesStore from "@/stores/preferences";

const preferencesStore = usePreferencesStore();
</script>

<template>
  <h1>
    <span v-if="preferencesStore.name">{{ preferencesStore.name }}'s tiny planner</span>
    <span v-else>Mirar - the tiny planner</span>

    <v-dialog max-width="750">
      <template v-slot:activator="{ props: preferencesDialogProps }">
        <v-btn class="ml-4" :icon="true" color="primary" variant="flat" v-bind="preferencesDialogProps">
          <v-icon>mdi-cog</v-icon>
          <v-tooltip location="bottom" activator="parent">Settings</v-tooltip>
        </v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <Preferences @close="isActive.value = false" />
      </template>
    </v-dialog>

    <v-dialog max-width="750">
      <template v-slot:activator="{ props: statsProps }">
        <v-btn class="ml-4" :icon="true" color="secondary" variant="flat" v-bind="statsProps">
          <v-icon>mdi-chart-bar</v-icon>
          <v-tooltip location="bottom" activator="parent">Recap</v-tooltip>
        </v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <Recap @close="isActive.value = false" />
      </template>
    </v-dialog>
  </h1>
  <br />
  <hr />
</template>
