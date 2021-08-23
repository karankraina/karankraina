import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListComponent } from './components/homepage/list/list.component';
import { ListItemComponent } from './components/homepage/list/list-item/list-item.component';
import { FormsModule } from "@angular/forms";
import { JavascriptComponent } from './components/javascript/javascript.component';
import { HoverClassDirective } from './directives/hover-class.directive';
import { SliderComponent } from './components/common/slider/slider.component';
import { ApplyThemeDirective } from './directives/apply-theme.directive';
import { ShardaComponent } from './components/sharda/sharda.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/javascript/blog/blog.component';
import { BlogLinkComponent } from './components/javascript/blog-link/blog-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ListComponent,
    ListItemComponent,
    JavascriptComponent,
    HoverClassDirective,
    SliderComponent,
    ApplyThemeDirective,
    ShardaComponent,
    AboutComponent,
    BlogComponent,
    BlogLinkComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
