import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numbers =[1,2,3,4,5];

const totalAcumulador =(acc,cur)=> acc+cur;

from(numbers).pipe(
    reduce(totalAcumulador,0)
).subscribe(console.log);

from(numbers).pipe(
    scan(totalAcumulador,0)
).subscribe(console.log)

//redux 
 interface usuario  {
     id?: string;
     autenticado?:boolean;
     token?:String;
     edad?: number;
 }

 const user: usuario[]=[
     {id:'dsd',autenticado:false,token:'null'},
     {id:'dsd',autenticado:true,token:'abc'},
     {id:'dsd',autenticado:true,token:'abc123'},
 ]

 const state$ = from( user ).pipe(
     scan<usuario> ( (acc,cur) =>{
         return {...acc,...cur} //destructor
     },{ edad : 33 })
 )
 const id$ = state$.pipe(
     map( state => state.id)
 )

 id$.subscribe(console.log);