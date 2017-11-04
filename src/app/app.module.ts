import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Modules required for material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatMenuModule, MatCardModule, MatRadioModule, MatTabsModule, MatSelectModule, MatFormFieldModule} from '@angular/material';

import { AppRoutingModule }     from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';

import { AdminLoginComponent } from './admin/login/admin_login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin_dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    DashboardComponent,
    InstructionsComponent,
    MainComponent,
    TestComponent,
    AdminLoginComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatMenuModule, MatCardModule, MatRadioModule, MatTabsModule, MatSelectModule, MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
