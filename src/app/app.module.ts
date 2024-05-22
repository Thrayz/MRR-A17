import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { RoleGuardService as RoleGuard } from './__services/role-guard.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MeetingRoomCreateComponent } from './meeting-room/meeting-room-create/meeting-room-create.component';
import { MeetingRoomListComponent } from './meeting-room/meeting-room-list/meeting-room-list.component';
import { MeetingRoomUpdateComponent } from './meeting-room/meeting-room-update/meeting-room-update.component';
import { RegisterComponent } from './register/register.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { ReservationCreateComponent } from './reservation/reservation-create/reservation-create.component';
import { ReservationUpdateComponent } from './reservation/reservation-update/reservation-update.component';
import { HomeComponent } from './home/home.component';
import { MeetingRoomConsultComponent } from './meeting-room/meeting-room-consult/meeting-room-consult.component';
import { ReservationListUserComponent } from './reservation/reservation-list-user/reservation-list-user.component';
import { ErrorComponent } from './error/error/error.component';
import { Error401Component } from './error/error401/error401.component';
import { Error403Component } from './error/error403/error403.component';
import { Error404Component } from './error/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    MeetingRoomCreateComponent,
    MeetingRoomListComponent,
    MeetingRoomUpdateComponent,
    RegisterComponent,
    ReservationListComponent,
    ReservationCreateComponent,
    ReservationUpdateComponent,
    HomeComponent,
    MeetingRoomConsultComponent,
    ReservationListUserComponent,
    ErrorComponent,
    Error401Component,
    Error403Component,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    MatToolbarModule
  ],
  providers: [RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
