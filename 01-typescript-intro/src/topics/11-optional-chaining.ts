
export interface Passanger{
    name: string;
    children?: string[];
}

const passenger1: Passanger = {
    name: 'Martín',
}

const passenger2: Passanger = {
    name: 'Yanina',
    children: ['Bruno','Salvador'],
}

const printChildren = ( passanger: Passanger) => {
    const howManyChildren = passanger.children?.length || 0;
    console.log(passanger.name, howManyChildren);
}

printChildren(passenger2);