# NgRgaPaginaion

A package in angular to integrate with API
 
## Getting Started

You need `Angular CLI` greater or equal to `v7`
if yo don't have it you can check [here](https://angular.io/cli/update) or [here](https://update.angular.io/)

### Installing

```
npm i ng-rga-paginaion --save
```

### Usage

In[*app.module.ts*](https://gthub.com/rulorules99/ng-rga-paginaion/blob/master/projects/ng-paginaion/src/app/app.module.ts): add

Import the module:
```javascript
import { NgRgaPaginaionModule } from 'ng-rga-paginaion';
```
Add `NgRgaPaginaionModule` to NgModule imports:
```javascript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    NgRgaPaginaionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
In our [*component*](https://github.com/rulorules99/ng-rga-paginaion/blob/master/projects/ng-paginaion/src/app/components-examples/ex-normal-table/ex-normal-table.component.ts) class add the next:
```javascript
@Component({
  ...
})
export class Example  extends Pagination
```
In consturctor add:
```javascript
constructor() { super(); }
```
You must add a service function to called every time when user select between pages
and name function as `get` with params like `params: string = ''`:
```javascript
public get(params: string = ''): void {
    this.http.get<any>(`https://reqres.in/api/users${params}`).toPromise().then(response);
}
```
When api request response you need to set the meta pagination data from the API:
the meta must be a `RgaMeta` type:
```javascript
public get(params: string = ''): void {
    (...).then(response => {
      const data = response.data;
      const meta: RgaMeta = {
        count: response.data.length,
        currentPage: response.page,
        perPage: response.per_page,
        total: response.total,
        totalPages: response.total_pages,
      };
      this.data = data;
      this.setMeta(meta);
    });
}
```
If you want call a list service when components init add this in `ngOnInit` angular function:
```javascript
ngOnInit() {
    this.get(this.buildFilters());
}
```

#### HTML [component](https://github.com/rulorules99/ng-rga-paginaion/blob/master/projects/ng-paginaion/src/app/components-examples/ex-normal-table/ex-normal-table.component.html)

For search input add:
```html
<lb-rga-table-searchbar (inputKeyUp)="filterTableData($event)"> </lb-rga-table-searchbar>
```

For pagination actions add:
```html
 <lb-rga-table-pagination
          [meta]="meta"
          (nextPage)="nextPage()"
          (prevPage)="prevPage()"
          (lastPage)="lastPage()"
          (firstPage)="firstPage()"
          (goToPage)="goToPage($event)"
          *ngIf="meta.totalPages > 1">
  </lb-rga-table-pagination>
```

For body the functions `onSortData` and `getSortIcon` must get as a param the name of field that API required:
```html
<table>
    <tr>
      <th (click)="onSortData('field_one')"> <mat-icon [svgIcon]="getSortIcon('field_one')"></mat-icon>Id</th>
      <th (click)="onSortData('field_two')"> <mat-icon [svgIcon]="getSortIcon('field_two')"></mat-icon>Avatar</th>
    </tr>
    <tr *ngFor="let row of data">
      <td>{{row.field_one}}</td>
      <td>{{row.field_two}}</td>
    </tr>
  </table>
```
## Final examples

### Example.component.ts
Finally in our component we have te next:

```javascript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagination, RgaMeta } from 'ng-rga-paginaion';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class Example  extends Pagination implements OnInit {
  public data: any[] = [];
  constructor(private http: HttpClient) { super(); }

  ngOnInit() {
    this.get(this.buildFilters());
  }

  public get(params: string = '') {
    this.http.get<any>(`https://reqres.in/api/users${params}`)
    .toPromise()
    .then(response => {
      const data = response.data;
      const meta: RgaMeta = {
        count: response.data.length,
        currentPage: response.page,
        perPage: response.per_page,
        total: response.total,
        totalPages: response.total_pages,
      };
      this.data = data;
      this.setMeta(meta);
    });
  }
}
```

### Example.component.html
Finally in our html we have te next:
```html
<lb-rga-table-searchbar (inputKeyUp)="filterTableData($event)"> </lb-rga-table-searchbar>

<table>
  <tr>
    <th (click)="onSortData('field_one')"> <mat-icon [svgIcon]="getSortIcon('field_one')"></mat-icon>Id</th>
    <th (click)="onSortData('field_two')"> <mat-icon [svgIcon]="getSortIcon('field_two')"></mat-icon>Avatar</th>
  </tr>
  <tr *ngFor="let row of data">
    <td>{{row.field_one}}</td>
    <td>{{row.field_two}}</td>
  </tr>
</table>
  
<lb-rga-table-pagination
         [meta]="meta"
         (nextPage)="nextPage()"
         (prevPage)="prevPage()"
         (lastPage)="lastPage()"
         (firstPage)="firstPage()"
         (goToPage)="goToPage($event)"
         *ngIf="meta.totalPages > 1">
</lb-rga-table-pagination>
```