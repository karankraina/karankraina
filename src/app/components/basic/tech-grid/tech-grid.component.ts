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
      title: 'Express Js',
      logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
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
    {
      title: 'PostgreSQL',
      logo: 'assets/postgres.png',
    },
    {
      title: 'HTML5',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    },
    {
      title: 'CSS3',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    },
    {
      title: 'Heroku',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Heroku_logo.svg',
      width: '60px',
    },
    {
      title: 'MS Azure',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
      width: '60px',
    },
    {
      title: 'OpenShift',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/OpenShift-LogoType.svg',
    },
    {
      title: 'Webpack',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Webpack.svg',
      width: '60px'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
