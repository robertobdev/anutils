import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfMaskDirective } from './cpf-mask/cpf-mask.directive';

@NgModule({
  declarations: [CpfMaskDirective],
  imports: [CommonModule],
  exports: [CpfMaskDirective],
})
export class DirectivesModule {}
