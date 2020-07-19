import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FineReportsComponent } from './fine-reports.component';

describe('FineReportsComponent', () => {
  let component: FineReportsComponent;
  let fixture: ComponentFixture<FineReportsComponent>;

  beforeEach(async(() => {
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
