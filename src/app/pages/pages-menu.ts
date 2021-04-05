import { MenuItem } from '../shared/interfaces/menu.interface';

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Directives',
    icon: 'layout-outline',
    children: [
      {
        title: 'Cpf Mask',
        link: '/directives/cpfmask',
      },
    ],
  },
];
