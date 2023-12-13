import { fetchAndActivate, getAll } from "firebase/remote-config";
import type { RemoteConfig } from "firebase/remote-config";

export default async function () {
  const { $remoteConfig } = useNuxtApp();
  const flags = ref<Record<string, boolean>>({});
  if ($remoteConfig) {
    ($remoteConfig as RemoteConfig).settings.minimumFetchIntervalMillis = 10000;
    await fetchAndActivate($remoteConfig as RemoteConfig);
    const values = getAll($remoteConfig as RemoteConfig);
    flags.value = Object.keys(values).reduce(
      (acc, key) => {
        acc[key] = values[key].asBoolean();
        return acc;
      },
      {} as Record<string, boolean>,
    );
  }
  return {
    flags: flags.value
  };
}
