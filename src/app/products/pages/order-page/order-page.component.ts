import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {
  public isUppercase: boolean = false;

  public orderBy: keyof Hero | '' = '';

  public heroes: Hero[] = [
    {name: 'SuperMan', canFly: true  , color: Color.blue },
    {name: 'Flash'   , canFly: false , color: Color.red  },
    {name: 'Batman'  , canFly: false  , color: Color.black },
    {name: 'DareEvil', canFly: false  , color: Color.red },
    {name: 'ironMan', canFly: true  , color: Color.yellow },
  ];


  toggleUppercase(): void {
    this.isUppercase = !this.isUppercase;
  }
  changeOrder( order: keyof Hero):void{
    this.orderBy = order;
  }

}
