import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
