import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile/profile.page';
import { GlobalModule } from 'src/app/shared-components/global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    GlobalModule
  ],
  declarations: [ProfilePage, ]
})
export class ProfilePageModule {}
