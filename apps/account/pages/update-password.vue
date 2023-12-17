<script setup lang="ts">
import UpdatePasswordValidation from "~/validations/updatePassword";
import type { FormError, FormSubmitEvent } from "#ui/types";
import UserClient from "~/clients/user";

const { authenticate, getAccessToken } = useAuthStore();
const validation = new UpdatePasswordValidation();
const client = new UserClient();
const toast = useToast();

const accessToken = getAccessToken;

const state = reactive({
  password: "",
  confirmPassword: "",
});

const loading = ref<boolean>(false);

const { t } = useI18n();

const validate = (values: typeof state): FormError[] => {
  const errors = validation.validate(values).map((error) => ({
    path: error.path,
    message: t(error.message),
  }));
  return errors;
};

async function onSubmit(event: FormSubmitEvent<typeof state>) {
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
  <UForm
    :validate="validate"
    :state="state"
    class="space-y-3"
    @submit="onSubmit"
  >
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
