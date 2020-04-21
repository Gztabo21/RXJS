import {fromEvent} from 'rxjs';
//creacion de fromEvent

/**eventos del dom */
const srcl$ = fromEvent<MouseEvent>(document,'click');
const src2$ = fromEvent<KeyboardEvent >(document,'keyup');
//observer

const observer ={
    next:val => console.log('next:',val.key)
}
//ejecutar
srcl$.subscribe(observer)
src2$.subscribe(observer);