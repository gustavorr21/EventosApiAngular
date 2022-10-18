import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserLogin } from 'src/app/shared/models/identity/UserLogin';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  model = {} as UserLogin;
  private unsub$ = new Subject();

  form: FormGroup | any;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        username: [null,[Validators.required]],
        password: [null, [Validators.required]],
    });
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

  public login(): void {
    let form = this.form.getRawValue();
    this.accountService.login(form).subscribe(
      () => {
        this.router.navigateByUrl('/dashboard');
      },
      (error: any) => {
        // if (error.status == 401)
          // this.toaster.error('usuário ou senha inválido');
        // else console.error(error);
      }
    );
  }
}
