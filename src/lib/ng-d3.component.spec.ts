import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgD3Component } from './ng-d3.component';

describe('NgD3Component', () => {
  let component: NgD3Component;
  let fixture: ComponentFixture<NgD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
