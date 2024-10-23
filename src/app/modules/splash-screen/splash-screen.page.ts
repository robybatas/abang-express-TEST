import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss']
})
export class SplashScreenPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit(): void {
    this.showSplash();
  }

  showSplash() {
    setTimeout(() => {
      this.navCtrl.navigateRoot('/onboarding', { animated: true });
    }, 3000);
  }

}
