import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRgaPaginaionComponent } from './ng-rga-paginaion.component';

describe('NgRgaPaginaionComponent', () => {
  let component: NgRgaPaginaionComponent;
  let fixture: ComponentFixture<NgRgaPaginaionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRgaPaginaionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRgaPaginaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
