import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterpagePage } from './filterpage.page';

describe('FilterpagePage', () => {
  let component: FilterpagePage;
  let fixture: ComponentFixture<FilterpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
