import type { ValidationFields } from "~/types";
import type { FormError } from "#ui/types";

export interface IValidation {
  validate(fields: ValidationFields): FormError[];
}
