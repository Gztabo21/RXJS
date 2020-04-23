import {from,of} from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

//observer

const observer ={
    next: val =>console.log('next:',val),
    complete:()=> console.log('complete')
}

//const source$ = from([1,2,3,4,5,6]);
//const source$ = of(...[1,2,3,4,5,6]);
//const source$ = from('gustavo');
const source$ = from(fetch('https://api.github.com/users/klerith'));
//source$.subscribe(observer)q
/*source$.subscribe(async(resp)=>{
    const dataSource = await resp.json();
    console.log(dataSource)
})*/

// funciones generadoras
const miGenerador =function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();
/*
for(let id of miIterable){
    console.log(id)
}
*/
from(miIterable).subscribe(observer);
