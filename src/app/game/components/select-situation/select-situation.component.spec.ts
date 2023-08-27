import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSituationComponent } from './select-situation.component';

describe('SelectSituationComponent', () => {
  let component: SelectSituationComponent;
  let fixture: ComponentFixture<SelectSituationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectSituationComponent]
    });
    fixture = TestBed.createComponent(SelectSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
