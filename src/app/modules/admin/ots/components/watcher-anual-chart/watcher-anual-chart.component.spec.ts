/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WatcherAnualChartComponent } from './watcher-anual-chart.component';

describe('WatcherAnualChartComponent', () => {
  let component: WatcherAnualChartComponent;
  let fixture: ComponentFixture<WatcherAnualChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatcherAnualChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatcherAnualChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
