import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from '../../models/fruit.model';
import { FruitsService } from '../../services/fruits.service';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.page.html',
  styleUrls: ['./fruit-details.page.scss'],
})
export class FruitDetailsPage implements OnInit {

  public fruit: Fruit;

  constructor(private route: ActivatedRoute,
              private fruitsService: FruitsService) {

  }

  ngOnInit() {

    const { id } = this.route.snapshot.params;

    this.fruit = this.fruitsService.getFruit(+id);
  }
}
