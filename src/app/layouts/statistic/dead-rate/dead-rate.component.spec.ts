import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadRateComponent } from './dead-rate.component';

describe('DeadRateComponent', () => {
  let component: DeadRateComponent;
  let fixture: ComponentFixture<DeadRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
