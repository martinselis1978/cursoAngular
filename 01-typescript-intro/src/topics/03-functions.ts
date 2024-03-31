
function addNumbers(a: number, b: number){
    return a+ b;
}

const addNumbersArrow = (a:number, b:number):string => {
   return `${ a + b}`;
}

function multiply (firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const res: number = addNumbers(1,2);
const res2: string = addNumbersArrow(1,2);
const multiplyRes: number = multiply(5);

//console.log({res});
//console.log({res2});
//console.log({multiplyRes});
//console.log({res,res2,multiplyRes});

interface Character {
    name:string;
    hp:number;
    showHp:() => void;
}

const healCharacter = ( character: Character, amount: number ) => {
    character.hp += amount;
}

const strider:Character={
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    },
}

healCharacter(strider,10);
healCharacter(strider,40);

strider.showHp();

export {};