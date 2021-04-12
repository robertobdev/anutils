import { AbstractControl } from '@angular/forms';

export interface IValidator {
  validate: boolean;
  message: string;
}

export interface IAbstractControlValidator {
  (text: AbstractControl): IValidator | null;
}
