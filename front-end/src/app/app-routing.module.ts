import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

import { EditProfileComponent } from './edit-profile/edit-profile.component';

import * as firebase from 'firebase/app';
import { NewProfileComponent } from './new-profile/new-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'email-login', component: EmailComponent },
  { path: 'signup', component: SignupComponent },
  { path: ':id/profile', component: ProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent},
  { path: 'new-profile', component: NewProfileComponent}
  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

