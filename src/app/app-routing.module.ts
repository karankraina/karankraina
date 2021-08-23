import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { ShardaComponent } from './components/sharda/sharda.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,    
  },
  {
    path: 'javascript',
    component: JavascriptComponent,
  },
  {
    path: 'sharda',
    component: ShardaComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
