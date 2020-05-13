import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSettingsTableComponent } from './location-settings-table.component';

describe('LocationSettingsTableComponent', () => {
  let component: LocationSettingsTableComponent;
  let fixture: ComponentFixture<LocationSettingsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSettingsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSettingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
