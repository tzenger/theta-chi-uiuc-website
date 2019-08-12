import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideOfRhoComponent } from './outside-of-rho.component';

describe('OutsideOfRhoComponent', () => {
  let component: OutsideOfRhoComponent;
  let fixture: ComponentFixture<OutsideOfRhoComponent>;

  beforeEach(async(() => {
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
