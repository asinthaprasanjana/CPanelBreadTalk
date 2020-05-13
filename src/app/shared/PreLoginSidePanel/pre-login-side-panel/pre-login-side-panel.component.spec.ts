import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLoginSidePanelComponent } from './pre-login-side-panel.component';

describe('PreLoginSidePanelComponent', () => {
  let component: PreLoginSidePanelComponent;
  let fixture: ComponentFixture<PreLoginSidePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreLoginSidePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLoginSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
