import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {CustomMaterialModule} from './custom-material.module';
import {CustomReactiveFormsModule} from './custom-reactive-forms.module';
import {ResourceEditorModule} from './resource-editor.module';

import {AdminSectionComponent} from './admin/admin-section/admin-section.component';
import {AppComponent} from './app.component';
import {AvatarComponent} from './employees/avatar/avatar.component';
import {EmployeeComponent} from './employees/employee/employee.component';
import {ErrorComponent} from './shared/error/error.component';
import {FooterComponent} from './shared/footer/footer.component';
import {LoginComponent} from './login/login.component';
import {NavigationPanelComponent} from './shared/navigation-panel/navigation-panel.component';
import {PositionDetailComponent} from './admin/position-detail/position-detail.component';
import {SearchPositionComponent} from './admin/search-position/search-position.component';
import {GlobalErrorHandler} from './global.error.handler.service';
import { BasicFormComponent } from './admin/reactive-forms/basic-form/basic-form.component';
import { NestedFormComponent } from './admin/reactive-forms/nested-form/nested-form.component';

@NgModule({
  declarations: [
    AdminSectionComponent,
    AppComponent,
    AvatarComponent,
    EmployeeComponent,
    ErrorComponent,
    FooterComponent,
    LoginComponent,
    NavigationPanelComponent,
    PositionDetailComponent,
    SearchPositionComponent,
    BasicFormComponent,
    NestedFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CustomMaterialModule,
  //  CustomReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ResourceEditorModule
  ],
  providers: [
    //  {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
