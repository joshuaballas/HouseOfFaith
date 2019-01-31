import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsackWanjohiComponent } from './isack-wanjohi.component';

describe('IsackWanjohiComponent', () => {
  let component: IsackWanjohiComponent;
  let fixture: ComponentFixture<IsackWanjohiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsackWanjohiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsackWanjohiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
