import { Component, computed, inject, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitService } from '../../services/habit-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-habit',
  imports: [RouterOutlet],
  templateUrl: './habit.html',
  styleUrl: './habit.scss'
})
export class HabitView {
  habitService = inject(HabitService);

  @Input() id!: number;
  habit = toSignal(this.habitService.getHabit(this.id));

  judgement = computed(() => {
    const days = this.habit()?.daysCompleted;
    if( days && days.length > 5) {
      return 'SMASHING IT';
    }

    return 'FAILING HORRIBLY';
  });
}
