import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordPage } from './private-components/submit-email/forgot-password.page';
import { InputOtpPage } from './private-components/input-otp/input-otp.page';
import { InputNewPasswordPage } from './private-components/input-new-password/input-new-password.page';
import { SuccessChangePage } from './private-components/success-change/success-change.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordPage
  },
  {
    path: 'otp',
    component: InputOtpPage
  },
  {
    path: 'new-password',
    component: InputNewPasswordPage
  },
  {
    path: 'success-change',
    component: SuccessChangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordPageRoutingModule {}
