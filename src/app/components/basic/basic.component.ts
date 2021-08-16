import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  resumeData = {
    name: 'Karan Raina',
    role: 'Full Stack Developer',
    profile: `3 years of overall experience in Modern Web Development using JavaScript.
    Experienced with all stages of
    the development cycle for dynamic enterprise-level web projects. Well-versed in numerous modern
    frameworks of JavaScript including Express JS, Next JS, React JS, etc. Strong background in project
    management and customer relations.`,
    professionalSummary: [
      `Professional experience in all SDLC phases including requirement gathering & analysis, application architecture design & development, maintenance and testing as per enterprise standards`,
      `Experience in developing REST Web APIs using Node JS/ Express JS/ Nest JS/ Next JS and host on multiple load balanced API instances`,
      'Good knowledge of Web Security principles especially in Modern Web Development stack',
      'Used GitHub Advanced Security, Checkmarx and Snyk tools to scan the application source code to check for security vulnerabilities and fixed them.',
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
