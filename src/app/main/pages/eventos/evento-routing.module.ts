import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosPageComponent } from './eventos-page/eventos-page.component';

const routes: Routes = [
  {
    path: '',
    component: EventosPageComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
