import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header-with-button-back',
  templateUrl: './header-with-button-back.component.html',
  styleUrls: ['./header-with-button-back.component.scss'],
})
export class HeaderWithButtonBackComponent {
  @Input() title: string = '';

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }

}
