import { computed, inject, Injectable, Signal } from '@angular/core';
import { Habit } from '../models/habit';
import { map, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habitIds: number[] = [];
  habits: Map<number, Habit> = new Map();

  // set up current habit id using activated route
  private activatedRoute = inject(ActivatedRoute);

 // THIS SERVICE IS ONLY COMING INTO EXISTENCE WHEN ON HABIT PAGE?
 // how do nested routes manifest?

  constructor() {
    console.log('constructing habit-service');
    this.activatedRoute.params.subscribe((params) => {
      console.log(params)
    });
    // .pipe(
    //   takeUntilDestroyed(),
    //   map((params) => {
    //     console.log('blarp');
    //     console.log(params);
    //     console.log(this.activatedRoute.url);
    //     return params
    //   })
    // ).subscribe();
  }

  getHabitIds() {
    return this.habitIds.length > 0 ? of(this.habitIds) : this.retrieveHabitIds();
  }

  private retrieveHabitIds() {
    return of([1, 2, 3]);
  }

  currentHabit: Signal<number> = computed(() => {
    // use activated route
    console.log(this.activatedRoute);

    return 2;
  });

  // is it ok to make an observable of something in a map?
  getHabit(id?: number) {
    const idToUse = id ?? this.currentHabit();
    return this.habits.has(idToUse) ? of(this.habits.get(idToUse)) : this.retrieveHabit(idToUse)
  }

  private retrieveHabit(id: number) {
    return of({ name: '', daysCompleted: [new Date()] });
  }
}
