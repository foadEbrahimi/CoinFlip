import React from 'react';

import { ThemeProvider } from './components/ui/theme-provider';
import Landing from './pages/Landing';
export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Landing />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquam
        accusamus consequatur numquam quidem rem eaque sunt necessitatibus
        impedit incidunt deserunt optio quas, adipisci dolorum voluptatem quam.
        Rerum, dignissimos doloribus!
      </span>
    </ThemeProvider>
  );
}
