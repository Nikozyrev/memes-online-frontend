import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterGameComponent } from './enter-game.component';

describe('EnterGameComponent', () => {
  let component: EnterGameComponent;
  let fixture: ComponentFixture<EnterGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterGameComponent]
    });
    fixture = TestBed.createComponent(EnterGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
