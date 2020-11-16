import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserChildComponent } from './list-user-child.component';

describe('ListUserChildComponent', () => {
  let component: ListUserChildComponent;
  let fixture: ComponentFixture<ListUserChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
