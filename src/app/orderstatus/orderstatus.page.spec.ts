import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderstatusPage } from './orderstatus.page';

describe('OrderstatusPage', () => {
  let component: OrderstatusPage;
  let fixture: ComponentFixture<OrderstatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderstatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
