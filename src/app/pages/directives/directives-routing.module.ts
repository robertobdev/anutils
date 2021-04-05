import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpfComponent } from './cpf/cpf.component';
import { DirectivesComponent } from './directives.component';
const routes: Routes = [
  {
    path: '',
    component: DirectivesComponent,
    children: [
      {
        path: 'cpfmask',
        component: CpfComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivesRoutingModule {}
