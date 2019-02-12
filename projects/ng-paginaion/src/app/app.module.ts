import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { NgRgaPaginaionModule } from 'ng-rga-paginaion';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExMatTableComponent } from './components-examples/ex-mat-table/ex-mat-table.component';
import { ExNormalTableComponent } from './components-examples/ex-normal-table/ex-normal-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ExMatTableComponent,
    ExNormalTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    NgRgaPaginaionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
