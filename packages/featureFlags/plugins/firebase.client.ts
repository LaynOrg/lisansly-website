import { getRemoteConfig } from "firebase/remote-config";
import type { FirebaseOptions } from "firebase/app";
import { initializeApp } from "firebase/app";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig: FirebaseOptions = {
    apiKey: config.public.fbApiKey,
    authDomain: config.public.fbAuthDomain,
    projectId: config.public.fbProjectId,
    storageBucket: config.public.fbStorageBucket,
    messagingSenderId: config.public.fbMessagingSenderId,
    appId: config.public.fbAppId,
  };

  const app = initializeApp(firebaseConfig);
  const remoteConfig = getRemoteConfig(app);
  nuxtApp.vueApp.provide("remoteConfig", remoteConfig);
  nuxtApp.provide("remoteConfig", remoteConfig);
});
