import {range,asyncScheduler} from 'rxjs';

const rc$ = range(-5,10,asyncScheduler);
console.log('inicio');
rc$.subscribe(console.log);
console.log('fin')