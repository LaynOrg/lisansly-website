import type { IValidation } from "~/interfaces";
import type { ValidationFields } from "~/types";
import type { FormError } from "#ui/types";

class UpdateInfosValidation implements IValidation {
  private name(value?: string): FormError | null {
    return !value || value.trim().length === 0
      ? { path: "name", message: "name.error" }
      : null;
  }
  private email(value?: string): FormError | null {
    return !/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value!)
      ? { path: "email", message: "email.error" }
      : null;
  }

  public validate({ name, email }: ValidationFields): FormError<string>[] {
    const errors: FormError[] = [this.name(name), this.email(email)].filter(
      Boolean,
    ) as FormError[];
    return errors;
  }
}

export default UpdateInfosValidation;
