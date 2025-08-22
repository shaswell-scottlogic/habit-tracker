import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HabitPattern } from '../../models/HabitPattern';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HabitService } from '../../services/habit-service';

@Component({
  selector: 'app-new-habit',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './new-habit.html',
  styleUrl: './new-habit.scss'
})
export class NewHabit {
  habitService = inject(HabitService);
  frequencyOptions = [HabitPattern.DAILY, HabitPattern.EVERY_OTHER, HabitPattern.EVERY_SEVEN];

  nameControl = new FormControl<string>("", Validators.required);
  frequencyControl = new FormControl<HabitPattern | null>(null, Validators.required);

  // can just create controls inside group directly
  newHabitForm = new FormGroup({
    name: this.nameControl,
    frequency: this.frequencyControl
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newHabitForm.value);
    if (!!this.nameControl.value && !!this.frequencyControl.value) {
      this.habitService.addHabit(this.nameControl.value, this.frequencyControl.value);
    } else {
      alert('NO');
    }
  }
}
