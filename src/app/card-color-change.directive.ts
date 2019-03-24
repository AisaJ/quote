import { Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appCardColorChange]'
})
export class CardColorChangeDirective {

  constructor(private el:ElementRef, private renderer: Renderer) {(1)
    renderer.setElementStyle(el.nativeElement,'backgroundColor','#fffaf0');(2)
   }
  

}
