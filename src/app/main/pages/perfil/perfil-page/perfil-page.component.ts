import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserUpdate } from 'src/app/shared/models/identity/UserUpdate';
import { AccountService } from 'src/app/shared/services/account.service';
@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.scss']
})
export class PerfilPageComponent implements OnInit {
  userName!: string;
  descricao!: string;
  form: FormGroup | any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private accountService: AccountService
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.accountService.getUser()
    .subscribe((user: UserUpdate) => {
      this.userName = user.userName;
      this.descricao = user.descricao;
      this.form = this.formBuilder.group({
        user: this.formBuilder.group({
          id: [user.id],
          titulo: [user.titulo, [Validators.required]],
          userName: [user.userName, [Validators.required]],
          primeiroNome: [user.primeiroNome, [Validators.required]],
          ultimoNome: [user.ultimoNome, [Validators.required]],
          email: [user.email, [Validators.required]],
          phoneNumber: [user.phoneNumber, [Validators.required]],
          funcao: [user.funcao, [Validators.required]],
          descricao: [user.descricao, [Validators.required]],
          password: [null],
          // imagemURL: [null, [Validators.required]],
        }),
      });

    }, (error: any) => {
      // this.showToastError(error);
      this.router.navigate(['/dashboard']);
    });
  }


  atualizarUsuario() {
    var userUpdate = { ...this.form.value };

    this.accountService
      .updateUser(userUpdate)
      .subscribe(
        // () => this.toaster.success('Usuário atualizado!', 'Sucesso'),
        // (error) => {
        //   this.toaster.error(error.error);
        //   console.error(error);
        // }
      )
  }

}
