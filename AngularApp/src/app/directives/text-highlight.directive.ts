import {Directive, ElementRef} from '@angular/core';

// Директивы позволяют получать прямой доступ к DOM ваших элементов
@Directive({
  selector: '[appTextHighlight]' // css attribute
})
export class TextHighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }

}
