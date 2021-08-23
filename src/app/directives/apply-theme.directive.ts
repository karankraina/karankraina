import { Directive, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from '../services/theme.service';

@Directive({
  selector: '[appApplyTheme]'
})
export class ApplyThemeDirective {

  theme: string;

  constructor(
    private themeRef: ThemeService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    // get the complete theme styles object
    this.theme = this.themeRef.theme;
    this.updateClass();
  }

  ngOnInit() {
    this.themeRef.themeObserver.subscribe(
      (theme) => {
        console.log('Directive received theme : ', theme);
        this.theme = theme;
        this.updateClass();
      }
    )
  }

  updateClass() {
    this.renderer.removeClass(this.document.body, 'light');
    this.renderer.removeClass(this.document.body, 'dark');
    this.renderer.addClass(this.document.body, this.theme)
  }

}
