"use client";

import { Toaster } from "@/components/ui/toaster";
import { AuthContextProvider } from "@/contexts/auth-context";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContextProvider>
      {children}
      <Toaster />
    </AuthContextProvider>
  );
};
