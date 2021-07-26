import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCompontent } from './register.component';

describe('SignUpComponent', () => {
  let component: RegisterCompontent;
  let fixture: ComponentFixture<RegisterCompontent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCompontent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCompontent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
