import { AbstractControl } from '@angular/forms';
import { IValidator } from './validators.interface';

export function ValidateCpf(control: AbstractControl): IValidator | null {
  const value = control.value as string;

  if (value) {
    let v: boolean;

    const cpf: string = value.replace(/[^\d]+/g, '');

    if (
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      v = true;
      return {
        validate: false,
        message: 'CPF inválido',
      };
    }

    const c: string = cpf.substr(0, 9);
    const dv: string = cpf.substr(9, 2);
    let d1 = 0;
    v = false;

    if (cpf.length < 11) {
      return {
        validate: false,
        message: 'CPF inválido',
      };
    }

    for (let i = 0; i < 9; i++) {
      d1 += (10 - i) * parseInt(c.charAt(i));
    }

    if (d1 === 0) {
      v = true;
      return {
        validate: false,
        message: 'CPF inválido',
      };
    }

    d1 = 11 - (d1 % 11);

    if (d1 > 9) {
      d1 = 0;
    }

    if (dv.charAt(0) !== d1.toString()) {
      v = true;
      return {
        validate: false,
        message: 'CPF inválido',
      };
    }

    d1 *= 2;
    for (let i = 0; i < 9; i++) {
      d1 += parseInt(c.charAt(i)) * (11 - i);
    }

    d1 = 11 - (d1 % 11);
    if (d1 > 9) {
      d1 = 0;
    }

    if (dv.charAt(1) !== d1.toString()) {
      v = true;
      return {
        validate: false,
        message: 'CPF inválido',
      };
    }

    if (!v) {
      return null;
    }
  }
  return null;
}
