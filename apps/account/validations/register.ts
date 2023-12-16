import type { IValidation } from "~/interfaces";
import type { ValidationFields } from "~/types";
import type { FormError } from "#ui/types";

class RegisterValidation implements IValidation {
  private name(value?: string): FormError | null {
    return !value || value.trim().length === 0
      ? { path: "name", message: "name.error" }
      : null;
  }
  private email(value?: string): FormError | null {
    return !value || !/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value)
      ? { path: "email", message: "email.error" }
      : null;
  }
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
    name,
    email,
    password,
    confirmPassword,
  }: ValidationFields): FormError<string>[] {
    const errors: FormError[] = [
      this.name(name),
      this.email(email),
      this.password(password),
      this.confirmPassword(confirmPassword, password),
    ].filter(Boolean) as FormError[];
    return errors;
  }
}

export default RegisterValidation;
