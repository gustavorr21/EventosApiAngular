import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
