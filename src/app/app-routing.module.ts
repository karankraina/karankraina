import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { UsesComponent } from './components/uses/uses.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,    
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'javascript',
    component: JavascriptComponent,
  },
  {
    path: 'uses',
    component: UsesComponent,
  },
  {
    path: 'resume',
    component: BasicComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
