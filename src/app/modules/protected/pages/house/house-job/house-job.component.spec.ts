import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HouseJobComponent } from './house-job.component';

describe('HouseJobComponent', () => {
  let component: HouseJobComponent;
  let fixture: ComponentFixture<HouseJobComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
