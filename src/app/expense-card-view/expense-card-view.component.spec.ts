import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCardViewComponent } from './expense-card-view.component';

describe('ExpenseCardViewComponent', () => {
  let component: ExpenseCardViewComponent;
  let fixture: ComponentFixture<ExpenseCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
