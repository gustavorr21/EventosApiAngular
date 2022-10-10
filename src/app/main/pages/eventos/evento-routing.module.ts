import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosDetailComponent } from './eventos-detail/eventos-detail.component';
import { EventosPageComponent } from './eventos-page/eventos-page.component';

const routes: Routes = [
  {
    path: '',
    component: EventosPageComponent,
  },
  {
    path: 'novo',
    component: EventosDetailComponent,
  },
  {
    path: ':id',
    component: EventosDetailComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
