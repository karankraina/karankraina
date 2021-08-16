import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listItems: { label: string, linkTo: string }[] = [
    {
      label: 'Basic Details',
      linkTo: 'home/basic'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
