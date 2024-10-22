import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tab: string = 'tab1';

  constructor() {}

  onTabClick(tabId: string) {
    this.tab = tabId;
  }

}
