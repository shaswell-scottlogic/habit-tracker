import { Component, inject, signal, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitService } from '../../services/habit-service';

@Component({
  selector: 'app-habit',
  imports: [RouterOutlet],
  templateUrl: './habit.html',
  styleUrl: './habit.scss'
})
export class Habit {
  // do I get the route here and extract the ID or do I have the habit service know which one is current?
  private habitService = inject(HabitService);
  private habit = this.habitService.getHabit(); // TODO: what is the type?
}
