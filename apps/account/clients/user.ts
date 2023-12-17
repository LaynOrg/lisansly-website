import type { Session, Tokens, User } from "auth/types";
import { jwtDecode } from "jwt-decode";
import type { UpdateInfosRequest, UpdatePasswordRequest } from "~/types";

class UserClient {
  private readonly apiUrl: string;

  constructor() {
    const config = useRuntimeConfig();
    this.apiUrl = config.public.apiUrl;
  }

  public async updateInfos({
    name,
    email,
    accessToken,
  }: UpdateInfosRequest): Promise<Session | NuxtError> {
    const { data, error } = await useFetch(`${this.apiUrl}/user`, {
      method: "PATCH",
      body: {
        name,
        email,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (error.value) {
      const statusCode = error.value.statusCode;
      const message = statusCode === 409 ? "updateInfos.409" : "500";
      const err = createError({ message, statusCode });
      return err;
    }
    const { accessToken: newAccessToken, refreshToken } = data.value as Tokens;
    const decodedAccessToken: User = jwtDecode(newAccessToken);
    const session: Session = {
      user: {
        name: decodedAccessToken.name,
        email: decodedAccessToken.email,
      },
      tokens: {
        accessToken: newAccessToken,
        refreshToken,
      },
    };
    return session;
  }

  public async updatePassword({
    password,
    accessToken,
  }: UpdatePasswordRequest): Promise<Session | NuxtError> {
    const { data, error } = await useFetch(`${this.apiUrl}/user`, {
      method: "PATCH",
      body: {
        password,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (error.value) {
      const statusCode = error.value.statusCode;
      const err = createError({ message: "500", statusCode });
      return err;
    }
    const { accessToken: newAccessToken, refreshToken } = data.value as Tokens;
    const decodedAccessToken: User = jwtDecode(newAccessToken);
    const session: Session = {
      user: {
        name: decodedAccessToken.name,
        email: decodedAccessToken.email,
      },
      tokens: {
        accessToken: newAccessToken,
        refreshToken,
      },
    };
    return session;
  }
}

export default UserClient;
