import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CnpjComponent } from './cnpj/cnpj.component';
import { CpfComponent } from './cpf/cpf.component';
import { DirectivesComponent } from './directives.component';
import { PhoneComponent } from './phone/phone.component';
import { ShimmerComponent } from './shimmer/shimmer.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';
const routes: Routes = [
  {
    path: '',
    component: DirectivesComponent,
    children: [
      {
        path: 'cpfmask',
        component: CpfComponent,
      },
      {
        path: 'cnpjmask',
        component: CnpjComponent,
      },
      {
        path: 'phonemask',
        component: PhoneComponent,
      },
      {
        path: 'zipcodemask',
        component: ZipcodeComponent,
      },
      {
        path: 'shimmer',
        component: ShimmerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivesRoutingModule {}
