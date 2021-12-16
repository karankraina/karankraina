import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() label: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
