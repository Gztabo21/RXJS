import {Observable, Observer, observable }from 'rxjs';

//El 'Observer' es una interfaces
const observer : Observer<any>={
    next:value => console.log('[next]: ', value),
    error:error => console.warn('[error]: ', error),
    complete:() => console.log('complete: '),
}

const intervale$ = new Observable(subs =>{
    //crear un contador 1,2,3,4,5,6...
    let count = 0;
    
  const intervalo =  setInterval(()=>{
        count ++;
        subs.next(count)
        //cada segundo
    },1000);
    //complete
    setTimeout(()=>{
        subs.complete();
    },3000)
    // retorna una funcion
    return ()=>{
        //limpia el setintervalo y evitar fuga de memoria
            clearInterval(intervalo);
            //muestra msg
            console.log('detenido');
    }
});
//const subs1 =  intervale$.subscribe(num =>console.log('num',num));
const subs1 =  intervale$.subscribe(observer);
const subs2 =  intervale$.subscribe(observer);
const subs3 =  intervale$.subscribe(observer);
// unsubscribe en cadena
subs1.add(subs2)
     .add(subs3);

setTimeout(()=>{
subs1.unsubscribe()
},3000)