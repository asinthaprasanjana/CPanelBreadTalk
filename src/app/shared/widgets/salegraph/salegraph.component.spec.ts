import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalegraphComponent } from './salegraph.component';

describe('SalegraphComponent', () => {
  let component: SalegraphComponent;
  let fixture: ComponentFixture<SalegraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalegraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
