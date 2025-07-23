import { Injectable, signal } from '@angular/core';
import { Theme } from '../utils/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSignal = signal<Theme>(Theme.LIGHT);

  getTheme() {
    return this.themeSignal();
  }

  setTheme(theme: Theme) {
    this.themeSignal.set(theme);
  }

  updateTheme() {
    // in future we could have a dropdown and actually use the param theme: Theme
    this.themeSignal.update(value => value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT );
  }
}
