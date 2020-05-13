import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePOSComponent } from './manage-pos.component';

describe('ManagePOSComponent', () => {
  let component: ManagePOSComponent;
  let fixture: ComponentFixture<ManagePOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
