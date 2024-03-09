import colors from "vuetify/util/colors";
import type { ThemeDefinition } from "vuetify";

const fuchsia: ThemeDefinition = {
  dark: false,
  colors: {
    primary: colors.pink.base,
    secondary: colors.pink.lighten4,
  },
};

const butterCup: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#ffdfba",
    secondary: "#ff9d76",
  },
};

const meadowGreen: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#a5d6a7",
    secondary: "#81c784",
  },
};

const lavender: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#e1bee7",
    secondary: "#ce93d8",
  },
};

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#4994ec",
    secondary: "#6eb4b1",
    background: "#121212",
  },
};

const softPeach: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#ffccbc",
    secondary: "#ffab91",
  },
};

const coolAqua: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#80cbc4",
    secondary: "#4db6ac",
  },
};

const themes: Record<string, ThemeDefinition> = {
  Dark: dark,
  Fuchsia: fuchsia,
  Lavender: lavender,
  Buttercup: butterCup,
  "Cool Aqua": coolAqua,
  "Soft Peach": softPeach,
  "Meadow Green": meadowGreen,
};

export default themes;
