import { Component, OnInit, Input} from '@angular/core';
import { MenuItem } from 'src/app/shared/models/auth/menu-item';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  
  @Input() itensMenu: MenuItem[] | any;
  @Input() userName: string | any;

  constructor() { }

  ngOnInit(): void {
  }
  logout(): void {
    // reset login status
    // this.authService.ssoLogout();
  }

}
