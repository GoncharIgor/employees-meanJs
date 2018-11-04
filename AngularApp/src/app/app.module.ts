import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {ErrorComponent} from './error/error.component';
import {AppRoutingModule} from './app-routing.module';
import {GlobalErrorHandler} from './global.error.handler.service';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ErrorComponent,
    NavigationPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  //  {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
