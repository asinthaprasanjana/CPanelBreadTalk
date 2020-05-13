import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosSettingUpdateComponent } from './pos-setting-update.component';

describe('PosSettingUpdateComponent', () => {
  let component: PosSettingUpdateComponent;
  let fixture: ComponentFixture<PosSettingUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosSettingUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosSettingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
