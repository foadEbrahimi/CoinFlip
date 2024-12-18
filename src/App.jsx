import React from 'react';

import { ThemeProvider } from './components/ui/theme-provider';
import Landing from './pages/Landing';
export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Landing />
    </ThemeProvider>
  );
}
