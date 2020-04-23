import {range,from, fromEvent} from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators'


//range(1,5).pipe(
   /* map(val=>{
        return val * 10;
    })*/
/*    map<number,string>(val=>(val*10).toString())
).subscribe(console.log)*/
const obs$ = fromEvent<KeyboardEvent>(document,'keyup')

const codeObs$ = obs$.pipe(map(event=>event.key));
const codeObsPluck$ = obs$.pipe( pluck('key'));
const codeObsMapTo$ = obs$.pipe( mapTo('hola'))
//pluck('target','baseURI')

codeObs$.subscribe(code => console.log('map :', code));
codeObsPluck$.subscribe(code => console.log('Plucks :', code));
codeObsMapTo$.subscribe(code=>console.log('mapto:',code))