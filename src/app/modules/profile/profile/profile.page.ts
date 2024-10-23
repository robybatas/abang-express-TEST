import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['../profile.page.scss'],
})
export class ProfilePage {

  constructor(private navCtrl: NavController) { }

  logOut() {
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

  onClickChangeProfile() {
    this.navCtrl.navigateRoot('/forgot-password/change-profile', { animated: true });
  }

  onClickChangePassword() {
    this.navCtrl.navigateRoot('/forgot-password/change-password', { animated: true });
  }

}
