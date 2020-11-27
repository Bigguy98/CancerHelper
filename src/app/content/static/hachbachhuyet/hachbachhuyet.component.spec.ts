import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HachbachhuyetComponent } from './hachbachhuyet.component';

describe('HachbachhuyetComponent', () => {
  let component: HachbachhuyetComponent;
  let fixture: ComponentFixture<HachbachhuyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HachbachhuyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HachbachhuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
