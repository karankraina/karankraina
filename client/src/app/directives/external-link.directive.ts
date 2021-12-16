import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appExternalLink]'
})
export class ExternalLinkDirective {
  @Input('appExternalLink') url: string = '';

  @HostListener('click') onMouseEnter() {
    window.open(this.url, '_blank')
  }


  constructor() { }

}
