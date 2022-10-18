import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/shared/models/auth/menu-item';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {

  @Input() itensMenu: MenuItem[] | any;
  @Input() userName: string | any;

  constructor(private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    // reset login status
    this.router.navigateByUrl('/signin');
    this.accountService.logout();
  }

}
