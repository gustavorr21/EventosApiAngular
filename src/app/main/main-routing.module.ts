import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'eventos',
        loadChildren: () =>
          import('./pages/eventos/evento.module').then((m) => m.EventoModule),
      },
      {
        path: 'palestrante',
        loadChildren: () =>
          import('./pages/palestrantes/palestrante.module').then((m) => m.PalestranteModule),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('./pages/perfil/perfil.module').then((m) => m.PerfilModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'contatos',
        loadChildren: () =>
          import('./pages/contatos/contato.module').then((m) => m.ContatoModule),
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
