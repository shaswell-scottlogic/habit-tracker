import { Component, inject, Pipe } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HabitService } from '../../services/habit-service';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, MatIcon],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private habitService = inject(HabitService);
  habitIds = this.habitService.getHabitIds();
}
