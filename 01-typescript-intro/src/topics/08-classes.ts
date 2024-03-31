// import { Person } from './08-classes';

export class Person {


    // public name: string;
    // public address: string;

    constructor( public name:string, public address: string = 'No address'){
        // this.name= name;
        // this.address=address;
    };

}

// export class Hero extends Person {

//     constructor (
//         public alterEgo:string,
//         public age: number,
//         public realName: string,
//     ){
//         super( realName, 'New York')
//     }
// }

export class Hero {
    // public person:Person;

    constructor (
        public alterEgo:string,
        public age: number,
        public realName: string,
        public person:Person,
    ){
        // this.person= new Person(realName);
    }
}

const p1 = new Person('Tony Stark', 'New York');
const ironman = new Hero('Ironman',45, 'Casilda', p1);

console.log(ironman);