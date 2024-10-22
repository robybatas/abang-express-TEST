import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordPage } from './private-components/submit-email/forgot-password.page';
import { InputOtpPage } from './private-components/input-otp/input-otp.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordPage
  },
  {
    path: 'otp',
    component: InputOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordPageRoutingModule {}
