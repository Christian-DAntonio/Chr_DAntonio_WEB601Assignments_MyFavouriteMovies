import { Directive, ElementRef, Host, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit {
  @Input () colour: string;
  constructor(private elm: ElementRef) { 
    this.elm.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(colour: string) {
    this.elm.nativeElement.style.backgroundColor = colour;
  }
   ngOnInit(): void{
    this.elm.nativeElement.style.backgroundColor = this.colour || "";
  } 
}
