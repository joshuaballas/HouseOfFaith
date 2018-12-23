import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeBelieveComponent } from './what-we-believe.component';

describe('WhatWeBelieveComponent', () => {
  let component: WhatWeBelieveComponent;
  let fixture: ComponentFixture<WhatWeBelieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWeBelieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeBelieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
