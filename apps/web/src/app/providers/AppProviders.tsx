import type { ReactNode } from "react";

import QueryProvider from "./QueryProvider";
import ThemeProvider from "./ThemeProvider";
import AuthProvider from "./AuthProvider";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({
  children,
}: AppProvidersProps) {
  return (
  
  <ThemeProvider>

<AuthProvider>
  <QueryProvider>
    {children}
  </QueryProvider>
</AuthProvider>

</ThemeProvider>

  );
}