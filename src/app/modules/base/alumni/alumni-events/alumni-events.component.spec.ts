import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlumniEventsComponent } from './alumni-events.component';

describe('AlumniEventsComponent', () => {
  let component: AlumniEventsComponent;
  let fixture: ComponentFixture<AlumniEventsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
