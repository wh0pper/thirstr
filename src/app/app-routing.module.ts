import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProfileComponent } from './profile/profile.component';
import { MatchDetailComponent} from './match-detail/match-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'detail/:id', component: MatchDetailComponent}
]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
