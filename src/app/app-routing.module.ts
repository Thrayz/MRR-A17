import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ReservationCreateComponent } from './reservation/reservation-create/reservation-create.component';
import { ReservationUpdateComponent } from './reservation/reservation-update/reservation-update.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { MeetingRoomCreateComponent } from './meeting-room/meeting-room-create/meeting-room-create.component';
import { MeetingRoomUpdateComponent } from './meeting-room/meeting-room-update/meeting-room-update.component';
import { MeetingRoomListComponent } from './meeting-room/meeting-room-list/meeting-room-list.component';
import { MeetingRoomConsultComponent } from './meeting-room/meeting-room-consult/meeting-room-consult.component';
import { ReservationListUserComponent } from './reservation/reservation-list-user/reservation-list-user.component';
import { RoleGuardService as RoleGuard } from './__services/role-guard.service';
import { Error401Component } from './error/error401/error401.component';
import { Error403Component } from './error/error403/error403.component';
import { Error404Component } from './error/error404/error404.component';
import { ErrorComponent } from './error/error/error.component';

const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'welcome', component: HomeComponent },
{ path: 'reservations/create', component: ReservationCreateComponent },
{ path: 'reservations/update/:id', component: ReservationUpdateComponent },
{ path: 'reservations', component: ReservationListComponent },
{ path: 'reservationsByUser', component: ReservationListUserComponent},
{ path: 'reservation-create/:id', component: ReservationCreateComponent },
{ 
  path: 'meeting-rooms/create', 
  component: MeetingRoomCreateComponent,
  canActivate: [RoleGuard], 
  data: { expectedRole: 'Admin' } 
},
{ 
  path: 'meeting-rooms/update/:id', 
  component: MeetingRoomUpdateComponent,
  canActivate: [RoleGuard],
  data: { expectedRole: 'Admin' }
},
{ path: 'meeting-rooms', component: MeetingRoomListComponent },
{ path: 'meeting-rooms/consult/:id', component: MeetingRoomConsultComponent},
{ path: '401', component: Error401Component },
{ path: '403', component: Error403Component },
{ path: '404', component: Error404Component },
{ path: 'error', component: ErrorComponent},
{ path: '', redirectTo: '/welcome', pathMatch: 'full' }, 
{ path: '**', redirectTo: '/404', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
