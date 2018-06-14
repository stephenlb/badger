# Say Badger Badger Badger

> Try it out: https://stephenlb.github.io/badger

Badger Badger Badger 
Badger Badger Badger 
Badger Badger Badger
Mushroom MUSHROOM!

![Badger Badger Badger](https://i.imgur.com/IvntBN5.gif)

Use your voice with ( [Spoken SDK](https://github.com/stephenlb/spoken) )
to capture and transmit your voice-transcript on the PubNub Network.

> Get your API Keys: https://dashboard.pubnub.com/signup

Voice capture technology is here and it's so good.
How good?
The [Spoken SDK](https://github.com/stephenlb/spoken) can understand your
voice 109% better than the human ear.
You can control apps using your voice.
This makes apps easier to use when driving or impaired visually.

## Capture Voice Commands

You can capture your voice commands calling the `spoken.listen()` method.
This method requests your microphone access.
Once the voice capture starts your computer starts translating
your speech into text.
This is commonly referred as Speech-to-Text.

```javascript
spoken.listen().then( transcript => {
    pubnub.publish({ message : transcript });
} );
```

Once the transcript is captured you can transmit the result
to be received by a remote computer or IoT Devices like a lamp.
You can say: "Turn on the hallway lights".
You can also say: "Badger Badger Badger".

## Receive Voice Commands


## Drop-in Ready-to-use Code


![Badger Mushroom Snake](https://i.imgur.com/5JHVOc6.gif)
