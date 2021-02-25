import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InvolvementMissionComponent } from './involvement-mission.component';

describe('InvolvementMissionComponent', () => {
  let component: InvolvementMissionComponent;
  let fixture: ComponentFixture<InvolvementMissionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolvementMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolvementMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
