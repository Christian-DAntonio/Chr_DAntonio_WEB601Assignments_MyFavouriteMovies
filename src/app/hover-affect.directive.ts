import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit {
  @Input () colour: string;
  constructor(private elm: ElementRef) { 
  }
  @HostListener('click') onClick() {
    this.highlightMe(this.colour);
  }
  private highlightMe(highlightColour: string) {
    this.elm.nativeElement.style.backgroundColor = highlightColour || 'green';
  }
  ngOnInit(): void{
    this.elm.nativeElement.style.backgroundColor = this.colour || "green";
  }
}
