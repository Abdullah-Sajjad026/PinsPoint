"use client";

import { fireAuth } from "@/lib/firebase.config";
import { User, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

const AuthContext = React.createContext<{
  user: User | null | undefined;
  loading?: boolean;
  error?: Error | undefined;
}>({
  user: null,
  loading: false,
  error: undefined,
});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(fireAuth, (userCredential) => {
      console.log({ userCredential });
      setUser(userCredential);
    });

    return () => unsubAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
