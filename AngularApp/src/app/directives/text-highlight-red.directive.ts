import {Directive, ElementRef} from '@angular/core';

// Директивы позволяют получать прямой доступ к DOM ваших элементов
@Directive({
  selector: '[appTextHighlightRed]' // css attribute
})
export class TextHighlightRedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }
}
