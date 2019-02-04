import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorydetailPage } from './categorydetail.page';

describe('CategorydetailPage', () => {
  let component: CategorydetailPage;
  let fixture: ComponentFixture<CategorydetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorydetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorydetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
