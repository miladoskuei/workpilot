import { createTheme } from "@mui/material/styles";

import { palette } from "./palette";
import { typography } from "./typography";


export const theme = createTheme({
  palette,
  typography,

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 10,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});