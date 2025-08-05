import { Injectable } from '@angular/core';
import { Habit } from '../models/habit';
import { Observable, of } from 'rxjs';
import { HabitPattern } from '../models/HabitPattern';

const emptyHabit: Habit = {
  name: 'Do a thing',
  pattern: HabitPattern.DAILY,
  daysCompleted: []
}

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habits: Record<number, Habit>;

  constructor() {
    this.habits = {
      123: {
        name: 'Howling',
        daysCompleted: [
          new Date("2025-07-01"),
          new Date("2025-07-02"),
          new Date("2025-07-03"),
          new Date("2025-07-04"),
          new Date("2025-07-05"),
          new Date("2025-07-06"),
          new Date("2025-07-07"),
          new Date("2025-07-08"),
          new Date("2025-07-09"),
          new Date("2025-07-10"),
          new Date("2025-07-11"),
          new Date("2025-07-12"),
          new Date("2025-07-14"),
          new Date("2025-07-15"),
          new Date("2025-07-16"),
          new Date("2025-07-27"),
          new Date("2025-07-28"),
          new Date("2025-07-29"),
        ],
        pattern: HabitPattern.EVERY_OTHER
      },
      212: {
        name: 'Sleep all day',
        daysCompleted: [
          new Date("2025-07-01"),
          new Date("2025-07-02"),
          new Date("2025-07-03"),
          new Date("2025-07-04"),
          new Date("2025-07-05"),
          new Date("2025-07-06"),
          new Date("2025-07-07"),
          new Date("2025-07-08"),
          new Date("2025-07-09"),
          new Date("2025-07-10"),
          new Date("2025-07-11"),
          new Date("2025-07-12"),
          new Date("2025-07-14"),
          new Date("2025-07-15"),
          new Date("2025-07-16"),
          new Date("2025-07-17"),
          new Date("2025-07-18"),
          new Date("2025-07-20"),
          new Date("2025-07-21"),
          new Date("2025-07-22"),
          new Date("2025-07-23"),
          new Date("2025-07-25"),
          new Date("2025-07-26"),
          new Date("2025-07-27"),
          new Date("2025-07-28"),
          new Date("2025-07-29"),
        ],
        pattern: HabitPattern.DAILY
      },
      323: {
        name: 'Buy an egg',
        daysCompleted: [
          new Date("2025-07-12"),
          new Date("2025-07-14"),
          new Date("2025-07-15"),
          new Date("2025-07-16"),
          new Date("2025-07-17"),
          new Date("2025-07-18"),
          new Date("2025-07-20"),
          new Date("2025-07-21"),
          new Date("2025-07-22"),
          new Date("2025-07-23"),
          new Date("2025-07-25"),
          new Date("2025-07-26"),
          new Date("2025-07-27"),
          new Date("2025-07-28"),
          new Date("2025-07-29"),
        ],
        pattern: HabitPattern.EVERY_SEVEN
      }
    };

    console.log('constructed habit service');
    console.log(this.habits);
  };

  getHabitIds() {
    return this.retrieveHabitIds();
  }

  private retrieveHabitIds() {
    return of(Object.keys(this.habits));
  }
;

  getHabit(id: number) {
    console.log('get' + id);
    console.log(this.habits);
    return this.habits[id] ? of(this.habits[id]) : this.retrieveHabit(id)
  }

  // TODO: use httpResource?
  private retrieveHabit(id: number): Observable<Habit> {
    if (this.habits[id]) {
      console.log('habit got');
      return of(this.habits[id]);
    }
    else {
      console.log('habit not got');
      return of(emptyHabit);
    }    
  }  
}
