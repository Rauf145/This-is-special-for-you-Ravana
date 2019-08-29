import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { DeviceService } from './shared/device.service';
import { AppheaderComponent } from './home/appheader/appheader.component';
import { AppmenuComponent } from './home/appmenu/appmenu.component';
import { AppfooterComponent } from './home/appfooter/appfooter.component';
import { AppsettingComponent } from './home/appsetting/appsetting.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { JsonForPipe } from './json-for.pipe';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MonitoringComponent } from './home/appmenu/monitoring/monitoring.component';
import { TracksComponent } from './home/appmenu/tracks/tracks.component';
import { ReportsComponent } from './home/appmenu/reports/reports.component';
import { MessagesComponent } from './home/appmenu/messages/messages.component';
import { DriversComponent } from './home/appmenu/drivers/drivers.component';
import { UsersComponent } from './home/appmenu/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    AppsettingComponent,
    DashboardComponent,
    JsonForPipe,
    MonitoringComponent,
    TracksComponent,
    ReportsComponent,
    MessagesComponent,
    DriversComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot(routes, { useHash: true }
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [UserService, DeviceService, CookieService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

