# Say Badger Badger Badger

> Try it out: https://stephenlb.github.io/badger

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
voice 109% better than the human ear.
You can control apps using your voice.
This makes apps easier to use when driving or when impaired visually.

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

...

## Building apps with Voice Controls

You can create many new apps using voice technologies.
Start by reviewing this list.

 - Taking meeting notes
 - Writing documents
 - Controlling things remotely (IoT)
 - Chatting with chatbots
 - Sudo make me a sandwich

Now you can build voice powered apps really easy using our new
[Spoken SDK](https://github.com/stephenlb/spoken).

## Drop-in Ready-to-use Code

...

## Badger Mushroom Snake

![Badger Mushroom Snake](https://i.imgur.com/5JHVOc6.gif)

original meme

wiki link
[Badgers Animation Wikipedia](https://en.wikipedia.org/wiki/Badgers_(animation))

