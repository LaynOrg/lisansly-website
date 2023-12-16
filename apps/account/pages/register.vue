<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import RegisterValidation from "~/validations/register";
import AuthClient from "~/clients/auth";

const validation = new RegisterValidation();
const { authenticate } = useAuthStore();
const loading = ref<boolean>(false);
const toast = useToast();
const client = new AuthClient();
const { t } = useI18n();

const state = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const validate = (values: typeof state): FormError[] => {
  const errors = validation.validate(values).map((error) => ({
    path: error.path,
    message: t(error.message),
  }));
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  loading.value = true;
  const res = await client.register({
    name: event.data.name,
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
  <UContainer :ui="{ constrained: 'max-w-xl mt-10' }">
    <h1 class="gradient-heading text-4xl">
      {{ t("register.title") }}
    </h1>
    <p class="mb-7">
      {{ $t("register.description") }}
    </p>
    <div class="space-y-4">
      <UButton
        :label="$t('register.providers.google')"
        color="red"
        block
        size="xl"
        icon="i-simple-icons-google"
      />
      <UButton
        :label="$t('register.providers.google')"
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
    <UForm
      :validate="validate"
      :state="state"
      class="space-y-3"
      @submit="onSubmit"
    >
      <UFormGroup :label="t('name.label')" required size="xl" name="name">
        <UInput :placeholder="t('name.placeholder')" v-model="state.name" />
      </UFormGroup>
      <UFormGroup :label="t('email.label')" required size="xl" name="email">
        <UInput :placeholder="t('email.placeholder')" v-model="state.email" />
      </UFormGroup>
      <UFormGroup
        :label="t('password.label')"
        required
        size="xl"
        name="password"
      >
        <UInput
          type="password"
          :placeholder="t('password.placeholder')"
          v-model="state.password"
        />
      </UFormGroup>
      <UFormGroup
        :label="t('confirmPassword.label')"
        required
        size="xl"
        name="confirmPassword"
      >
        <UInput
          type="password"
          :placeholder="t('confirmPassword.placeholder')"
          v-model="state.confirmPassword"
        />
      </UFormGroup>
      <UButton
        type="submit"
        :label="t('register.button')"
        block
        size="xl"
        :loading="loading"
      />
    </UForm>
  </UContainer>
</template>
