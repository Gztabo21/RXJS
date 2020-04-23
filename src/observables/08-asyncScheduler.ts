import { asyncScheduler} from 'rxjs';


const saludar = ()=>console.log('hola mundo');
const saludar2 = nombre =>console.log(`hola ${nombre}`);

//ejecutar

asyncScheduler.schedule(saludar,2000);
asyncScheduler.schedule(saludar2,1000,'Gustavo');

//intervale
const intervale$ = asyncScheduler.schedule(
    function(state){
        console.log('state',state);
        this.schedule(state+1,1000);//aumentara
    },3000,0
);

//ciclo de vida destruir asysnc
//primer OPCION
//setTimeout(()=>{
// intervale$.unsubscribe();
//},6000)
//SEGUNDA OPCION
asyncScheduler.schedule(()=>intervale$.unsubscribe(),6000)