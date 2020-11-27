import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UngthuComponent } from './ungthu.component';

describe('UngthuComponent', () => {
  let component: UngthuComponent;
  let fixture: ComponentFixture<UngthuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UngthuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UngthuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
