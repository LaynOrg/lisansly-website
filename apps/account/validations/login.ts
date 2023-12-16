import type { IValidation } from "~/interfaces";
import type { ValidationFields } from "~/types";
import type { FormError } from "#ui/types";

class LoginValidation implements IValidation {
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

  public validate({ email, password }: ValidationFields): FormError<string>[] {
    const errors: FormError[] = [
      this.email(email),
      this.password(password),
    ].filter(Boolean) as FormError[];
    return errors;
  }
}

export default LoginValidation;
