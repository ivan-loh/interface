import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ClarityModule} from 'clarity-angular';
import {AppRoutingModule} from './app.routing';
import {FormsModule} from '@angular/forms';

import {AuthenticationService} from './services/authentication.service';

import {AuthGuard} from './auth.guard';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NotFoundComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ClarityModule.forRoot(),
    AppRoutingModule
  ],

  providers: [
    AuthenticationService,
    AuthGuard
  ],

  bootstrap: [
    AppComponent
  ]

})
export class AppModule {
}
