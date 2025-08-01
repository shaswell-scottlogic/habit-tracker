import { Component, computed, inject, Input } from '@angular/core';
import { HabitService } from '../../services/habit-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { BlobView } from "../blob-view/blob-view";
import { GridView } from "../grid-view/grid-view";
import { HabitPattern } from '../../models/HabitPattern';

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

  slotData = computed(() => {
    // TODO: add util that fills in dates between dates
    const dates = this.habit()?.daysCompleted ?? [];
    dates.sort();

    // const first = dates[0];
    // const last = dates[dates.length-1];

    // OR, check between now-31 and now
    // make an array of all the pattern dates and map it to fill in
    // for each date, if it appears in days completed then true, else false?
    // grid version... maybe AG grid can do it

    const today = new Date();

    let data: Slot[] = [];
    for (let index = 30; index >= 0; index--) {
      const indexDate = today;

      data.push({
        date: indexDate, // TODO: take off index days
        complete: dates.includes(indexDate) // TODO: dates won't be exact same?
      });      
    };

    // now for each date in data...
    
    switch (this.habit()?.pattern) {
      case HabitPattern.DAILY:
        
        break;
    
      default:
        // ??
        break;
    }

    // get first and last date
    // calculate from pattern what dates should be in there
    // check if they are
    // ignore extras? or put them in anyway
    return this.habit()?.daysCompleted.map((date) => ({complete: true, date})) ?? [];
  });

  judgement = computed(() => {
    const days = this.habit()?.daysCompleted;
    if( days && days.length > 5) {
      return 'SMASHING IT';
    }

    return 'FAILING HORRIBLY';
  });
}
