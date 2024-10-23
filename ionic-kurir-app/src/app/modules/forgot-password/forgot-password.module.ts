import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './private-components/submit-email/forgot-password.page';
import { InputOtpPage } from './private-components/input-otp/input-otp.page';
import { InputNewPasswordPage } from './private-components/input-new-password/input-new-password.page';
import { SuccessChangePage } from './private-components/success-change/success-change.page';
import { GlobalModule } from 'src/app/shared-components/global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordPageRoutingModule,
    GlobalModule
  ],
  declarations: [ForgotPasswordPage, InputOtpPage, InputNewPasswordPage, SuccessChangePage,]
})
export class ForgotPasswordPageModule {}
