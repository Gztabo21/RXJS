import {range,from, fromEvent} from 'rxjs';
import { map, pluck, mapTo, filter } from 'rxjs/operators';

/*
range(1,10).pipe(
    filter( data => data %2 == 1)
).subscribe(console.log)
*/
//interface
interface personajes {
    tipo:String ,
    nombre: String
}
const personajes: personajes[] =[
    {
        tipo:'heroe',
        nombre:'Batman'
    },
    {
        tipo:'heroe',
        nombre:'Superman'
    },
    {
        tipo:'heroe',
        nombre:'Wonder Woman'
    },
    {
        tipo:'heroe',
        nombre:'Aquaman'
    },
    {
        tipo:'villano',
        nombre:'Jokker'
    },
    {
        tipo:'villano',
        nombre:'asertijo'
    }
] 

const source$ = from(personajes).pipe(
    filter( data =>  data.tipo != 'villano')
);

source$.subscribe(val =>console.log(val))

const keyup$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
    map(event => event.code),//entrada evento,salida string
    filter( code => code==="Enter")
)
keyup$.subscribe(code=>console.log('muestra',code))