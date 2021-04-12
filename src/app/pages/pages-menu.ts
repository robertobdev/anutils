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
      {
        title: 'Cnpj Mask',
        link: '/directives/cnpjmask',
      },
      {
        title: 'Phone Mask',
        link: '/directives/phonemask',
      },
      {
        title: 'Shimmer',
        link: '/directives/shimmer',
      },
      {
        title: 'Zipcode Mask',
        link: '/directives/zipcodemask',
      },
    ],
  },
  {
    title: 'Validators',
    icon: 'layout-outline',
    children: [
      {
        title: 'Cpf',
        link: '/validators/cpf',
      },
      {
        title: 'Cnpj',
        link: '/validators/cnpj',
      },
      {
        title: 'Phone',
        link: '/validators/phone',
      },
      {
        title: 'Match Passwords',
        link: '/validators/matchpasswords',
      },
      {
        title: 'Date greater than',
        link: '/validators/dategreaterthan',
      },
      {
        title: 'Email',
        link: '/validators/email',
      },
      {
        title: 'Required',
        link: '/validators/required',
      },
      {
        title: 'Zipcode',
        link: '/validators/zipcode',
      },
    ],
  },
];
