import { Component } from '@angular/core';
import { UserLoginInput } from '../../models/login/user-login.interface';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginData: UserLoginInput = {
    email: '',
    password: ''
  };

  showPassword: boolean = false;

  constructor(private navCtrl: NavController) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.navCtrl.navigateRoot('/menu/tab1', { animated: true });
  }

  onClickForgotPassword() {
    this.navCtrl.navigateRoot('/forgot-password', { animated: true });
  }

}

