import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserParentComponent } from './list-user-parent.component';

describe('ListUserParentComponent', () => {
  let component: ListUserParentComponent;
  let fixture: ComponentFixture<ListUserParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
