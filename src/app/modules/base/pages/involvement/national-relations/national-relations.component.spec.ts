import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NationalRelationsComponent } from './national-relations.component';

describe('NationalRelationsComponent', () => {
  let component: NationalRelationsComponent;
  let fixture: ComponentFixture<NationalRelationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalRelationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
