import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterGameControlsComponent } from './enter-game-controls.component';

describe('EnterGameControlsComponent', () => {
  let component: EnterGameControlsComponent;
  let fixture: ComponentFixture<EnterGameControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterGameControlsComponent]
    });
    fixture = TestBed.createComponent(EnterGameControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
