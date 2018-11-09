import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {EmployeeComponent} from './employees/employee/employee.component';
import {ErrorComponent} from './shared/error/error.component';
import {AppRoutingModule} from './app-routing.module';
import {GlobalErrorHandler} from './global.error.handler.service';
import {NavigationPanelComponent} from './shared/navigation-panel/navigation-panel.component';
import {LoginComponent} from './login/login.component';
import {AvatarComponent} from './employees/avatar/avatar.component';
import {ResourceEditorModule} from './resource-editor.module';
import {AdminSectionComponent} from './admin/admin-section/admin-section.component';
import {SearchPositionComponent} from './admin/search-position/search-position.component';
import {PositionDetailComponent} from './admin/position-detail/position-detail.component';
import {CustomMaterialModule} from './custom-material.module';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ErrorComponent,
    NavigationPanelComponent,
    LoginComponent,
    AvatarComponent,
    AdminSectionComponent,
    SearchPositionComponent,
    PositionDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ResourceEditorModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [
    //  {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
