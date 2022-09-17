import { AbstractControl } from '@angular/forms';
import { IValidator } from './validators.interface';

export function AutocompleteMatch(control: AbstractControl): IValidator | null {
  const selection = control.value as string;

  if (selection !== '' && typeof selection === 'string') {
    return {
      validate: false,
      message: 'Dado inválido',
    };
  }
  return null;
}
