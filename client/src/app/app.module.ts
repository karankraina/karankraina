import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

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
import { BlogComponent } from './components/javascript/blog/blog.component';
import { BlogLinkComponent } from './components/javascript/blog-link/blog-link.component';
import { ShardaInstagramComponent } from './components/sharda/sharda-instagram/sharda-instagram.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExternalLinkDirective } from './directives/external-link.directive';

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
    BlogComponent,
    BlogLinkComponent,
    ShardaInstagramComponent,
    ContactComponent,
    ExternalLinkDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        // fullLibraryLoader: () => import('highlight.js'),
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        },
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
