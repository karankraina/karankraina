import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  isChecked: boolean;

  constructor(private themeRef: ThemeService){
    this.isChecked = !! (this.themeRef.theme === 'dark');
  }
  ngOnInit(): void {
  }

  valueChanged() {
    console.log('Value changed in Slider component: ', this.isChecked)
    this.themeRef.changeTheme(this.isChecked ? 'dark' : 'light');
  }

}
