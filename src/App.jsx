import React from "react";

import { ThemeProvider } from "./components/ui/theme-provider";
import Landing from "./pages/Landing";
import LoaderFullScreen from "./components/ui/LoaderFullScreen";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <LoaderFullScreen />
      <Landing />
    </ThemeProvider>
  );
}
