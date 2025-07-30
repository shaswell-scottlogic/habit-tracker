import { Component, inject, Pipe } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HabitService } from '../../services/habit-service';
import { CommonModule } from '@angular/common';
import { Layout } from '../../services/layout';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private habitService = inject(HabitService);
  layoutService = inject(Layout);
  habitIds = this.habitService.getHabitIds();
}
