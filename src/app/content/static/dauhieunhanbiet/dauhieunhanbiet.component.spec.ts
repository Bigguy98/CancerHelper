import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DauhieunhanbietComponent } from './dauhieunhanbiet.component';

describe('DauhieunhanbietComponent', () => {
  let component: DauhieunhanbietComponent;
  let fixture: ComponentFixture<DauhieunhanbietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DauhieunhanbietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DauhieunhanbietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
