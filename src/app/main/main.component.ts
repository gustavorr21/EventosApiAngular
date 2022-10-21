import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../shared/models/auth/menu-item';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  itensMenu: MenuItem[] | any;
  userName: string | any;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.userName = this.accountService.userName;

    var keys: any[] = [];
    keys.push({'NAVIGATION_ITEMS_MAP' : '',})

    var menus: any[] = [];

    menus.push({displayName: 'eventos', description: 'descição',
      route: 'eventos',icon: 'dashboard',order: 'order',active: true,
    });
    menus.push({displayName: 'palestrante', description: 'palestrante',
      route: 'palestrante',icon: 'dashboard',order: 'order',active: false,
    });
    menus.push({displayName: 'perfil', description: 'perfil',
      route: 'perfil',icon: 'dashboard',order: 'order',active: false,
    });
    menus.push({displayName: 'contato', description: 'contato',
      route: 'contato',icon: 'dashboard',order: 'order',active: false,
    });

    this.itensMenu = menus
        // .filter(key => !!NAVIGATION_ITEMS_MAP[group[key][0].variable])
        .map(menu => {
          // const functionality = group[key][0];
          // const active = functionality.variable === 'Dashboard';
         debugger;
          return {
            displayName: menu.displayName,
            description: menu.description,
            route: menu.route,
            icon: menu.icon,
            order: menu.order,
            active: menu.active,
          };
        })
  }

}
