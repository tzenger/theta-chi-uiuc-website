import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewMemberComponent } from './view-member.component';

describe('ViewMemberComponent', () => {
  let component: ViewMemberComponent;
  let fixture: ComponentFixture<ViewMemberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
