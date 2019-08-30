import { UsersComponent } from './home/appmenu/users/users.component';
import { ReportsComponent } from './home/appmenu/reports/reports.component';
import { MessagesComponent } from './home/appmenu/messages/messages.component';
import { MonitoringComponent } from './home/appmenu/monitoring/monitoring.component';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { TracksComponent } from './home/appmenu/tracks/tracks.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path:'home',component:HomeComponent,
    children: [
      {path:'tracks',component:TracksComponent},
      {path:'monitoring',component:MonitoringComponent},
      {path:'messages',component:MessagesComponent},
      {path:'reports',component:ReportsComponent},
      {path:'users',component:UsersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
