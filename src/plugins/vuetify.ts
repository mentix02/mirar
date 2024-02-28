import "vuetify/styles";
import DayJsAdapter from "@date-io/dayjs";
import "@mdi/font/css/materialdesignicons.css";

import { createVuetify } from "vuetify";

export default createVuetify({
  date: {
    adapter: new DayJsAdapter(),
  },
});
