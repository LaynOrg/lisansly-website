import type { LoginRequest, RegisterRequest } from "~/types";
import type { NuxtError } from "nuxt/dist/app/composables";
import type { Session, Tokens, User } from "auth/types";
import { jwtDecode } from "jwt-decode";

class AuthClient {
  private readonly apiUrl: string;

  constructor() {
    const config = useRuntimeConfig();
    this.apiUrl = config.public.apiUrl;
  }

  public async register({
    email,
    name,
    password,
  }: RegisterRequest): Promise<Session | NuxtError> {
    const { data, error } = await useFetch(`${this.apiUrl}/register`, {
      method: "POST",
      body: { email, name, password },
    });

    if (error.value) {
      const statusCode = error.value.statusCode;
      const message = statusCode === 409 ? "register.409" : "500";
      const err = createError({ message, statusCode });
      return err;
    }
    const { accessToken, refreshToken } = data.value as Tokens;
    const decodedAccessToken: User = jwtDecode(accessToken);
    const session: Session = {
      user: {
        name: decodedAccessToken.name,
        email: decodedAccessToken.email,
      },
      tokens: {
        accessToken,
        refreshToken,
      },
    };
    return session;
  }

  public async login({
    email,
    password,
  }: LoginRequest): Promise<Session | NuxtError> {
    const { data, error } = await useFetch(`${this.apiUrl}/login`, {
      method: "POST",
      body: { email, password },
    });

    if (error.value) {
      const statusCode = error.value.statusCode;
      const message = statusCode === 401 ? "login.401" : "500";
      const err = createError({ message, statusCode });
      return err;
    }
    const { accessToken, refreshToken } = data.value as Tokens;
    const decodedAccessToken: User = jwtDecode(accessToken);
    const session: Session = {
      user: {
        name: decodedAccessToken.name,
        email: decodedAccessToken.email,
      },
      tokens: {
        accessToken,
        refreshToken,
      },
    };
    return session;
  }
}

export default AuthClient;
