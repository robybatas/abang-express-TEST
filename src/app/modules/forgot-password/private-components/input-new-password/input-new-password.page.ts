import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserChangePasswordInput } from 'src/app/models/forgot-password/user-forgot-password.interface';

@Component({
  selector: 'app-input-new-password',
  templateUrl: './input-new-password.page.html',
  styleUrls: ['../../forgot-password.page.scss'],
})
export class InputNewPasswordPage {

  changePasswordData: UserChangePasswordInput = {
    newPassword: '',
    reinput: ''
  }

  showNewPassword: boolean = false;
  showReinputPassword: boolean = false;

  constructor(private navCtrl: NavController) { }

  togglePasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleReinputVisibility() {
    this.showReinputPassword = !this.showReinputPassword
  }
  onClickForgotPassword() {
    this.navCtrl.navigateRoot('/forgot-password/success-change', { animated: true });
  }

}
