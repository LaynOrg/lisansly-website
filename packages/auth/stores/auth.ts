import type { Session } from "../types";
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => {
    return {
      session: {} as Session,
    };
  },
  actions: {
    authenticate(session: Session): void {
      this.session = session;
      navigateTo("/");
    },
    logout(): void {
      this.session = {} as Session;
      navigateTo("/login");
    }
  },
  getters: {
    isAuthenticated(): boolean {
      if (process.client) {
        const accessToken = this.session?.tokens?.accessToken;
        return accessToken ? true : false;
      }
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
