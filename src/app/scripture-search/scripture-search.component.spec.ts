import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptureSearchComponent } from './scripture-search.component';

describe('ScriptureSearchComponent', () => {
  let component: ScriptureSearchComponent;
  let fixture: ComponentFixture<ScriptureSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptureSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptureSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
