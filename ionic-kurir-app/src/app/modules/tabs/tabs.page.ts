import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tab: string = 'tab1';

  constructor(private navCtrl: NavController) {}

  onTabClick(tabId: string) {
    this.tab = tabId;
    if(tabId === "tab3") {
      this.navCtrl.navigateRoot('menu/tab3', { animated: true });
    }
  }

}
