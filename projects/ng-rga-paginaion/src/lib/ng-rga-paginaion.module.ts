import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgRgaPaginaionComponent } from './ng-rga-paginaion.component';
import { TableSearchbarComponent } from './table-searchbar/table-searchbar.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    NgRgaPaginaionComponent,
    TablePaginationComponent,
    TableSearchbarComponent
  ],
  exports: [
    NgRgaPaginaionComponent,
    TablePaginationComponent,
    TableSearchbarComponent
  ]
})
export class NgRgaPaginaionModule { }
