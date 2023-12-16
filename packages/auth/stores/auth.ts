import type { Session, User } from "../types";
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => {
    return {
      session: {} as Session,
    };
  },
  actions: {
    authenticate(session: Session, redirect = true): void {
      this.session = session;
      redirect && navigateTo("/");
    },
    logout(): void {
      this.session = {} as Session;
      navigateTo("/login");
    },
  },
  getters: {
    isAuthenticated(): boolean {
      if (process.client) {
        const accessToken = this.session?.tokens?.accessToken;
        return accessToken ? true : false;
      }
    },
    getUser(): User {
      return this.session.user;
    },
    getAccessToken(): string {
      const accessToken = this.session?.tokens?.accessToken;
      return accessToken;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
