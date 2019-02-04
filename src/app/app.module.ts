import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LibModule } from 'lib';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
