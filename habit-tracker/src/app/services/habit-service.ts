import { Injectable } from '@angular/core';
import { Habit } from '../models/habit';
import { Observable, of } from 'rxjs';
import { HabitPattern } from '../models/HabitPattern';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habitIds: number[] = [];
  habits: Map<number, Habit> = new Map();

  getHabitIds() {
    return this.habitIds.length > 0 ? of(this.habitIds) : this.retrieveHabitIds();
  }

  private retrieveHabitIds() {
    return of([123, 212, 323]);
  }
;

  // is it ok to make an observable of something in a map?
  getHabit(id: number) {
    return this.habits.has(id) ? of(this.habits.get(id)) : this.retrieveHabit(id)
  }

  // TODO: use httpResource?
  private retrieveHabit(id: number): Observable<Habit> {
    return of({
      name: 'Sleep all day',
      daysCompleted: [new Date("2025-07-14"), new Date("2025-07-15"), new Date("2025-07-16"), new Date("2025-07-17"), new Date("2025-07-18"), new Date("2025-07-20")],
      pattern: HabitPattern.DAILY
    });
  }  
}
