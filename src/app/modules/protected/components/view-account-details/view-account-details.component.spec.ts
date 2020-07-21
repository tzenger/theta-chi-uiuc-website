import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountDetailsComponent } from './view-account-details.component';

describe('ViewAccountDetailsComponent', () => {
  let component: ViewAccountDetailsComponent;
  let fixture: ComponentFixture<ViewAccountDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccountDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
