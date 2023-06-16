import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "./ThemeProvider";
import { Header } from "./components/Header";
import Hero from "./components/Hero";

export const App = () => {
  return (
    <ThemeProvider>
      <Box>
        <CssBaseline />
        <Header />
        <Hero />
      </Box>
    </ThemeProvider>
  );
};
