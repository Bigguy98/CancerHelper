import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivalMonthComponent } from './survival-month.component';

describe('SurvivalMonthComponent', () => {
  let component: SurvivalMonthComponent;
  let fixture: ComponentFixture<SurvivalMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivalMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivalMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
