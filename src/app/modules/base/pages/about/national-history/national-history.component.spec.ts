import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalHistoryComponent } from './national-history.component';

describe('NationalHistoryComponent', () => {
  let component: NationalHistoryComponent;
  let fixture: ComponentFixture<NationalHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
