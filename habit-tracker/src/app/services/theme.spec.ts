import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme';
import { Theme } from '../utils/Theme';
  import { provideZonelessChangeDetection } from '@angular/core';

describe('Theme', () => {
  let service: ThemeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
    
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default theme to light', () => {
    expect(service.getTheme()).toBe(Theme.LIGHT);
  });

  it('should update theme when toggled', () => {
    service.updateTheme();
    expect(service.getTheme()).toBe(Theme.DARK);
  });
});
