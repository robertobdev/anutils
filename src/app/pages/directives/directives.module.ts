import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { CpfComponent } from './cpf/cpf.component';
import { DirectivesComponent } from './directives.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnutilsDirectivesModule } from 'projects/anutils/directives/anutils-directives.module';
import { CnpjComponent } from './cnpj/cnpj.component';
import { PhoneComponent } from './phone/phone.component';
import { ShimmerComponent } from './shimmer/shimmer.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';

@NgModule({
  declarations: [CpfComponent, DirectivesComponent, CnpjComponent, PhoneComponent, ShimmerComponent, ZipcodeComponent],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    SharedModule,
    AnutilsDirectivesModule,
  ],
})
export class DirectivesModule {}
