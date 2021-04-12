import { AbstractControl } from '@angular/forms';
import { IAbstractControlValidator } from './validators.interface';

export function ValidateMatchPassword(
  controlToCompare: AbstractControl
): IAbstractControlValidator {
  let flagFirst = true;
  return (control: AbstractControl) => {
    if (flagFirst) {
      flagFirst = false;
      controlToCompare.valueChanges.subscribe(() => {
        control.patchValue(control.value);
      });
    }
    if (control.value !== controlToCompare.value) {
      return {
        validate: false,
        message:
          'Campos nova senha e confirma nova senha precisam ter o mesmo valor.',
      };
    }
    return null;
  };
}
