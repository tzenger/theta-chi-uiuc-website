import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FineReportsComponent } from './fine-reports.component';

describe('FineReportsComponent', () => {
  let component: FineReportsComponent;
  let fixture: ComponentFixture<FineReportsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FineReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FineReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
