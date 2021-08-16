import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListComponent } from './components/homepage/list/list.component';
import { ListItemComponent } from './components/homepage/list/list-item/list-item.component';
import { FormsModule } from "@angular/forms";
import { BasicComponent } from './components/basic/basic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ProjectsComponent,
    ContactComponent,
    ListComponent,
    ListItemComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
