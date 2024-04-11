import { Component } from '@angular/core';
import { Observable, interval, take, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html'
})
export class UncommonPageComponent {
  // i18nSelect
  public name:string='Martin';
  public gender:'male'|'female'|'other' = 'male';
  public invitationMap= {
    'male':'invitarlo',
    'female':'invitarla',
    'other':'invitarlo/a',
  }

  changeClient():void{
    this.name = 'Meliza';
    this.gender = 'other';
  }

  // i18nPlural
  public clientes: string[] = ['Martín','Yanina','Bruno','Salvador','Maximino','Teresa','Sebastián','Matías','Nicolás'];
  public clientesMap ={
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando.',
  }

  deleteClient():void{
    this.clientes.shift();
  }

  // keyValue Pipe
  public person = {
    name: 'Martin',
    age: 46,
    adress: 'Bolívar 2072',
  }

  // Async Pipe
  public myObservavleTimer: Observable<number> = interval(2000)
  .pipe(
    tap( value => console.log('tap:', value)),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
      this.person.name ='Otro nombre';
    }, 3500);
  })

}
