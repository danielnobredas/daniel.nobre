import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SociaisComponent } from './sociais/sociais.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SociaisComponent,
    LoadingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
