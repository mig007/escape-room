import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoAndDoComponent } from './go-and-do.component';

describe('GoAndDoComponent', () => {
  let component: GoAndDoComponent;
  let fixture: ComponentFixture<GoAndDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoAndDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoAndDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
