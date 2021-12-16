import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeObserver: Subject<string> = new Subject()

  // currently selected theme
  selectedTheme: string;

  constructor() {
    this.selectedTheme = this.decideTheme();
  }
  
  public get theme() : string {
    return this.selectedTheme;
  }

  changeTheme(theme: string) {
    this.selectedTheme = theme;
    this.themeObserver.next(this.selectedTheme);
  }

  private decideTheme(): string {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    if (currentHour > 7 && currentHour < 18) {
      // Day time
      return 'light';
    }
    // Night time
    return 'dark';
  }

}
