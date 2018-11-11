import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatChipsModule, MatSelectModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatChipsModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatChipsModule, MatSelectModule]
})
export class CustomMaterialModule {
}

