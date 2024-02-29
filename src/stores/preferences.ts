import { defineStore, acceptHMRUpdate } from "pinia";

type Theme = "light";

type Preferences = {
  name?: string;
  theme: Theme;
};

const usePreferencesStore = defineStore("preferences", {
  state: (): Preferences => ({
    theme: "light",
    name: undefined,
  }),
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePreferencesStore, import.meta.hot));
}

export default usePreferencesStore;
