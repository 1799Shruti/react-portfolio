import type { ReactNode } from "react";
import { ErrorBoundary } from "@/shared/components";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ErrorBoundary>
      {/* Add more providers here as needed:
          - ThemeProvider
          - AuthProvider
          - QueryClientProvider (React Query)
          - etc.
      */}
      {children}
    </ErrorBoundary>
  );
}

export default AppProviders;
