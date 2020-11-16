import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserChildrenComponent } from './create-user-children.component';

describe('CreateUserChildrenComponent', () => {
  let component: CreateUserChildrenComponent;
  let fixture: ComponentFixture<CreateUserChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
