import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyViewParentComponent } from './my-view-parent.component';

describe('MyViewParentComponent', () => {
  let component: MyViewParentComponent;
  let fixture: ComponentFixture<MyViewParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyViewParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyViewParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
