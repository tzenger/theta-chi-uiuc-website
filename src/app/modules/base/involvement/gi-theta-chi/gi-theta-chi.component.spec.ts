import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GiThetaChiComponent } from './gi-theta-chi.component';

describe('GiThetaChiComponent', () => {
  let component: GiThetaChiComponent;
  let fixture: ComponentFixture<GiThetaChiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiThetaChiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiThetaChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
