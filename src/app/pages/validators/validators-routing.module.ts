import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CpfComponent } from './cpf/cpf.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidatorsRoutingModule {}
