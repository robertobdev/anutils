import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CnpjComponent } from './cnpj/cnpj.component';

import { CpfComponent } from './cpf/cpf.component';
import { PhoneComponent } from './phone/phone.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidatorsRoutingModule {}
