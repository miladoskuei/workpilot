import type {
  AuthResponse,
  LoginDto,
} from "@/types/auth";

const DEMO_USER = {
  id: 1,
  name: "Milad Oskuei",
  email: "admin@workpilot.dev",
};

class AuthService {
  async login(data: LoginDto): Promise<AuthResponse> {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("my data",data)

    if (
      data.email === "ad" &&
      data.password === "1234"
    ) {
      return {
        token: "fake-jwt-token",
        user: DEMO_USER,
      };
    }

    throw new Error("Invalid email or password.");
  }

  logout() {
    return Promise.resolve();
  }
}

export const authService = new AuthService();