import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Native Pipes',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Basics',
            icon: 'pi pi-fw pi-box',
            routerLink: '/'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-fw pi-hashtag',
            routerLink: 'numbers'
          },
          {
            label: 'Uncommon',
            icon: 'pi pi-fw pi-exclamation-circle',
            routerLink: 'uncommon'
          }
        ]
      },
      {
        label: 'Customized pipes',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Order pipes',
            icon: 'pi pi-fw pi-align-left',
            routerLink: 'orderpipes'
          }
        ]
      }
    ];

  }

}
