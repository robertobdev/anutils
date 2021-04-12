import { AbstractControl } from '@angular/forms';
import { IAbstractControlValidator } from './validators.interface';

export function ValidateMatchPassword(
  controlToCompare: AbstractControl | null
): IAbstractControlValidator | null {
  let flagFirst = true;
  if (!controlToCompare) {
    return null;
  }

  return (control: AbstractControl) => {
    if (flagFirst) {
      flagFirst = false;
      controlToCompare.valueChanges.subscribe(() => {
        control.patchValue(control.value);
      });
    }
    if (control.value !== '' && control.value !== controlToCompare.value) {
      return {
        validate: false,
        message:
          'Campos nova senha e confirma nova senha precisam ter o mesmo valor.',
      };
    }
    return null;
  };
}
