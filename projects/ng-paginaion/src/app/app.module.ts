import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgRgaPaginaionModule } from 'ng-rga-paginaion';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgRgaPaginaionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
