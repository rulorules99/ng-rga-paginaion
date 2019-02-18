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

  /**
   * Emmit next page
   * @return void
   */
  public next(): void {
    this.nextPage.emit();
  }

  /**
   * Emmit prev page
   * @return void
   */
  public prev(): void {
    this.prevPage.emit();
  }

  /**
   * Emmit last page
   * @return void
   */
  public last(): void {
    this.lastPage.emit();
  }

  /**
   * Emmit first page
   * @return void
   */
  public first(): void {
    this.firstPage.emit();
  }

  /**
   * Emmit go to page
   * @param page: number
   * @return void
   */
  public goTo(page: number): void {
    this.goToPage.emit(page);
  }
}
