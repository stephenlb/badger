(async _=>{ 'use strict';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Subscribe to Badger Channel Badger Badger 
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
subscribe({
    channel : 'badger'
,   message : message
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Receive Badger Badger Badger Badger Badger
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function message(payload) {
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Display Badger Badger Badger Badger Badger
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function badger() {
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Show an Animated Gif Badger Badger Badger 
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show(character='badger') {
    const img  = document.createElement('img');
    const body = document.querySelector('body');
    img.src = `https://stephenlb.github.io/badger/media/${character}.gif`;

    img.className  = 'badger';
    img.style.top  = Math.ceil(Math.random()*window.innerHeight) + 'px';
    img.style.left = Math.ceil(Math.random()*window.innerWidth)  + 'px';

    body.appendChild(img);
    setTimeout( _ => body.removeChild(img), 2000 );
}

setInterval( _=> show('badger'), 1000 );
setInterval( _=> show('mushroom'), 1000 );
setInterval( _=> show('snake'), 1000 );

})();
