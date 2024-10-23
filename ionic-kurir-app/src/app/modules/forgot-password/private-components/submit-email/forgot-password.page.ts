import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserForgotPasswordInput } from 'src/app/models/forgot-password/user-forgot-password.interface';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['../../forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  userData: UserForgotPasswordInput = {
    email: '',
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClickContinue() {
    this.navCtrl.navigateRoot('/forgot-password/otp', { animated: true });
  }

}
