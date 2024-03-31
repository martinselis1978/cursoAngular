import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class dbzService {

  public characters: Character[] = [{
    id:uuid(),
    name:'Krilin',
    power:1000
  },{
    id:uuid(),
    name:'Goku',
    power:9500
  },{
    id:uuid(),
    name:'Vegeta',
    power:7500
  }];

  addCharacter(character:Character):void{

    const newCharacter: Character = { id: uuid(), ...character }; //crea un nuevo personaje con todas las caracteristicas

    this.characters.push(newCharacter);
  }

  // oneDeleteCharacter(index:number){
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById( id:string){
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
