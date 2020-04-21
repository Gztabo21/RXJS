import {Observable, Observer, observable }from 'rxjs';

//El 'Observer' es una interfaces
const observer : Observer<any>={
    next:value => console.log('[next]: ', value),
    error:error => console.warn('[error]: ', error),
    complete:() => console.log('complete: '),
}
