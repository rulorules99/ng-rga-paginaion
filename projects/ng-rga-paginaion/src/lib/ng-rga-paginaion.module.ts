import { NgModule } from '@angular/core';
import { NgRgaPaginaionComponent } from './ng-rga-paginaion.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [NgRgaPaginaionComponent, FooComponent],
  imports: [
  ],
  exports: [NgRgaPaginaionComponent, FooComponent]
})
export class NgRgaPaginaionModule { }
