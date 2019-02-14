import { RgaMeta } from '../interfaces/interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lb-rga-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent {

  @Input() meta: RgaMeta;
  @Input() template;
  @Output() nextPage: EventEmitter<void> = new EventEmitter<void>();
  @Output() prevPage: EventEmitter<void> = new EventEmitter<void>();
  @Output() lastPage: EventEmitter<void> = new EventEmitter<void>();
  @Output() firstPage: EventEmitter<void> = new EventEmitter<void>();
  @Output() goToPage: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  /**
   * Show next page or last
   * @return boolean
   */
  public disableWhenLast(): boolean {
    return this.meta.currentPage === this.meta.totalPages;
  }

  /**
   * Show prev page or first
   * @return boolean
   */
  public disableWhenFirst(): boolean {
    return this.meta.currentPage === 1;
  }
}
