import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lb-rga-table-searchbar',
  templateUrl: './table-searchbar.component.html',
  styleUrls: ['./table-searchbar.component.css']
})
export class TableSearchbarComponent implements OnInit {
  value = '';
  @Output() inputKeyUp = new EventEmitter<string>();

  constructor() { }
  ngOnInit() {}

  onKeyUp (event) {
    this.value = event.target['value'];
    this.inputKeyUp.emit(this.value);

    if (event.which === 13 && this.value.length !== 0) {
      this.inputKeyUp.emit(this.value);
    }
  }

  onSearch () {
    this.inputKeyUp.emit(this.value);
  }

  clear () {
    this.value = '';
    this.inputKeyUp.emit(this.value);
  }

  search() {
    console.log('in build....');
  }
}
