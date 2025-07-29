import { Component, computed, inject, signal, Signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HabitService } from '../../services/habit-service';

@Component({
  selector: 'app-habit',
  imports: [RouterOutlet],
  templateUrl: './habit.html',
  styleUrl: './habit.scss'
})
export class Habit {
  // do I get the route here and extract the ID or do I have the habit service know which one is current?
  private habitService = inject(HabitService);
  private habit = {}; // TODO: what is the type?
  // set up current habit id using activated route
  private activatedRoute = inject(ActivatedRoute);

  currentHabit: Signal<number> = computed(() => {
    // use activated route
    console.log(this.activatedRoute);

    return 2;
  })

  constructor() {
    console.log('constructing habit-service');
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      // TODO: turn param into ID and use
      this.habit = this.habitService.getHabit(3); // make it calculated?
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
}
