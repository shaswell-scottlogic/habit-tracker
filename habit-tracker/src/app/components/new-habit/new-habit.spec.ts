import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHabit } from './new-habit';

describe('NewHabit', () => {
  let component: NewHabit;
  let fixture: ComponentFixture<NewHabit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewHabit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHabit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
