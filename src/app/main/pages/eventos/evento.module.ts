import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { EventosPageComponent } from './eventos-page/eventos-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventosDetailComponent } from './eventos-detail/eventos-detail.component';
import { DialogDeleteEventoComponentComponent } from './dialog-delete-evento-component/dialog-delete-evento-component.component';


@NgModule({
  declarations: [
    EventosPageComponent,
    EventosDetailComponent,
    DialogDeleteEventoComponentComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule,
    SharedModule
  ]
})
export class EventoModule { }
