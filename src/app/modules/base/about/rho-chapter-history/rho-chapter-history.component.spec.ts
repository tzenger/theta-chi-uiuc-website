import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RhoChapterHistoryComponent } from './rho-chapter-history.component';

describe('RhoChapterHistoryComponent', () => {
  let component: RhoChapterHistoryComponent;
  let fixture: ComponentFixture<RhoChapterHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RhoChapterHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhoChapterHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
