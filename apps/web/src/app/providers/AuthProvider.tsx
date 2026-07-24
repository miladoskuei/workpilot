import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { authService } from "@/features/auth/services/auth.service";

import type {
  AuthContextType,
  LoginDto,
  User,
} from "@/types/auth";

interface Props {
  children: ReactNode;
}

export const AuthContext =
  createContext<AuthContextType | null>(null);

export default function AuthProvider({
  children,
}: Props) {
  const [user, setUser] = useState<User | null>(null);

  const [token, setToken] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }

    setIsLoading(false);
  }, []);

  async function login(data: LoginDto) {
    const response = await authService.login(data);

    setUser(response.user);
    setToken(response.token);

    localStorage.setItem(
      "user",
      JSON.stringify(response.user)
    );

    localStorage.setItem(
      "token",
      response.token
    );
  }

  function logout() {
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  const value = useMemo<AuthContextType>(
    () => ({
      user,

      token,

      isAuthenticated: !!token,

      isLoading,

      login,

      logout,
    }),
    [user, token, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}