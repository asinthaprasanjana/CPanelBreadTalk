import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedGraphComponent } from './archived-graph.component';

describe('ArchivedGraphComponent', () => {
  let component: ArchivedGraphComponent;
  let fixture: ComponentFixture<ArchivedGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
