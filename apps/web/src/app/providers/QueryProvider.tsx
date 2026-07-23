import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { queryClient } from "@/lib/react-query/queryClient";

interface QueryProviderProps {
  children: ReactNode;
}

export default function QueryProvider({
  children,
}: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}