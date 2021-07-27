import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioCheckComponent } from './audio-check.component';

describe('AudioCheckComponent', () => {
  let component: AudioCheckComponent;
  let fixture: ComponentFixture<AudioCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
