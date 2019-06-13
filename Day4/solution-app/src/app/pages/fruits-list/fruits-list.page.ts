import { Component, OnInit } from '@angular/core';
import { Fruit } from '../../models/fruit.model';
import { FruitsService } from '../../services/fruits.service';

@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.page.html',
  styleUrls: ['./fruits-list.page.scss'],
})
export class FruitsListPage implements OnInit {

  public fruits: Fruit[];

  constructor(private fruitsService: FruitsService) {

  }

  ngOnInit() {

    this.fruits = this.fruitsService.getFruits();
  }
}
