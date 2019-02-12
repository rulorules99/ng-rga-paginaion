import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExMatTableComponent } from './ex-mat-table.component';

describe('ExMatTableComponent', () => {
  let component: ExMatTableComponent;
  let fixture: ComponentFixture<ExMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExMatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
