import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/identity/User';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder,
    private accountService: AccountService,private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmePassword: ['', Validators.required],
    });
  }

  register(): void {
    let form = this.form.getRawValue();
    const user = { User : form };

    this.accountService.register(user).subscribe(
      () => this.router.navigateByUrl('/dashboard')
    );
  }
}
