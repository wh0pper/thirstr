import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { DmComponent } from './dm/dm.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatchService } from './match.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    MatchDetailComponent,
    DmComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [ MatchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
