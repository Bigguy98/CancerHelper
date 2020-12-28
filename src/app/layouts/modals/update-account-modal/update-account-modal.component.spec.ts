import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountModalComponent } from './update-account-modal.component';

describe('UpdateAccountModalComponent', () => {
  let component: UpdateAccountModalComponent;
  let fixture: ComponentFixture<UpdateAccountModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccountModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
