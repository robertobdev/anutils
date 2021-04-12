import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatorsRoutingModule } from './validators-routing.module';
import { CpfComponent } from './cpf/cpf.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ValidatorsComponent } from './validators.component';
import { AnutilsDirectivesModule } from 'projects/anutils/directives/anutils-directives.module';
import { CnpjComponent } from './cnpj/cnpj.component';
import { PhoneComponent } from './phone/phone.component';
import { MatchPasswordComponent } from './match-password/match-password.component';
import { EmailComponent } from './email/email.component';
import { RequiredComponent } from './required/required.component';

@NgModule({
  declarations: [
    CpfComponent,
    ValidatorsComponent,
    CnpjComponent,
    PhoneComponent,
    MatchPasswordComponent,
    EmailComponent,
    RequiredComponent,
  ],
  imports: [
    CommonModule,
    ValidatorsRoutingModule,
    SharedModule,
    AnutilsDirectivesModule,
  ],
})
export class ValidatorsModule {}
