import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PalestranteRoutingModule } from './palestrante-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { PalestrantePageComponent } from './palestrante-page/palestrante-page.component';


@NgModule({
  declarations: [PalestrantePageComponent],
  imports: [
    CommonModule,
    PalestranteRoutingModule,
    SharedModule
  ]
})
export class PalestranteModule { }
