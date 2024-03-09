import { defineStore, acceptHMRUpdate } from "pinia";

import themes from "@/plugins/themes";

type Preferences = {
  name?: string;
  theme: keyof typeof themes;
  showAdjacentMonths: boolean;
};

const usePreferencesStore = defineStore("preferences", {
  state: (): Preferences => ({
    name: undefined,
    theme: "Fuchsia",
    showAdjacentMonths: false,
  }),
  actions: {
    reset() {
      this.$reset();
    },
  },
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePreferencesStore, import.meta.hot));
}

export default usePreferencesStore;
