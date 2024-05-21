import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
