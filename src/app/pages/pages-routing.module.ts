import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'directives',
        loadChildren: () =>
          import('./directives/directives.module').then(
            (m) => m.DirectivesModule
          ),
      },
      {
        path: 'validators',
        loadChildren: () =>
          import('./validators/validators.module').then(
            (m) => m.ValidatorsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
