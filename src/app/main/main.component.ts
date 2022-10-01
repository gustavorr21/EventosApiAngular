import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../shared/models/auth/menu-item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  itensMenu: MenuItem[] | any;
  userName: string | any;

  constructor() { }

  ngOnInit(): void {
    this.userName = 'teste';

    var keys: any[] = [];
    keys.push({'NAVIGATION_ITEMS_MAP' : '',})

    this.itensMenu = keys
        // .filter(key => !!NAVIGATION_ITEMS_MAP[group[key][0].variable])
        .map(key => {
          // const functionality = group[key][0];
          // const active = functionality.variable === 'Dashboard';

          return {
            displayName: 'eventos',
            description: 'descição',
            route: 'eventos',
            icon: 'dashboard',
            order: 'order',
            active: true
          };
        })
  }

}
