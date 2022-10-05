import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoPageComponent } from './contato-page/contato-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ContatoPageComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    SharedModule
  ]
})
export class ContatoModule { }
