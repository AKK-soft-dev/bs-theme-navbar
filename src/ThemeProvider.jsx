import {
  ThemeProvider as MuiThemeProvider,
  alpha,
  createTheme,
} from "@mui/material";
import { createContext, useCallback, useMemo, useState } from "react";

const getDesignTokens = (mode) => ({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(1, 2),
          borderRadius: "7px",
        }),
      },
    },
  },
  palette: {
    mode,
    background: {
      paper: mode === "dark" ? "#1e293b" : "#fff",
      default: mode === "dark" ? "#0b1324" : "#fff",
    },
    primary: {
      main: "#754ffe",
    },
    text: {
      main: mode === "dark" ? alpha("#fff", 0.9) : "#1e293b",
    },
  },
});

export const ToggleTheme = createContext({
  toggleMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleMode = useCallback(
    () => setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    []
  );
  return (
    <MuiThemeProvider theme={theme}>
      <ToggleTheme.Provider value={{ toggleMode }}>
        {children}
      </ToggleTheme.Provider>
    </MuiThemeProvider>
  );
};
