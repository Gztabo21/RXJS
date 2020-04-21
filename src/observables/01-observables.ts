import {Observable, Observer }from 'rxjs';

//El 'Observer' es una interfaces
const observer : Observer<any>={
    next:value => console.log('siguiente[next]: ', value),
    error:error => console.warn('error[error]: ', error),
    complete:() => console.log('complete: '),
}

//const obs$=Observable.create();

const obs$ = new Observable( subs=>{
 subs.next('hola');   
 // forzardo Error
 //const a = undefined;
 //a.name = gustavo;
});

obs$.subscribe(observer);



