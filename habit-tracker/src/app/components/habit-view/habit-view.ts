import { Component, computed, inject, Input } from '@angular/core';
import { HabitService } from '../../services/habit-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { BlobView } from "../blob-view/blob-view";
import { GridView } from "../grid-view/grid-view";

@Component({
  selector: 'app-habit-view',
  imports: [MatTabGroup, MatTab, BlobView, GridView],
  templateUrl: './habit-view.html',
  styleUrl: './habit-view.scss'
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
