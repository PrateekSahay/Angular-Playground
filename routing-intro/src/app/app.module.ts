import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { HomeSupportComponent } from './home-support/home-support.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    PageNotFoundComponent,
    HomeProfileComponent,
    HomeSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
