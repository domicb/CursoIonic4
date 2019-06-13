import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { FrutasService } from '../services/frutas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public fruits: any;

  constructor( private fruitsService: FrutasService) {

  }

  ngOnInit(): void {

     this.fruitsService.getFruits().subscribe((listaFrutas) => {
      console.log('SUCESS',listaFrutas);
        this.fruits = listaFrutas;
    },(error: any) =>{
      console.log('ERROR', error);
    })

  }

  public imagePressed(): void {
    console.log('presionando en imagen');
  }


}
