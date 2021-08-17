import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedAppMode: string = 'cool';
  @Output() appMode = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
    console.log({ appMode: this.selectedAppMode });

  }

  onAppModeChange () {
    console.log({ appMode: this.selectedAppMode });
    this.appMode.emit(this.selectedAppMode);
  }

}
