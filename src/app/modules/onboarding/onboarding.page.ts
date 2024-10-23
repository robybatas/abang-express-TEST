import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage {

  constructor(private navCtrl: NavController) { }

  onClickStart() {
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

}
