import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastmovingGraphComponent } from './fastmoving-graph.component';

describe('FastmovingGraphComponent', () => {
  let component: FastmovingGraphComponent;
  let fixture: ComponentFixture<FastmovingGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastmovingGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastmovingGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
