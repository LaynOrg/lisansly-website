<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import UserClient from "~/clients/user";
import { z } from "zod";

const { getUser, authenticate, getAccessToken } = useAuthStore();
const loading = ref<boolean>(false);
const client = new UserClient();
const toast = useToast();
const { t } = useI18n();

const accessToken = getAccessToken;
const user = getUser;

const state = reactive({
  name: user?.name,
  email: user?.email,
});

const schema = z.object({
  name: z.string().min(1, t("name.validation.required")),
  email: z
    .string()
    .min(1, t("email.validation.required"))
    .email(t("email.validation.format")),
});

type Schema = z.output<typeof schema>;

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const name = event.data.name;
  const email = event.data.email;
  if (name === user.name && email === user.email) {
    return;
  }
  loading.value = true;
  const res = await client.updateInfos({
    ...(user.name !== name && { name }),
    ...(user.email !== email && { email }),
    accessToken,
  });
  loading.value = false;
  if (isNuxtError(res)) {
    toast.add({
      color: "red",
      title: t(res.message),
    });
    return;
  }
  toast.add({
    color: "green",
    title: t("updateInfos.200"),
  });
  authenticate(res, false);
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-3" @submit="onSubmit">
    <UFormGroup :label="t('name.label')" size="xl" name="name">
      <UInput :placeholder="t('name.placeholder')" v-model="state.name" />
    </UFormGroup>
    <UFormGroup :label="t('email.label')" size="xl" name="email">
      <UInput :placeholder="t('password.placeholder')" v-model="state.email" />
    </UFormGroup>
    <UButton
      type="submit"
      :label="t('updateInfos.button')"
      block
      size="xl"
      :loading="loading"
    />
  </UForm>
</template>
