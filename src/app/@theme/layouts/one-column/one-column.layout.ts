import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/shared/interfaces/menu.interface';

@Component({
  selector: 'app-one-column',
  templateUrl: './one-column.layout.html',
  styleUrls: ['./one-column.layout.scss'],
})
export class OneColumnLayoutComponent {
  @Input() menus: MenuItem[] = [];
}
