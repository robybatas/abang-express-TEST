import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-success-change',
  templateUrl: './success-change.page.html',
  styleUrls: ['../../forgot-password.page.scss'],
})
export class SuccessChangePage {

  constructor(private navCtrl: NavController) { }

  onSubmit() {
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

}
