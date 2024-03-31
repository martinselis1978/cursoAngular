import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { __values } from 'tslib';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class DbzListComponent {
  @Input()
  public characterList:Character[]=[{
    name:'Trunk',
    power:10
  }];

  @Output()
  public oneDelete: EventEmitter<string>=new EventEmitter();

  oneDeleteCharacter( id?:string ):void{
    if (!id) return;
    this.oneDelete.emit(id);
  }

}
