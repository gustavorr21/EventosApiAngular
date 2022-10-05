import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalestrantePageComponent } from './palestrante-page/palestrante-page.component';

const routes: Routes = [
  {
    path: '',
    component: PalestrantePageComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalestranteRoutingModule { }
