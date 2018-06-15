# Say Badger Badger Badger

> **Try it out:** https://stephenlb.github.io/badger

Use your voice with ( [Spoken SDK](https://github.com/stephenlb/spoken) )
to capture and transmit your voice-transcript on the PubNub Network.

> **Get API Keys:** https://dashboard.pubnub.com/signup

![Badger Badger Badger](https://i.imgur.com/IvntBN5.gif)

> Badger Badger Badger 
> Badger Badger Badger 
> Badger Badger Badger
> Mushroom MUSHROOM!

Voice capture technology is here and it's so good.
How good?
The [Spoken SDK](https://github.com/stephenlb/spoken) can understand your
voice 109% of the human ear can gather.
You can control apps using your voice.
This makes apps easier to use when driving or when impaired visually.

## Capture Voice Commands

You can capture your voice commands calling the `spoken.listen()` method.
This method requests your microphone access.
Once the voice capture starts your computer starts translating
your speech into text.
This is commonly referred as **Speech-to-Text**.

```javascript
spoken.listen().then( transcript => {
    pubnub.publish({ message : transcript });
} );
```

Once the transcript is captured you can transmit the result
to be received by a remote computer or IoT Device, like a lamp.
You can say: "Turn on the hallway lights.".
You can also say: "Badger Badger Badger.".

## Receive Voice Commands

Using any one of the
[PubNub SDKs](https://www.pubnub.com/docs)
you can receive commands driving by your voice.

```javascript
pubnub.subscribe({ channels: ['badger'] });
pubnub.addListener( { message : transcript => {
    // DO SOMETHING HERE WITH YOUR VOICE TRANSCRIPT
    console.log(transcript);
} );
```

## Building apps with Voice Controls

You can create many new apps using voice technologies.
Start by reviewing this list.

 - Taking meeting notes
 - Writing documents
 - Controlling things remotely (IoT)
 - Chatting with chatbots
 - Sudo make me a sandwich

![Badger Mushroom Snake](https://i.imgur.com/5JHVOc6.gif)

Now you can build voice powered apps really easy using our new
[Spoken SDK](https://github.com/stephenlb/spoken).

## Drop-in Voice SDK with Ready-to-use Code

> **Get API Keys:** https://dashboard.pubnub.com/signup

You can use the following code to add voice-controls to your app.

### Voice Command App

Use this code on the device with the microphone.

```html
<script src="https://stephenlb.github.io/spoken/spoken.js"></script>
<script src="https://cdn.pubnub.com/sdk/javascript/pubnub.4.21.2.min.js"></script>
<script>( async e => { 'use strict';

const subscribe_key = '_SUBSCRIBE_API_KEY_';
const publish_key   = '__PUBLISH_API_KEY__';
const data_channel  = 'badger';

// Event Stream Network
const pubnub = new PubNub({
    publishKey   : subscribe_key,
    subscribeKey : publish_key
});

// Transmit your captured voice transcription
spoken.listen().then( transcript => {
    pubnub.publish({ message : transcript });
} ).catch( e => console.info('Already listening.') );

})()</script>
```

### Remote Device App

Use this code on the remote device like an IoT lightbulb.

```html
<script src="https://cdn.pubnub.com/sdk/javascript/pubnub.4.21.2.min.js"></script>
<script>( async e => { 'use strict';

const subscribe_key = '_SUBSCRIBE_API_KEY_';
const publish_key   = '__PUBLISH_API_KEY__';
const data_channel  = 'badger';

// Event Stream Network
const pubnub = new PubNub({
    publishKey   : subscribe_key,
    subscribeKey : publish_key
});

pubnub.subscribe({ channels: [data_channel] });
pubnub.addListener( { message : transcript => {
    // DO SOMETHING HERE WITH COMMAND
    console.log(transcript);
} );

})()</script>
```

That's it!
Now you can create a voice controlled device in just a few minutes.

## Badgers, Mushrooms and a Snake

The original meme cartoon was published on 2 September 2003.

> [Original Badgers Animation](https://en.wikipedia.org/wiki/Badgers_(animation))

![Badgers Animation](https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Badgers_Badgers.gif/220px-Badgers_Badgers.gif)

The cartoon loops indefinitely.
The first two badger scenes contain twelve badgers.
And subsequent badger scenes contain eleven badgers.
