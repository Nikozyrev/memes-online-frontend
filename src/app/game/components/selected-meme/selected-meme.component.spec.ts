import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMemeComponent } from './selected-meme.component';

describe('SelectedMemeComponent', () => {
  let component: SelectedMemeComponent;
  let fixture: ComponentFixture<SelectedMemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedMemeComponent]
    });
    fixture = TestBed.createComponent(SelectedMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
