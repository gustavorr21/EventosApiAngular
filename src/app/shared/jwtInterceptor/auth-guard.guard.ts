import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router,
    private accountService: AccountService) { }

  async canActivate(){
    const {token} = this.accountService.getAuthData();

    if (!token) {
      this.router.navigate(['/signin']);
      return false;
    }

    return true;
  }

}
