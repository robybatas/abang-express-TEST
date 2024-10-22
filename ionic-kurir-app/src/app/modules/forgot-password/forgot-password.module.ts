import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './private-components/submit-email/forgot-password.page';
import { HeaderWithButtonBackComponent } from 'src/app/shared-components/header-with-button-back/header-with-button-back.component';
import { InputOtpPage } from './private-components/input-otp/input-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordPageRoutingModule
  ],
  declarations: [ForgotPasswordPage, InputOtpPage, HeaderWithButtonBackComponent]
})
export class ForgotPasswordPageModule {}
