import { AbstractControl } from '@angular/forms';
import { IValidator } from './validators.interface';

export function ValidateTwitter(control: AbstractControl): IValidator | null {
  const REG_TWITTER = /^[a-zA-Z0-9_]{0,15}/i;
  const twitterValue = control.value as string;

  if (
    !twitterValue ||
    (twitterValue && REG_TWITTER.test(twitterValue.toLowerCase()))
  ) {
    return null;
  }
  return {
    validate: false,
    message: 'Twitter inválido',
  };
}
