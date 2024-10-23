import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserChangePasswordInput } from 'src/app/models/forgot-password/user-forgot-password.interface';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['../../forgot-password/forgot-password.page.scss'],
})
export class ChangePasswordPage {

  currentPassword: string = ''

  changePasswordData: UserChangePasswordInput = {
    newPassword: '',
    reinput: ''
  }

  showNewPassword: boolean = false;
  showReinputPassword: boolean = false;
  showCurrentPassword: boolean = false;

  constructor(private navCtrl: NavController) { }

  togglePasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleCurrentPasswordVisibility() {
    this.showCurrentPassword = !this.showCurrentPassword;
  }

  toggleReinputVisibility() {
    this.showReinputPassword = !this.showReinputPassword
  }

  onClickToForgotPassword() {
    this.navCtrl.navigateRoot('/forgot-password/new-password', { animated: true });
  }

  goBack() {
    this.navCtrl.back();
  }

}
