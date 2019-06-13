import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public item: Item;

  constructor(private route: ActivatedRoute,
              private itemsService: ItemsService) {

  }

  ngOnInit() {

    const { index } = this.route.snapshot.params;

    this.item = this.itemsService.getItemByIndex(index);
  }
}
