<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import UserClient from "~/clients/user";
import { z } from "zod";

const { authenticate, getAccessToken } = useAuthStore();
const loading = ref<boolean>(false);
const client = new UserClient();
const toast = useToast();
const { t } = useI18n();

const accessToken = getAccessToken;

const state = reactive({
  password: "",
  confirmPassword: "",
});

const schema = z.object({
  password: z.string().min(10, t("password.validation.required")),
  confirmPassword: z
    .string()
    .min(1, t("confirmPassword.validation.required"))
    .refine((data) => data === state.password, {
      message: t("confirmPassword.validation.match"),
    }),
});

type Schema = z.output<typeof schema>;

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  const res = await client.updatePassword({
    password: event.data.password,
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
    title: t("updatePassword.200"),
  });
  authenticate(res, false);
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-3" @submit="onSubmit">
    <UFormGroup :label="t('password.label')" size="xl" name="password">
      <UInput
        :placeholder="t('password.placeholder')"
        v-model="state.password"
      />
    </UFormGroup>
    <UFormGroup
      :label="t('confirmPassword.label')"
      size="xl"
      name="confirmPassword"
    >
      <UInput
        :placeholder="t('confirmPassword.placeholder')"
        v-model="state.confirmPassword"
      />
    </UFormGroup>
    <UButton
      type="submit"
      :label="t('updatePassword.button')"
      block
      size="xl"
      :loading="loading"
    />
  </UForm>
</template>
