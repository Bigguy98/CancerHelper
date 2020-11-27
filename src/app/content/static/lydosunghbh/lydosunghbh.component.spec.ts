import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LydosunghbhComponent } from './lydosunghbh.component';

describe('LydosunghbhComponent', () => {
  let component: LydosunghbhComponent;
  let fixture: ComponentFixture<LydosunghbhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LydosunghbhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LydosunghbhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
