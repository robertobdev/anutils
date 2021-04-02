import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfMaskDirective } from './cpf-mask/cpf-mask.directive';
import { CnpjMaskDirective } from './cnpj-mask/cnpj-mask.directive';
import { PhoneMaskDirective } from './phone-mask/phone-mask.directive';

@NgModule({
  declarations: [CpfMaskDirective, CnpjMaskDirective, PhoneMaskDirective],
  imports: [CommonModule],
  exports: [CpfMaskDirective],
})
export class DirectivesModule {}
