import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ValidateBody(control: AbstractControl): ValidationErrors {
  if (control.value.length < 3) return { tooShort: true };
  if (control.value.length > 50) return { tooLong: true };
  if (/[^a-zA-Z0-9 \-\/]/.test(control.value)) return { invalidChar: true };
  return null;
}
