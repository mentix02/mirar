<script lang="ts" setup>
import Preferences from "@/components/Preferences.vue";
import usePreferencesStore from "@/stores/preferences";

const preferencesStore = usePreferencesStore();
</script>

<template>
  <h1>
    <span v-if="preferencesStore.name">{{ preferencesStore.name }}'s tiny planner</span>
    <span v-else>Mirar - the tiny planner</span>

    <v-dialog max-width="750">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn class="ml-4" :icon="true" v-bind="activatorProps" color="pink" variant="flat">
          <v-icon>mdi-cog</v-icon>
          <v-tooltip location="bottom" activator="parent">Settings</v-tooltip>
        </v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <Preferences @close="isActive.value = false" />
      </template>
    </v-dialog>
  </h1>
  <br />
  <hr />
</template>
