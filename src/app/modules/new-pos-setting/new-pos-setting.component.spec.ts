import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPosSettingComponent } from './new-pos-setting.component';

describe('NewPosSettingComponent', () => {
  let component: NewPosSettingComponent;
  let fixture: ComponentFixture<NewPosSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPosSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPosSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
