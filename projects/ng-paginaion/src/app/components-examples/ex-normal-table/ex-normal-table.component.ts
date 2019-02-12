import { Service } from '../../service';
import { Component, OnInit } from '@angular/core';
import { Pagination, RgaMeta } from 'ng-rga-paginaion';
import { BodyResponse, Data } from '../../body-response';

@Component({
  selector: 'app-ex-normal-table',
  templateUrl: './ex-normal-table.component.html',
  styleUrls: ['./ex-normal-table.component.css']
})
export class ExNormalTableComponent  extends Pagination implements OnInit {
  public data: Data[] = [];
  constructor(private service: Service) { super('customGet'); }

  public ngOnInit(): void {
    this.customGet(this.buildFilters());
  }

  /**
   * Call service to get a list
   * @param params: string
   * @return void
   */
  public customGet(params: string = ''): void {
    this.responseIsComplete = false;
    this.service.customGet(params).then(this.setData.bind(this));
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
    this.data = data;
    this.setMeta(meta);
    this.responseIsComplete = true;
  }
}
