import { of } from "rxjs";
import { take } from "rxjs/operators";

const number$ = of(1,2,3,4,5,6);

number$.pipe(
    take(3)
).subscribe(
    {
        next: vals =>(console.log('valor:',vals)),
        complete: ()=>(console.log)
    }
)

