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
  habits: Record<string, Habit>;

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
  };

  getHabitIds() {
    return of(this.retrieveHabitIds());
  }

  private retrieveHabitIds() {
    return Object.keys(this.habits);
  }

  getHabitSummaries() {
    const ids = this.retrieveHabitIds();

    return ids.map((id) => ({
      id,
      name: this.habits[id]
    }))
  }

  getHabit(id: string) {
    return this.habits[id] ? of(this.habits[id]) : this.retrieveHabit(id)
  }

  addHabit(name: string, pattern: HabitPattern) {
    // NO - need to check if text of name already exists in a habit
    // this only incidentally works
    if (!!this.habits[name]) {
      alert('HOW DARE');
    } else {
      this.habits[name] = {
        name,
        daysCompleted: [],
        pattern
      };
    }
  }

  // TODO: use httpResource?
  private retrieveHabit(id: string): Observable<Habit> {
    if (this.habits[id]) {;
      return of(this.habits[id]);
    }

    return of(emptyHabit);
  }  
}
