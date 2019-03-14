import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastorderPage } from './pastorder.page';

describe('PastorderPage', () => {
  let component: PastorderPage;
  let fixture: ComponentFixture<PastorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastorderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
