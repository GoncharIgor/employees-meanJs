import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './shared/error/error.component';
import {EmployeeComponent} from './employees/employee/employee.component';
import {LoginComponent} from './login/login.component';
import {AdminSectionComponent} from './admin/admin-section/admin-section.component';
import {PositionDetailComponent} from './admin/position-detail/position-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/employee', pathMatch: 'full'}, // default route
  {path: 'employee', component: EmployeeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'positions', component: AdminSectionComponent},
  {path: 'positions/:id', component: PositionDetailComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/employee'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    // enableTracing: true
  })],
  exports: [RouterModule]
  // Exporting RouterModule makes router directives available for use in the AppModule components that will need them
})
export class AppRoutingModule {

}
