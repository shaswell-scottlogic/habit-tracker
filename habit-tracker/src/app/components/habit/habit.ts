import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HabitService } from '../../services/habit-service';
import { map, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-habit',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './habit.html',
  styleUrl: './habit.scss'
})
export class HabitView {
  habitService = inject(HabitService);
  private activatedRoute = inject(ActivatedRoute);

  id$ = this.activatedRoute.params.pipe(map(params => parseInt(params['id'])));
  habit = toSignal(this.id$.pipe(switchMap((id) => this.habitService.getHabit(id))));
}
