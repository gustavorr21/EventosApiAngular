import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './shared/jwtInterceptor/auth-guard.guard';

const routes: Routes = [

  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {
    path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),

  },
  { path: '**', redirectTo: 'signin' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
