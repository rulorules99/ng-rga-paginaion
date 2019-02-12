import { Service } from '../../service';
import { Component, OnInit } from '@angular/core';
import { BodyResponse, Data } from '../../body-response';
import { MatTableDataSource } from '@angular/material';
import { Pagination, RgaMeta } from 'ng-rga-paginaion';

@Component({
  selector: 'app-ex-mat-table',
  templateUrl: './ex-mat-table.component.html',
  styleUrls: ['./ex-mat-table.component.css']
})
export class ExMatTableComponent extends Pagination implements OnInit {

  public displayedColumns: string[] = ['id', 'avatar', 'first_name', 'last_name' ];
  public dataSource: MatTableDataSource<Data> = new MatTableDataSource([]);

  constructor(private service: Service) { super(); }

  public ngOnInit(): void {
    this.get(this.buildFilters());
  }

  /**
   * Call service to get a list
   * @param params: string
   * @return void
   */
  public get(params: string = ''): void {
    this.responseIsComplete = false;
    this.service.get(params).then(this.setData.bind(this));
  }

  /**
   * Set data from get list
   * @param response: BodyResponse
   * @return void
   */
  public setData(response: BodyResponse): void {
    const data = response.data;
    const meta: RgaMeta = {
      count: response.data.length,
      currentPage: response.page,
      perPage: response.per_page,
      total: response.total,
      totalPages: response.total_pages,
    };
    this.dataSource = new MatTableDataSource(data);
    this.setMeta(meta);
    this.responseIsComplete = true;
  }
}
