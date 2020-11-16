import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserParentComponent } from './create-user-parent.component';

describe('CreateUserParentComponent', () => {
  let component: CreateUserParentComponent;
  let fixture: ComponentFixture<CreateUserParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
