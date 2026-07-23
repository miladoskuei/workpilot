import type { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography: TypographyOptions = {
  fontFamily: [
    "Inter",
    "Roboto",
    "Arial",
    "sans-serif",
  ].join(","),

  h1: {
    fontSize: "3.5rem",
    fontWeight: 700,
  },

  h2: {
    fontSize: "2.5rem",
    fontWeight: 700,
  },

  h3: {
    fontSize: "2rem",
    fontWeight: 600,
  },

  body1: {
    fontSize: "1rem",
  },
};