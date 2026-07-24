import { useContext } from "react";

import { AuthContext } from "@/app/providers/AuthProvider";

export function useAuth() {
  const context = useContext(AuthContext);

  console.log("my context",context)

  if (!context) {
    throw new Error(
      "useAuth must be used within an AuthProvider"
    );
  }

  return context;
}