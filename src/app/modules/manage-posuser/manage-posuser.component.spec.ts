import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePOSUserComponent } from './manage-posuser.component';

describe('ManagePOSUserComponent', () => {
  let component: ManagePOSUserComponent;
  let fixture: ComponentFixture<ManagePOSUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePOSUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePOSUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
