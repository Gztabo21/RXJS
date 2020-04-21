import {Observable}from 'rxjs';


//const obs$=Observable.create();

const obs$ = new Observable( subs=>{
 subs.next('');   
});

obs$.subscribe(console.log);2



