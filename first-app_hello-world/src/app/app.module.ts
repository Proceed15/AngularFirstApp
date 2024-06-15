// app.module.ts
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterLink, RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [
    //AppComponent,
    // other components, directives, and pipes
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    // other modules
  ],
  //bootstrap: [AppComponent],
})
export class AppModule {}
