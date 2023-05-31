import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18nSelect
  public name:string = 'Diego Puentes';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  // i18nPlural
  public clients: string[] = ['maria', 'Pedro', 'fernando', 'Eduardo']
  public clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }


  // JSON pipe
  public jsonData = {
    'name': 'Fernando',
    'age': 25,
    'adress': 'ottawa, canada',
  }


  // ASYNC pipe
  public myObservableTimer = interval(2000)
    .pipe(
      tap(( value ) => console.log(value) )
    );





  public changeClient():void{
    this.name = 'Melissa Rincon';
    this.gender = 'female';
  }

  public deleteClient():void{
    this.clients.shift();
  }

}
