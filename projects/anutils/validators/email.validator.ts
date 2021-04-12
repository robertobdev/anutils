import { AbstractControl } from '@angular/forms';
import { IValidator } from './validators.interface';

export function ValidateEmail(control: AbstractControl): IValidator | null {
  // eslint-disable-next-line no-useless-escape
  const REG_EMAIL = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const emailValue = control.value as string;

  if (!emailValue || (emailValue && REG_EMAIL.test(emailValue.toLowerCase()))) {
    return null;
  }
  return {
    validate: false,
    message: 'Email inválido',
  };
}
