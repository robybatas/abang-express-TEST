import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserProfile } from 'src/app/models/profile/profile.interface';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.page.html',
  styleUrls: ['../profile.page.scss'],
})
export class ChangeProfilePage{
  userData: UserProfile = {
    name: 'Roby Fernando',
    email: 'emailroby@mail.com',
    phone: '0895 3496 1234',
    date: '10 / 11 / 1995',
    gender: 'Laki - Laki',
    city: 'DKI Jakarta',
    district: 'Grogol',
    addres: 'Jl. Raya 1',
  }

  isGender: boolean = false;
  isCity: boolean = false;
  isDistrict: boolean = false;

  constructor(private navCtrl: NavController) { }

  openDropList(event: Event, dropListName: string) {
    event.preventDefault()
    this.isGender = false
    this.isCity = false
    this.isDistrict = false

    if(dropListName === 'gender') this.isGender = true;
    else if(dropListName === 'city') this.isCity = true;
    else if(dropListName === 'district') this.isDistrict = true;
  }

  goBack() {
    this.navCtrl.back();
  }

}
