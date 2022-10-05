import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilPageComponent } from './perfil-page/perfil-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PerfilPageComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    SharedModule
  ]
})
export class PerfilModule { }
