import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitView } from './habit-view';

describe('Habit', () => {
  let component: HabitView;
  let fixture: ComponentFixture<HabitView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
