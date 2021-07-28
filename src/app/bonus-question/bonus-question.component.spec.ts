import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusQuestionComponent } from './bonus-question.component';

describe('BonusQuestionComponent', () => {
  let component: BonusQuestionComponent;
  let fixture: ComponentFixture<BonusQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
