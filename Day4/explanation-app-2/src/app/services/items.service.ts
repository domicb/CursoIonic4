import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import {Observable, Observer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: Item[];

  constructor() {

  }

  public getItems(): Item[] {

    if (!this.items) {

      this.items = [];

      const icons = [
        'flask',
        'wifi',
        'beer',
        'football',
        'basketball',
        'paper-plane',
        'american-football',
        'boat',
        'bluetooth',
        'build'
      ];

      for (let i = 1; i < 11; i++) {
        this.items.push({
          title: 'Item ' + i,
          note: 'This is item #' + i,
          icon: icons[Math.floor(Math.random() * icons.length)]
        });
      }
    }

    return this.items;
  }

  public getItemByIndex(index: number): Item {

    return this.getItems()[index];
  }
}
