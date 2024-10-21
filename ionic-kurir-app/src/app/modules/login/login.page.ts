import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login/user-login.interface';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginData: Login = {
    email: '',
    password: ''
  };

  showPassword: boolean = false;

  constructor(private navCtrl: NavController) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    console.log('Login Data:', this.loginData);
  }

  onClickForgotPassword() {
    this.navCtrl.navigateRoot('/forgot-password', { animated: true });
  }

}

