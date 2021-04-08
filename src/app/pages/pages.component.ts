import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';
@Component({
  selector: 'app-pages',
  template: `
    <app-one-column [menus]="menus">
      <router-outlet></router-outlet>
    </app-one-column>
  `,
})
export class PagesComponent {
  menus = MENU_ITEMS;
}
