import {NgModule} from '@angular/core';
import {TextHighlightBlueDirective} from './directives/text-highlight-blue.directive';
import {TextHighlightRedDirective} from './directives/text-highlight-red.directive';

@NgModule({
  declarations: [
    TextHighlightBlueDirective,
    TextHighlightRedDirective
  ],
  exports: [
    TextHighlightBlueDirective,
    TextHighlightRedDirective
  ]
})
export class ResourceEditorModule {}

