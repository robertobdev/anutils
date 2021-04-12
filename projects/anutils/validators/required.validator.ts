import { AbstractControl } from '@angular/forms';
import { IValidator } from './validators.interface';

export function ValidateRequired(control: AbstractControl): IValidator | null {
  if (!control.value || control.value === '') {
    return {
      validate: false,
      message: 'Campo obrigatório',
    };
  }

  return null;
}
