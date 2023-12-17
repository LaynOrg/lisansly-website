<script setup lang="ts">
import UpdateInfosValidation from "~/validations/updateInfos";
import type { FormError, FormSubmitEvent } from "#ui/types";
import UserClient from "~/clients/user";

const { getUser, authenticate, getAccessToken } = useAuthStore();
const validation = new UpdateInfosValidation();
const client = new UserClient();
const toast = useToast();

const accessToken = getAccessToken;
const user = getUser;

const state = reactive({
  name: user?.name,
  email: user?.email,
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
  <UForm
    :validate="validate"
    :state="state"
    class="space-y-3"
    @submit="onSubmit"
  >
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
