import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { CpfComponent } from './cpf/cpf.component';
import { DirectivesComponent } from './directives.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnutilsDirectivesModule } from 'projects/anutils/directives/anutils-directives.module';

@NgModule({
  declarations: [CpfComponent, DirectivesComponent],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    SharedModule,
    AnutilsDirectivesModule,
  ],
})
export class DirectivesModule {}
