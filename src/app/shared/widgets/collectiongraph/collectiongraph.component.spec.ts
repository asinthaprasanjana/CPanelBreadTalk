import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiongraphComponent } from './collectiongraph.component';

describe('CollectiongraphComponent', () => {
  let component: CollectiongraphComponent;
  let fixture: ComponentFixture<CollectiongraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectiongraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiongraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
