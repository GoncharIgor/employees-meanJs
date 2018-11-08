import {Directive, ElementRef} from '@angular/core';

// Директивы позволяют получать прямой доступ к DOM ваших элементов
@Directive({
  selector: '[appTextHighlightBlue]' // css attribute
})
export class TextHighlightBlueDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'blue';
  }
}
