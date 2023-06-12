import { Directive, ElementRef, Host, HostListener, OnInit, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit {
  @Input () colour: string;
  @Input () affectName: string;
  constructor(private elm: ElementRef, renderer: Renderer2) { 
    this.elm.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseenter') onMouseEnter() {
    switch(this.affectName) {
      case 'bold':
        this.bold(true);
        break;
      case 'underline':
        this.underline(true);
        break;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    switch (this.affectName) {
      case 'bold':
        this.bold(false);
        break;
      case 'underline':
        this.bold(false);
        break;
    }
  }

  private bold(bold:boolean){
    if(bold){
      this.elm.nativeElement.style.fontWeight = 700;
    } else {
      this.elm.nativeElement.style.fontWeight = 20;
    }
  }

  private underline(underline:boolean){
    if(underline){
      this.elm.nativeElement.style.underline = this.colour || "green";
    } else {
      this.elm.nativeElement.style.underline = 'black';
    }
  }

   ngOnInit(): void{
    this.elm.nativeElement.style.backgroundColor = this.colour || "";
  } 
}
