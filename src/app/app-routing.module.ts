import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { MatchDetailComponent} from './match-detail/match-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'profile', component: ProfileComponent },
  { path: 'detail/:id', component: MatchDetailComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
// @NgModule({
//   imports: [ RouterModule.forRoot(routes) ],
//   declarations: [ RouterModule ]
// })
// export class AppRoutingModule { }
