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
      'Professional experience in all SDLC phases including requirement gathering & analysis, application architecture design & development, maintenance and testing as per enterprise standards',
      'Experience in developing REST Web APIs using Node JS/ Express JS/ Nest JS/ Next JS and host on multiple load balanced API instances',
      'Good knowledge of Web Security principles especially in Modern Web Development stack',
      'Used GitHub Advanced Security, Checkmarx and Snyk tools to scan the application source code to check for security vulnerabilities and fixed them.',
      'Experienced in both client-side and server-side scripting languages with ES6 syntax and TypeScript',
      'Good knowledge in Responsive Web Designing (RWD) using Bootstrap 3/4, CSS3 media queries, SCSS, SASS',
      'Experience of working with both Waterfall Model and Agile Methodology',
      'Good experience of creating and developing all micro deliverables for a project like Validation Documents, Weekly Status Reports, Code Review Document, Minutes of Meeting etc',
      'Well versed with Project Management activities like Internal Audit, External Audit, Process Improvement Management, Access Roster Review, etc.'

    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
