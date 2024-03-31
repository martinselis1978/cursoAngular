

interface AudioPlayer {
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details{
    author:string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'New Song';

const { song:anotherSong, songDuration:duration, details } = audioPlayer; // desestructuración objetos {}

const {author} = details;

// console.log('Song: ', anotherSong);
// console.log('Duración: ', duration);
// console.log('Autor: ', author);


const [, , p3 = 'No encontrado.']: string[]=['Goku', 'Vegeta', 'Trunk']; // desetructuración de array []

console.log('Personaje 3: ', p3);

export {};