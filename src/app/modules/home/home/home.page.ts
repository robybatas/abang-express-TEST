import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['../home.page.scss'],
})
export class HomePage implements OnInit {

  status: string = '';
  isChacked: boolean = false;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.changeStatus();
  }

  private changeStatus() {
    if (this.isChacked) this.status = 'Online';
    else this.status = 'Offline';
  }

  onChangeToggle() {
    this.isChacked = !this.isChacked
    this.changeStatus()
  }

  onClickPickup(id: string) {

    this.navCtrl.navigateRoot(`/pickup-list/${id}`, { animated: true });
  }

}
