import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile/profile.page';
import { ChangeProfilePage } from './change-profile/change-profile.page';
import { GlobalModule } from 'src/app/shared-components/global/global.module';
import { ChangePasswordPage } from './change-password/change-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    GlobalModule
  ],
  declarations: [ProfilePage, ChangeProfilePage, ChangePasswordPage]
})
export class ProfilePageModule {}
