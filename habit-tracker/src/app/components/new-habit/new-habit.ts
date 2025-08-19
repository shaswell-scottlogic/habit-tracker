import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HabitPattern } from '../../models/HabitPattern';

@Component({
  selector: 'app-new-habit',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './new-habit.html',
  styleUrl: './new-habit.scss'
})
export class NewHabit {
  frequencyOptions = [HabitPattern.DAILY, HabitPattern.EVERY_OTHER, HabitPattern.EVERY_SEVEN];
}
