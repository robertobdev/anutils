import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfMaskDirective } from './cpf-mask/cpf-mask.directive';
import { CnpjMaskDirective } from './cnpj-mask/cnpj-mask.directive';
import { PhoneMaskDirective } from './phone-mask/phone-mask.directive';
import { ZipCodeMaskDirective } from './zip-code-mask/zip-code-mask.directive';
import { ShimmerDirective } from './shimmer/shimmer.directive';

@NgModule({
  declarations: [
    CpfMaskDirective,
    CnpjMaskDirective,
    PhoneMaskDirective,
    ZipCodeMaskDirective,
    ShimmerDirective,
  ],
  imports: [CommonModule],
  exports: [
    CpfMaskDirective,
    CnpjMaskDirective,
    PhoneMaskDirective,
    ZipCodeMaskDirective,
    ShimmerDirective,
  ],
})
export class AnutilsDirectivesModule {}
