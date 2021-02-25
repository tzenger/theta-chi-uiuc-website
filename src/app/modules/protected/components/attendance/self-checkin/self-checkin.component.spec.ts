import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelfCheckinComponent } from './self-checkin.component';

describe('SelfCheckinComponent', () => {
  let component: SelfCheckinComponent;
  let fixture: ComponentFixture<SelfCheckinComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
