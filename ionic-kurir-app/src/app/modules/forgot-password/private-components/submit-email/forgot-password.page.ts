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
    if(this.userData.email.length > 0){
      this.navCtrl.navigateRoot('/forgot-password/otp', { animated: true });
    } else {
      alert('Maaf, jangan dikosongin bosku! isi ngasal aja')
    }
  }

}
