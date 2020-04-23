import {interval,timer} from 'rxjs';

const observer = {
    next: val=>console.log('next',val),
    error: error=> console.warn('error',error),
    complete:()=>console.log('complete')
}
const hoyen5 = new Date();
hoyen5.setSeconds(hoyen5.getSeconds()+5)

const intervale$ = interval(1000);//emite el valor cada segundo
const timer$ =timer(hoyen5);// emite un valor en un tiempo proporcionado 
console.log('inicio');
//intervale$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');