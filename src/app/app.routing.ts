import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';

import { AdminLoginComponent } from './admin/login/admin_login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin_dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterationComponent},
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'instructions/:id', component: InstructionsComponent},
      { path: 'test/:id', component: TestComponent}
    ]
  },
  { path: 'administrators', component: AdminLoginComponent },
  {
    path: 'admindashboard',
    component: MainComponent,
    children:[
      { path: '', component: AdminDashboardComponent}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}