import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PledgeClassesComponent } from './pledge-classes.component';

describe('PledgeClassesComponent', () => {
  let component: PledgeClassesComponent;
  let fixture: ComponentFixture<PledgeClassesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PledgeClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PledgeClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
