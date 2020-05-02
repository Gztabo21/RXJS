import { fromEvent } from "rxjs";
import { map ,tap } from "rxjs/operators";

const text = document.createElement('div');
text.innerHTML=`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget semper augue. Curabitur molestie rhoncus eleifend. Etiam non porttitor lectus. Aliquam a dolor at sapien pharetra sodales a vel purus. Integer vitae nibh ultricies, tristique turpis at, aliquam dolor. Curabitur sagittis, dolor ut faucibus imperdiet, tortor odio rutrum nibh, ut euismod est odio eget turpis. Aliquam vel ante dictum, porttitor lectus ac, blandit nisl. Phasellus ac lobortis neque. Praesent quis nisl ac ex mollis imperdiet ut a erat. In hac habitasse platea dictumst. Proin nec fermentum dui. Maecenas vitae est quis dolor gravida molestie nec quis felis. Suspendisse non urna elit. Maecenas ut volutpat mauris.
<br/><br/>
In ut lobortis ante. Donec iaculis semper pharetra. Proin dignissim quam vel tellus pharetra, sit amet dapibus nibh malesuada. Suspendisse rutrum elementum lobortis. Suspendisse elementum nec nunc et malesuada. Vivamus feugiat vulputate diam, ac tincidunt augue venenatis id. Mauris luctus elementum lacus sit amet porta. Donec mollis elit sit amet vehicula finibus. Fusce rhoncus ante non sollicitudin pellentesque. Vestibulum et magna sit amet quam maximus consequat. Aliquam tempor facilisis lorem. Fusce quis tellus lacus. Praesent dui nunc, dictum vitae feugiat quis, consectetur a ex.
<br/><br/>
Morbi laoreet aliquam cursus. Mauris laoreet orci elit, ac elementum risus fermentum id. Proin facilisis finibus massa ut ultrices. Fusce nec facilisis ligula. Vivamus et arcu eget enim mattis sollicitudin. Donec facilisis, arcu ac molestie scelerisque, nisi felis gravida libero, nec dapibus sapien augue eget augue. Aenean quis nunc eu mi efficitur vulputate ut at lorem. Ut elementum, tortor eu semper varius, orci sapien feugiat nunc, in tempor sapien ligula ut nisl. Curabitur sit amet eleifend lectus. Quisque massa justo, lobortis a risus ut, tempus scelerisque ante. Pellentesque finibus, sapien et varius elementum, urna massa rhoncus ex, mattis pellentesque ipsum dui ac odio. Cras eget convallis diam. Integer venenatis sem lorem, at dapibus ante feugiat sit amet. Morbi ornare nisi arcu, id rhoncus augue fermentum et.
<br/><br/>
Integer nec nunc a risus elementum imperdiet. Nulla vestibulum euismod egestas. Nunc id dolor nisi. Vestibulum finibus dictum velit at egestas. Morbi ac semper libero. Vestibulum quis eleifend lectus, sed accumsan nunc. Nulla volutpat ligula elit, vel rutrum leo bibendum id. Quisque et tellus id nisi congue aliquam nec at risus. Curabitur sed enim accumsan, varius ex vitae, interdum odio. Nunc quam risus, lobortis et tortor non, iaculis egestas purus. Etiam commodo tincidunt efficitur.
<br/><br/>
Aliquam erat nisi, dictum at viverra volutpat, tincidunt nec enim. Nunc tristique bibendum dolor, vitae pulvinar ex varius non. Proin interdum in justo quis pharetra. In hac habitasse platea dictumst. Nullam viverra bibendum risus tempor molestie. Donec porta ipsum lectus, in aliquam metus feugiat nec. In hac habitasse platea dictumst. Maecenas ultricies tristique iaculis. Donec ante erat, eleifend id ultricies mollis, finibus in erat. Vivamus eu fermentum ante. Aenean orci lacus, efficitur id volutpat ac, facilisis in nulla.
`;

const body = document.querySelector('body');
body.append(text);

//scroll y estilo

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);
//calculo
const calculoProgress= (event)=>{

 //desestruracion
 const { clientHeight,scrollHeight,scrollTop} = event.target.documentElement;
 //calculo para progress ScrollTop / scrollHeight - clientHeignt
 return (scrollTop /( scrollHeight- clientHeight ) ) * 100; 
}
//streams
const scroll$ = fromEvent(document,'scroll');
//progress
const progress$ = scroll$.pipe(
    //map( event => calculoProgress(event))
    map(calculoProgress),
   // tap(console.log) //para depurar el codigo
);
progress$.subscribe( porcetanje=>{
    progressBar.style.width = `${porcetanje}%`;
})
//scroll$.subscribe(console.log);
