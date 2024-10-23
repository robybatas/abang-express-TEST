import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pickup-list',
  templateUrl: './pickup-list.page.html',
  styleUrls: ['./pickup-list.page.scss', '../home/home.page.scss'],
})
export class PickupListPage implements OnInit {

  constructor(private renderer: Renderer2, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')!;
    id = 'tab' + id;
    this.onChangeTab(id);
  }

  onChangeTab(id: string) {
    const tabs = ['tab1', 'tab2', 'tab3', 'tab4'];
    const items = ['item1', 'item2', 'item3', 'item4'];

    for (let index = 0; index < tabs.length; index++) {
      const tab = document.getElementById(tabs[index]);
      const item = document.getElementById(items[index]);
      if(tabs[index] === id) {
        this.renderer.addClass(tab, 'selected-tab');
        this.renderer.removeClass(item, 'd-none');
      } else {
        this.renderer.removeClass(tab, 'selected-tab');
        this.renderer.addClass(item, 'd-none');
      }
    }

    if(id != 'tab1') {
      const element = document.getElementById('tab1');
      this.renderer.removeClass(element, 'selected-tab');
    }
  }

}
