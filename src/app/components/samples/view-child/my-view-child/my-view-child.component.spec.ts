import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyViewChildComponent } from './my-view-child.component';

describe('MyViewChildComponent', () => {
  let component: MyViewChildComponent;
  let fixture: ComponentFixture<MyViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
