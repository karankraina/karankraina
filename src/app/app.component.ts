import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'karankraina';
  appMode: string = 'resume';

  onAppModeChange(newMode){
    console.log('App Mode has been changed!', newMode);
    this.appMode = newMode;
  }
}
