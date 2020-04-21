import {Observable, Observer,Subject }from 'rxjs';

//El 'Observer' es una interfaces
const observer : Observer<any>={
    next:value => console.log('[next]: ', value),
    error:error => console.warn('[error]: ', error),
    complete:() => console.log('complete: '),
}
const intervaloID$ = new Observable<Number> (
    subs=>{ 
        const intervale = setInterval(
            () =>subs.next(Math.random())//numeros alertorio
            ,1000 //cada dos segundo
        );
            //return
        return ()=> {clearInterval(intervale), console.log('destruido')};
    }
)

//const subs1 = intervaloID$.subscribe(rnd=> console.log('subs1:',rnd) );
//const subs2 = intervaloID$.subscribe(rnd=> console.log('subs1:',rnd) );
//caracteristcs del Subject
/*
1.-casteo multiple
2.-Tambien es un observer
3.- next,error y complete
*/ 
//creacion de subject
const subject$ = new Subject();
const subscription = intervaloID$.subscribe(subject$);

/*const subs1 = subject$.subscribe(rnd=> console.log('subs1:',rnd) );
const subs2 = subject$.subscribe(rnd=> console.log('subs2:',rnd) );*/
const subs1 = subject$.subscribe(observer );
const subs2 = subject$.subscribe(observer );

setTimeout(()=>{
    subject$.next(10)
    subject$.complete()
    subscription.unsubscribe()
},3500)