import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatorsRoutingModule } from './validators-routing.module';
import { CpfComponent } from './cpf/cpf.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ValidatorsComponent } from './validators.component';
import { AnutilsDirectivesModule } from 'projects/anutils/directives/anutils-directives.module';

@NgModule({
  declarations: [CpfComponent, ValidatorsComponent],
  imports: [
    CommonModule,
    ValidatorsRoutingModule,
    SharedModule,
    AnutilsDirectivesModule,
  ],
})
export class ValidatorsModule {}
