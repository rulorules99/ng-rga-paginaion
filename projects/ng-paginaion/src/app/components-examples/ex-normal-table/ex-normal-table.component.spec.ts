import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExNormalTableComponent } from './ex-normal-table.component';

describe('ExNormalTableComponent', () => {
  let component: ExNormalTableComponent;
  let fixture: ComponentFixture<ExNormalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExNormalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExNormalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
