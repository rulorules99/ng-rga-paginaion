import { RgaMeta } from '../interfaces/interfaces';

export class Pagination {
  private getMethod: string;
  public meta: RgaMeta = {
    count: 0,
    currentPage: 0,
    perPage: 0,
    total: 0,
    totalPages: 0
  };
  public fieldSearchArray: string[] = ['name'];
  public fieldSearchType = 'like';
  public filters = {
    orderBy: '',
    sortedBy: '',
    search: '',
    searchFields: '',
    searchJoin: 'and'
  };

  public responseIsComplete = false;

  constructor(getMethod = 'get') {
    this.getMethod = getMethod;
  }

  /**
   * Trigger the sort for lists calling get list function
   * @param field: string
   * @return void
   */
  public onSortData (field: string): void {
    if (this.filters.orderBy !== field) {
      this.filters.orderBy = field;
      this.filters.sortedBy = 'desc';
    } else {
      this.filters.sortedBy = this.filters.sortedBy === 'asc' ? 'desc' : 'asc';
    }

    this[this.getMethod](this.buildFilters());
  }

  /**
   * Return the class for header list
   * @param field: string
   * @return string
   */
  public getSortIcon (field: string): string {
    return this.filters.orderBy !== field ? 'bp-unfold-more' :
    this.filters.orderBy === field && this.filters.sortedBy === 'desc' ? 'bp-expand-less' : 'bp-expand-more';
  }

  /**
   * Filter rows of list and call get list function
   * @param filterValue: string
   * @return void
   */
  public filterTableData (filterValue: string): void {

    this.filters.search = '';
    this.filters.searchFields = '';
    this.meta.currentPage = 1;

    if (filterValue) {
      this.fieldSearchArray.forEach( fieldSearch => {
        this.filters.search += `${fieldSearch}:${filterValue};`;
        this.filters.searchFields += `${fieldSearch}:${this.fieldSearchType};`;
      });
    }

    this[this.getMethod](this.buildFilters());
  }

  /**
   * Build a query params for get function list
   * @return string
   */
  public buildFilters(): string {

    let filterString = `?page=${this.meta.currentPage}`;

    for (const filter in this.filters) {
      if (this.filters[filter]) {
        filterString += `&${filter}=${this.filters[filter]}`;
      }
    }
    return filterString;
  }

  /**
   * Set meta data for pagination component
   * @param metaRequest: MetaResponse
   * @return void
   */
  public setMeta(metaRequest: RgaMeta): void {
    this.meta.count =  metaRequest.count;
    this.meta.currentPage = metaRequest.currentPage;
    this.meta.perPage =  metaRequest.perPage;
    this.meta.total =  metaRequest.total;
    this.meta.totalPages =  metaRequest.totalPages;
  }

  /**
   * Trigger next page for pagination
   * @return void
   */
  public nextPage(): void {
    if (this.meta.currentPage < this.meta.totalPages) {
      this.meta.currentPage++;
    }

    this[this.getMethod](this.buildFilters());
  }

  /**
   * Trigger prev page for pagination
   * @return void
   */
  public prevPage(): void {
    if (this.meta.currentPage > 1) {
      this.meta.currentPage--;
    }

    this[this.getMethod](this.buildFilters());
  }

  /**
   * Trigger last page for pagination
   * @return void
   */
  public lastPage(): void {
    this.meta.currentPage = this.meta.totalPages;
    this[this.getMethod](this.buildFilters());
  }

  /**
   * Trigger first page for pagination
   * @return void
   */
  public firstPage(): void {
    this.meta.currentPage = 1;
    this[this.getMethod](this.buildFilters());
  }

  /**
   * Trigger selected page for pagination
   * @param page: number
   * @return void
   */
  public goToPage(page: number): void {
    if (page) {
      if (page <= this.meta.totalPages) {
        this.meta.currentPage = page;
      } else {
        this.meta.currentPage = this.meta.totalPages;
      }
      this[this.getMethod](this.buildFilters());
    }
  }

  /**
   * Create default image style if the item has not an image uploaded
   * @param imageUrl: string | null
   * @return string
   */
  public setTableItemThumbnail (imageUrl: string | null) {
    return imageUrl === null
      ? '#FFF url(/assets/img/default_image.svg) center/cover no-repeat'
      : `#FFF url(${imageUrl}) center/cover no-repeat`;
  }
}
