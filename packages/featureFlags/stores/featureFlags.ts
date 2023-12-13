import { fetchAndActivate, getAll } from "firebase/remote-config";
import type { RemoteConfig } from "firebase/remote-config";
import { defineStore } from "pinia";

export const useFeatureFlagsStore = defineStore({
  id: "featureFlags",
  state: () => {
    return {
      flags: {} as Record<string, boolean>,
    };
  },
  actions: {
    async update() {
      const { $remoteConfig } = useNuxtApp();
      if (!$remoteConfig) return;
      ($remoteConfig as RemoteConfig).settings.minimumFetchIntervalMillis = 10000;
      await fetchAndActivate($remoteConfig as RemoteConfig);
      const values = getAll($remoteConfig as RemoteConfig);
      this.flags = Object.keys(values).reduce(
        (acc, key) => {
          acc[key] = values[key].asBoolean();
          return acc;
        },
        {} as Record<string, boolean>,
      );
    }
  },
  getters: {
    get: (state) => (flag: string) => {
      return state.flags[flag]
    },
  }
});
