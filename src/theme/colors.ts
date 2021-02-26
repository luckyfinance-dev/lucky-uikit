import { Colors } from "./types";

export const baseColors = {
  failure: "#ffbe4c",
  primary: "#deebf3",
  primaryBright: "#deebf3",
  primaryDark: "#deebf3",
  secondary: "#7e2d2b",
  success: "#e5885e",
  warning: "#edd679",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#dde2e5",
  contrast: "#2a1110",
  invertedContrast: "#FFFFFF",
  input: "#e5dfd4",
  tertiary: "#eee8e7",
  text: "#4d1b1a",
  textDisabled: "#bccad3",
  textSubtle: "#d0c494",
  borderColor: "#dde2e5",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #ecf5f6 0%, #e0edf3 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#92cbf2",
  background: "#33383b",
  backgroundDisabled: "#313d45",
  contrast: "#FFFFFF",
  invertedContrast: "#2a1110",
  input: "#766953",
  primaryDark: "#edd679",
  tertiary: "#3a3332",
  text: "#fff1d8",
  textDisabled: "#635a59",
  textSubtle: "#dfd9ce",
  borderColor: "#4e5a62",
  card: "#272424",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #709fb1 0%, #75a2b3 100%)",
  },
};
