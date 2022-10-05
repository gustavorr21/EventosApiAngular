import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { EventoService } from './shared/services/evento.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { NgxMaskModule } from 'ngx-mask';
// import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, POSITION, SPINNER } from 'ngx-ui-loader';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { RouterModule } from '@angular/router';

const MOMENT_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY'
  },
};

const toastrConfig = {
  positionClass: 'toast-top-center',
  preventDuplicates: true
};

const ngxUiLoaderConfig = {
  bgsOpacity: 0.5,
  bgsType: SPINNER.threeBounce,
  bgsPosition: POSITION.centerCenter,
  bgsColor: '#846ea0',
  fgsType: SPINNER.threeBounce,
  fgsPosition: POSITION.centerCenter,
  fgsColor: '#846ea0',
  fgsSize: 0,
  pbColor: '#846ea0',
  logoUrl: './assets/img/anima-logo-124.gif',
  blur: 1,
};

const ngxUiLoaderHttpConfig = {
  showForeground: true
};

const ngxCurrencyConfig = {
  align: 'right',
  allowNegative: true,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
  nullable: true
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,

    ReactiveFormsModule,

    HttpClientModule,

    NgxMaskModule.forRoot(),
    // ToastrModule.forRoot(toastrConfig),

    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot(ngxUiLoaderHttpConfig),
    // NgxCurrencyModule.forRoot(ngxCurrencyConfig)
  ],
  providers: [EventoService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: false } },
    { provide: MAT_DATE_FORMATS, useValue: MOMENT_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter },
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false } }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
