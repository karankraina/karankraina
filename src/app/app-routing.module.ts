import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BlogComponent } from './components/javascript/blog/blog.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { ShardaComponent } from './components/sharda/sharda.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'javascript',
    children: [
      {
        path: '',
        component: JavascriptComponent
      },
      {
        path: ':id',
        component: BlogComponent
      }
    ]
  },
  {
    path: 'sharda',
    component: ShardaComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
