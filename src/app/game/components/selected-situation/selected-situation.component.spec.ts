import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSituationComponent } from './selected-situation.component';

describe('SelectedSituationComponent', () => {
  let component: SelectedSituationComponent;
  let fixture: ComponentFixture<SelectedSituationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedSituationComponent]
    });
    fixture = TestBed.createComponent(SelectedSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
