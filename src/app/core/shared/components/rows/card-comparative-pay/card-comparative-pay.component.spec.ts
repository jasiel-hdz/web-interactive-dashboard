/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardComparativePayComponent } from './card-comparative-pay.component';

describe('CardComparativePayComponent', () => {
  let component: CardComparativePayComponent;
  let fixture: ComponentFixture<CardComparativePayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComparativePayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComparativePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
