import { tap } from 'rxjs/operators';
import { range } from 'rxjs';

const obs$ = range(1,10).pipe(
    tap(x=>console.log)
)


obs$.subscribe(console.log);