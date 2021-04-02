import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfMaskDirective } from './cpf-mask/cpf-mask.directive';
import { CnpjMaskDirective } from './cnpj-mask/cnpj-mask.directive';

@NgModule({
  declarations: [CpfMaskDirective, CnpjMaskDirective],
  imports: [CommonModule],
  exports: [CpfMaskDirective],
})
export class DirectivesModule {}
