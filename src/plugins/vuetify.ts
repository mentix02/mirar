import "vuetify/styles";
import { createVuetify } from "vuetify";
import DayJsAdapter from "@date-io/dayjs";
import "@mdi/font/css/materialdesignicons.css";

import themes from "@/plugins/themes";

export default createVuetify({
  theme: { themes: themes },
  date: { adapter: new DayJsAdapter() },
});
