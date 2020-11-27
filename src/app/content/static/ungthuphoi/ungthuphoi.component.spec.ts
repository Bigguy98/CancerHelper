import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UngthuphoiComponent } from './ungthuphoi.component';

describe('UngthuphoiComponent', () => {
  let component: UngthuphoiComponent;
  let fixture: ComponentFixture<UngthuphoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UngthuphoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UngthuphoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
