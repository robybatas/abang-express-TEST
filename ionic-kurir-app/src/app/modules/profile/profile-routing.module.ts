import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile/profile.page';
import { ChangeProfilePage } from './change-profile/change-profile.page';
import { ChangePasswordPage } from './change-password/change-password.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'change-profile',
    component: ChangeProfilePage
  },
  {
    path: 'change-password',
    component: ChangePasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
