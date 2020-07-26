import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseJobComponent } from './house-job.component';

describe('HouseJobComponent', () => {
  let component: HouseJobComponent;
  let fixture: ComponentFixture<HouseJobComponent>;

  beforeEach(async(() => {
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
