import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameUpper:string = 'Diego Puentes';
  public nameLower:string = 'DIEGO PUENTES';
  public fullName:string  = 'DiEgO PuEnTeS';

  public customDate:Date = new Date;
}
