import { createApp } from "vue";

import App from "./App.vue";
import pinia from "./stores";
import vuetify from "./plugins/vuetify";

const app = createApp(App);

app.use(pinia);
app.use(vuetify);

app.mount("#app");
