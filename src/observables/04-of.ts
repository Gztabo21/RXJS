import {of} from 'rxjs';

//Of
const obs$ = of(1,2,3,4,5,6) 
// const obs$ = of({1,2,3},{a:1,b:2})
//ejecutar
obs$.subscribe(
    next=> console.log('next',next),
    null,
    ()=>console.log('Terminamos!')
)