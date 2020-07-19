import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmegafiComponent } from './omegafi.component';

describe('OmegafiComponent', () => {
  let component: OmegafiComponent;
  let fixture: ComponentFixture<OmegafiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmegafiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmegafiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
