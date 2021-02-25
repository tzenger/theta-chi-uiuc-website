import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OutsideOfRhoComponent } from './outside-of-rho.component';

describe('OutsideOfRhoComponent', () => {
  let component: OutsideOfRhoComponent;
  let fixture: ComponentFixture<OutsideOfRhoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideOfRhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideOfRhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
