import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly PRIMARY_50: string;
  readonly PRIMARY_100: string;
  readonly PRIMARY_200: string;
  readonly PRIMARY_300: string;
  readonly PRIMARY_400: string;
  readonly PRIMARY_500: string;
  readonly PRIMARY_600: string;
  readonly PRIMARY_700: string;
  readonly PRIMARY_800: string;
  readonly PRIMARY_900: string;
  readonly PRIMARY_A100: string;
  readonly PRIMARY_A200: string;
  readonly PRIMARY_A400: string;
  readonly PRIMARY_A700: string;
  
  readonly ACCENT_50: string;
  readonly ACCENT_100: string;
  readonly ACCENT_200: string;
  readonly ACCENT_300: string;
  readonly ACCENT_400: string;
  readonly ACCENT_500: string;
  readonly ACCENT_600: string;
  readonly ACCENT_700: string;
  readonly ACCENT_800: string;
  readonly ACCENT_900: string;
  readonly ACCENT_A100: string;
  readonly ACCENT_A200: string;
  readonly ACCENT_A400: string;
  readonly ACCENT_A700: string;

  constructor() {
    this.PRIMARY_50 = this.getColor('primary-50');
    this.PRIMARY_100 = this.getColor('primary-100');
    this.PRIMARY_200 = this.getColor('primary-200');
    this.PRIMARY_300 = this.getColor('primary-300');
    this.PRIMARY_400 = this.getColor('primary-400');
    this.PRIMARY_500 = this.getColor('primary-500');
    this.PRIMARY_600 = this.getColor('primary-600');
    this.PRIMARY_700 = this.getColor('primary-700');
    this.PRIMARY_800 = this.getColor('primary-800');
    this.PRIMARY_900 = this.getColor('primary-900');
    this.PRIMARY_A100 = this.getColor('primary-A100');
    this.PRIMARY_A200 = this.getColor('primary-A200');
    this.PRIMARY_A400 = this.getColor('primary-A400');
    this.PRIMARY_A700 = this.getColor('primary-A700');

    this.ACCENT_50 = this.getColor('accent-50');
    this.ACCENT_100 = this.getColor('accent-100');
    this.ACCENT_200 = this.getColor('accent-200');
    this.ACCENT_300 = this.getColor('accent-300');
    this.ACCENT_400 = this.getColor('accent-400');
    this.ACCENT_500 = this.getColor('accent-500');
    this.ACCENT_600 = this.getColor('accent-600');
    this.ACCENT_700 = this.getColor('accent-700');
    this.ACCENT_800 = this.getColor('accent-800');
    this.ACCENT_900 = this.getColor('accent-900');
    this.ACCENT_A100 = this.getColor('accent-A100');
    this.ACCENT_A200 = this.getColor('accent-A200');
    this.ACCENT_A400 = this.getColor('accent-A400');
    this.ACCENT_A700 = this.getColor('accent-A700');
  }

  private getColor(name: string) {
    return getComputedStyle(document.documentElement).getPropertyValue(`--${name}`);
  }
}