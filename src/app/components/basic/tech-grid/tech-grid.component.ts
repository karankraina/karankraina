import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-grid',
  templateUrl: './tech-grid.component.html',
  styleUrls: ['./tech-grid.component.css']
})
export class TechGridComponent implements OnInit {
  techStack = [
    {
      title: 'Node Js',
      logo: 'assets/nodejs.svg',
    },
    {
      title: 'React JS',
      logo: 'assets/reactjs.svg',
    },
    {
      title: 'Angular JS',
      logo: 'assets/angularjs.svg',
    },
    {
      title: 'Next Js',
      logo: 'assets/nextjs.svg',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
