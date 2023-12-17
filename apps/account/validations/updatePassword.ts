import type { IValidation } from "~/interfaces";
import type { ValidationFields } from "~/types";
import type { FormError } from "#ui/types";

class UpdatePasswordValidation implements IValidation {
  private password(value?: string): FormError | null {
    return !value || value.trim().length < 10
      ? { path: "password", message: "password.error" }
      : null;
  }
  private confirmPassword(value?: string, password?: string): FormError | null {
    return !value
      ? { path: "confirmPassword", message: "confirmPassword.error.required" }
      : value !== password
        ? { path: "confirmPassword", message: "confirmPassword.error.match" }
        : null;
  }
  public validate({
    password,
    confirmPassword,
  }: ValidationFields): FormError<string>[] {
    const errors: FormError[] = [
      this.password(password),
      this.confirmPassword(password, confirmPassword),
    ].filter(Boolean) as FormError[];
    return errors;
  }
}

export default UpdatePasswordValidation;
