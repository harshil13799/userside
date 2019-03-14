import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastorderdetailPage } from './pastorderdetail.page';

describe('PastorderdetailPage', () => {
  let component: PastorderdetailPage;
  let fixture: ComponentFixture<PastorderdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastorderdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorderdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
