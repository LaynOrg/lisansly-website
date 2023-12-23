<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import AuthClient from "~/clients/auth";
import { z } from "zod";

const { authenticate } = useAuthStore();
const loading = ref<boolean>(false);
const client = new AuthClient();
const toast = useToast();
const { t } = useI18n();

const schema = z.object({
  email: z
    .string()
    .min(1, t("email.validation.required"))
    .email(t("email.validation.format")),
  password: z.string().min(1, t("password.validation.required")),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: "",
  password: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  const res = await client.login({
    email: event.data.email,
    password: event.data.password,
  });
  loading.value = false;
  if (isNuxtError(res)) {
    toast.add({
      color: "red",
      title: t(res.message),
    });
    return;
  }
  authenticate(res);
}
</script>

<template>
  <h1 class="gradient-heading text-4xl">
    {{ t("login.title") }}
  </h1>
  <p class="mb-7">
    {{ $t("login.description") }}
  </p>
  <div class="space-y-4">
    <UButton
      :label="$t('login.providers.google')"
      color="red"
      block
      size="xl"
      icon="i-simple-icons-google"
    />
    <UButton
      :label="$t('login.providers.google')"
      color="black"
      block
      size="xl"
      icon="i-simple-icons-github"
    />
  </div>
  <UDivider
    :label="t('or')"
    class="mt-4 mb-2 text-2xl"
    :ui="{ label: 'text-lg', border: { size: { horizontal: 'border-t-2' } } }"
  />
  <UForm :schema="schema" :state="state" class="space-y-3" @submit="onSubmit">
    <UFormGroup :label="t('email.label')" required size="xl" name="email">
      <UInput :placeholder="t('email.placeholder')" v-model="state.email" />
    </UFormGroup>
    <UFormGroup :label="t('password.label')" required size="xl" name="password">
      <UInput
        type="password"
        :placeholder="t('password.placeholder')"
        v-model="state.password"
      />
    </UFormGroup>
    <UButton
      type="submit"
      :label="t('login.button')"
      block
      size="xl"
      :loading="loading"
    />
  </UForm>
</template>
