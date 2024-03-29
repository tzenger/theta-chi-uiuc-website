import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhilanthropyComponent } from './philanthropy.component';

describe('PhilanthropyComponent', () => {
  let component: PhilanthropyComponent;
  let fixture: ComponentFixture<PhilanthropyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhilanthropyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilanthropyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
