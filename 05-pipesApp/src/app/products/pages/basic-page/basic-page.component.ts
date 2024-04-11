import { Component } from '@angular/core';

@Component({
  selector: 'products-basic-page',
  templateUrl: './basic-page.component.html'
})
export class BasicPageComponent {
  public nameLower:string ='martin';
  public nameUpper:string ='MARTIN';
  public fullName:string ='MarTIn SeLIs';

  public customDate: Date = new Date();
}
