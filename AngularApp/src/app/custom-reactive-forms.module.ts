import {NgModule} from '@angular/core';
import { BasicFormComponent } from './admin/reactive-forms/basic-form/basic-form.component';
import { NestedFormComponent } from './admin/reactive-forms/nested-form/nested-form.component';

@NgModule({
  declarations: [BasicFormComponent, NestedFormComponent],
  exports: [BasicFormComponent, NestedFormComponent]
})
export class CustomReactiveFormsModule {
}

