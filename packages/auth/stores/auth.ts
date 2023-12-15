import type { RegisterRequest, Session, LoginRequest } from "../types";
import ResponseError from "../errors/response";
import AuthClient from "../clients/auth";
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => {
    return {
      session: {} as Session,
    };
  },
  actions: {
    async register({ email, name, password }: RegisterRequest): Promise<ResponseError | void> {
      const client = new AuthClient();
      const res = await client.register({ email, name, password });
      if (res instanceof ResponseError) {
        return res;
      }
      this.session = res;
      navigateTo("/");
    },
    async login({ email, password }: LoginRequest): Promise<ResponseError | void> {
      const client = new AuthClient();
      const res = await client.login({ email, password });
      if (res instanceof ResponseError) {
        return res;
      }
      this.session = res;
      navigateTo("/");
    },
    logout(): void {
      this.session = {};
      navigateTo("/login");
    }
  },
  getters:{
    isAuthenticated(): boolean {
        return !!this.session.accessToken;
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
