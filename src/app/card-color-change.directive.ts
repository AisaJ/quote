import { Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appCardColorChange]'
})
export class CardColorChangeDirective {

  constructor(private el:ElementRef, private renderer: Renderer) {(1)
    renderer.setElementStyle(el.nativeElement,'backgroundColor','linear-gradient(#fffaf0,blue)');(2)
   }
  

}
