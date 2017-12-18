import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigniinComponent } from './signiin.component';

describe('SigniinComponent', () => {
  let component: SigniinComponent;
  let fixture: ComponentFixture<SigniinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigniinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigniinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
