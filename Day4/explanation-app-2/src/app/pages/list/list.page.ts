import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit, OnDestroy {

  public items: Item[] = [];

  constructor(private itemsService: ItemsService) {

  }

  public ngOnInit() {

    console.log('ListPage ngOnInit');

    this.items = this.itemsService.getItems();
  }

  public ngOnDestroy() {

    console.log('ListPage ngOnDestroy');
  }

  public ionViewDidEnter() {

    console.log('ListPage ionViewDidEnter');
  }

  public ionViewDidLeave() {

    console.log('ListPage ionViewDidLeave');
  }
}
