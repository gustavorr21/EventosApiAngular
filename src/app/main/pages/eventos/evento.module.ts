import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { EventosPageComponent } from './eventos-page/eventos-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EventosPageComponent
  ],
  imports: [
    
    CommonModule,
    EventoRoutingModule,
    SharedModule
  ]
})
export class EventoModule { }
