(async _=>{ 'use strict';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Badger Badger Badger Badger Badger Badger 
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const request = requester({});
const publish = 'https://ps.pubnub.com/publish/demo/demo/0/badger/0/';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Subscribe to Badger Channel Badger Badger 
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
subscribe({ channel : 'badger', message : message });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Listen Badger Badger Badger Badger Badger 
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function listen() {
    spoken.listen().then( transcript => {
        request({ url : publish + JSON.stringify(transcript) });
        //listen();
    } ).catch( e => console.info('Already listening.') );
}

/*
listen();
spoken.listen.on.end(listen);
spoken.listen.on.error( e => listen() );
*/
spoken.listen.on.partial( transcript => transcript.split(' ').forEach(show) );

//setInterval( listen, 2000 );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Button Badger Badger Badger Badger Badger 
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
document.querySelector('#listen').addEventListener( 'click', listen );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Receive Badger Badger Badger Badger Badger
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function message(payload) {
    console.log(payload);
    payload.m.forEach( message => 
        message.d.split(' ').forEach( character =>
            show(character)
        )
    );
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Display Badger Badger Badger Badger Badger
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function badger()   { show('badger')   }
function mushroom() { show('mushroom') }
function snake()    { show('snake')    }

/*
setInterval( badger, 2000 );
setInterval( mushroom, 2000 );
setInterval( snake, 2000 );
*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Show an Animated Gif Badger Badger Badger 
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show(character='badger') {
    if (['badger','mushroom','snake'].indexOf(character) == -1) return;

    const img  = document.createElement('img');
    const body = document.querySelector('body');

    img.src = `https://stephenlb.github.io/badger/media/${character}.gif`;

    img.className  = 'badger';
    img.style.top  = Math.ceil(Math.random()*window.innerHeight) + 'px';
    img.style.left = Math.ceil(Math.random()*window.innerWidth)  + 'px';

    body.appendChild(img);
    setTimeout( _ => body.removeChild(img), 5000 );
}

})();
