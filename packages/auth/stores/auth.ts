import type { RegisterRequest, Session } from "../types";
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
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
