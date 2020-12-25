import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuesModalComponent } from './create-ques-modal.component';

describe('CreateQuesModalComponent', () => {
  let component: CreateQuesModalComponent;
  let fixture: ComponentFixture<CreateQuesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
