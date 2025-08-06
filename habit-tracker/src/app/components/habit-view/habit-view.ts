import { Component, computed, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { HabitService } from '../../services/habit-service';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { BlobView } from "../blob-view/blob-view";
import { GridView } from "../grid-view/grid-view";
import { HabitPattern } from '../../models/HabitPattern';
import { Habit } from '../../models/habit';
import { tap } from 'rxjs';

@Component({
  selector: 'app-habit-view',
  imports: [MatTabGroup, MatTab, BlobView, GridView],
  templateUrl: './habit-view.html',
  styleUrl: './habit-view.scss'
})
export class HabitView implements OnInit {
  habitService = inject(HabitService);

  @Input() id!: string;
  habit: WritableSignal<Habit | undefined> = signal(undefined);
  
  ngOnInit() {
    this.habitService.getHabit(this.id)
    .subscribe((value) => {
      this.habit.set(value);
    });
  }

  slotData = computed(() => {
    if (!this.habit()) {
      return [];
    }

    // TODO: date utils that set everything beyond days to zero?
    const dates = this.habit()?.daysCompleted ?? [];
    dates.sort();


    const today = new Date();

    // TODO: this doesn't really work for other patterns
    let dateInPattern;
    switch (this.habit()?.pattern) {
      case HabitPattern.DAILY:
        dateInPattern = (date: Date) => true;        
        break;
      default:
        dateInPattern = (date: Date) => false;
        break;
    }

    let data: Slot[] = [];
    for (let index = 30; index >= 0; index--) {
      const indexDate = new Date();
      indexDate.setDate(today.getDate()-index);

      // check if this date has completion marked
      const dateRecorded = dates.some((habitDate) => 
        habitDate.getDate() === indexDate.getDate() &&
        habitDate.getMonth() === indexDate.getMonth() &&
        habitDate.getFullYear() === indexDate.getFullYear()
      );

      data.push({
        date: indexDate,
        complete: dateRecorded ?? (dateInPattern(indexDate) ? false : undefined)
      });      
    };

    return data;
  });

  // TODO: nuance this - also calculate streak?
  // change depending on pattern
  judgement = computed(() => {
    const failDays = this.slotData().filter((slot) => slot.complete === false).length;
    if (failDays === 0 ) {
      return 'SMASHING IT';
    }
    if (failDays <= 5) {
      return 'doing well';
    }
    if (failDays <= 10
    ) {
      return 'doing ok';
    }
    return 'FAILING HORRIBLY';
  });
}
