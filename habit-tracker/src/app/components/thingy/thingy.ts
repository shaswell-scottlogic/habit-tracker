import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../services/theme';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-thingy',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './thingy.html',
  styleUrl: './thingy.scss'
})
export class Thingy {
  themeService: ThemeService = inject(ThemeService);

  onThemeToggle() {
    this.themeService.updateTheme();
  }
}
