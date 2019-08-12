import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotableAlumniComponent } from './notable-alumni.component';

describe('NotableAlumniComponent', () => {
  let component: NotableAlumniComponent;
  let fixture: ComponentFixture<NotableAlumniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotableAlumniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotableAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
