import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Thingy } from './components/thingy/thingy';
import { ThemeService } from './services/theme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Thingy, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('habit-tracker');
  themeService: ThemeService = inject(ThemeService);
}
