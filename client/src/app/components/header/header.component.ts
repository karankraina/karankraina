import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() appMode = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }

  handleValueChange(event: any){
    this.appMode.emit(event);
  }

}