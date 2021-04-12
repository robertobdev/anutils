import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CnpjComponent } from './cnpj/cnpj.component';

import { CpfComponent } from './cpf/cpf.component';
import { EmailComponent } from './email/email.component';
import { MatchPasswordComponent } from './match-password/match-password.component';
import { PhoneComponent } from './phone/phone.component';
import { RequiredComponent } from './required/required.component';
import { ValidatorsComponent } from './validators.component';

const routes: Routes = [
  {
    path: '',
    component: ValidatorsComponent,
    children: [
      {
        path: 'cpf',
        component: CpfComponent,
      },
      {
        path: 'cnpj',
        component: CnpjComponent,
      },
      {
        path: 'phone',
        component: PhoneComponent,
      },
      {
        path: 'matchpasswords',
        component: MatchPasswordComponent,
      },
      {
        path: 'email',
        component: EmailComponent,
      },
      {
        path: 'required',
        component: RequiredComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidatorsRoutingModule {}
