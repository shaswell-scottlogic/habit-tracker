import { Injectable } from '@angular/core';
import { Habit } from '../models/habit';
import { of } from 'rxjs';

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
  private retrieveHabit(id: number) {
    return of({ name: 'Sleep all day', daysCompleted: [new Date(), new Date(), new Date(), new Date(), new Date(), new Date()] });
  }  
}
