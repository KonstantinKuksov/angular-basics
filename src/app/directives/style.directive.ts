import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter', ['$event']) onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseout', ['$event']) onOut() {
    this.r.setStyle(this.el.nativeElement, 'color', 'black');
  }
}
