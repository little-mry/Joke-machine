const jokes = [
    {
        ID: 1,
        question: 'How come the stadium got hot after the game?',
        answer: 'Because all of the fans left'
    },
    {
        ID: 2,
        question: 'Why did the scarecrow win an award?',
        answer: 'Because he was outstanding in his field'
    },
    {
        ID: 3,
        question: 'What do you call fake spaghetti?',
        answer: 'An impasta'
    },
    {
        ID: 4,
        question: 'Why don’t scientists trust atoms?',
        answer: 'Because they make up everything'
    },
    {
        ID: 5,
        question: 'What did the buffalo say to his son when he left for college?',
        answer: 'Bison'
    },
    {
        ID: 6,
        question: 'How do you organize a space party?',
        answer: 'You planet'
    },
    {
        ID: 7,
        question: 'Why did the bicycle fall over?',
        answer: 'Because it was two-tired'
    },
    {
        ID: 8,
        question: 'What do you get when you cross a snowman and a vampire?',
        answer: 'Frostbite'
    },
    {
        ID: 9,
        question: 'Why don’t skeletons fight each other?',
        answer: 'They don’t have the guts'
    },
    {
        ID: 10,
        question: 'What do you call cheese that isn’t yours?',
        answer: 'Nacho cheese'
    },
    {
        ID: 11,
        question: 'Why do seagulls fly over the ocean?',
        answer: "Because if they flew over the bay, we'd call them bagels"
    },
    {
        ID: 12,
        question: 'Why was it called the dark ages?',
        answer: 'Because of all the knights'
    },
    {
        ID: 13,
        question: 'Why did the tomato blush?',
        answer: 'Because it saw the salad dressing'
    },
    {
        ID: 14,
        question: 'Did you hear the joke about the wandering nun?',
        answer: 'She was a roman catholic'
    },
    {
        ID: 15,
        question: 'What creature is smarter than a talking parrot?',
        answer: 'A spelling bee'
    },
    {
        ID: 16,
        question: 'Why did the kid cross the playground?',
        answer: 'To get to the other slide'
    },
    {
        ID: 17,
        question: 'Why do birds fly south for the winter?',
        answer: "Because it's too far to walk"
    },
    {
        ID: 18,
        question: 'What do you call two barracuda fish?',
        answer: 'A Pairacuda!'
    },
    {
        ID: 19,
        question: 'What did the father tomato say to the baby tomato whilst on a family walk?',
        answer: 'Ketchup'
    },
    {
        ID: 20,
        question: 'Why is Peter Pan always flying?',
        answer: 'Because he Neverlands'
    },
    {
        ID: 21,
        question: 'What do you do on a remote island?',
        answer: 'Try and find the TV island it belongs to'
    },
    {
        ID: 22,
        question: 'Did you know that protons have mass?',
        answer: "I didn't even know they were catholic"
    },
    {
        ID: 23,
        question: 'Have you heard the story about the magic tractor?',
        answer: 'It drove down the road and turned into a field'
    },
    {
        ID: 24,
        question: 'When will the little snake arrive?',
        answer: "I don't know but he won't be long..."
    },
    {
        ID: 25,
        question: "Why was Pavlov's beard so soft?",
        answer: 'Because he conditioned it'
    },
    {
        ID: 26,
        question: 'Do I enjoy making courthouse puns?',
        answer: 'Guilty'
    },
    {
        ID: 27,
        question: 'Why did the kid throw the clock out the window?',
        answer: 'He wanted to see time fly!'
    },
    {
        ID: 28,
        question: 'Hear about the new restaurant called Karma?',
        answer: 'There’s no menu: You get what you deserve'
    },
    {
        ID: 29,
        question: "Why couldn't the kid see the pirate movie?",
        answer: 'Because it was rated arrr!'
    },
    {
        ID: 30,
        question: 'What did the traffic light say to the car as it passed?',
        answer: "\"Don't look I'm changing!\""
    },
    {
        ID: 31,
        question: 'Why did the man run around his bed?',
        answer: 'Because he was trying to catch up on his sleep!'
    },
    {
        ID: 32,
        question: 'What did one wall say to the other wall?',
        answer: "I'll meet you at the corner"
    },
    {
        ID: 33,
        question: 'Why was the robot angry?',
        answer: 'Because someone kept pressing his buttons!'
    },
    {
        ID: 34,
        question: 'Which is the fastest growing city in the world?',
        answer: "Dublin'"
    },
    {
        ID: 35,
        question: 'A police officer caught two kids playing with a firework and a car battery.',
        answer: 'He charged one and let the other one off'
    },
    {
        ID: 36,
        question: 'What do you call a snake who builds houses?',
        answer: 'A boa constructor!'
    },
    {
        ID: 37,
        question: 'Why did the math book look sad?',
        answer: 'Because it had too many problems'
    },
    {
        ID: 38,
        question: 'What kind of music do mummies listen to?',
        answer: 'Wrap music'
    },
    {
        ID: 39,
        question: 'Why don’t some couples go to the gym?',
        answer: 'Because some relationships don’t work out'
    },
    {
        ID: 40,
        question: 'Why did the coffee file a police report?',
        answer: 'It got mugged'
    },
    {
        ID: 41,
        question: 'Why do programmers prefer dark mode?',
        answer: 'Because light attracts bugs'
    },
    {
        ID: 42,
        question: 'How many programmers does it take to change a light bulb?',
        answer: 'None, that’s a hardware problem'
    },
    {
        ID: 43,
        question: 'Why do Java developers wear glasses?',
        answer: 'Because they don’t see sharp'
    },
    {
        ID: 44,
        question: 'Why was the JavaScript developer sad?',
        answer: 'Because he didn’t know how to “null” his feelings'
    },
    {
        ID: 45,
        question: 'What’s a programmer’s favorite hangout place?',
        answer: 'Foo Bar'
    },
    {
        ID: 46,
        question: 'Why do programmers hate nature?',
        answer: 'It has too many bugs'
    },
    {
        ID: 47,
        question: 'How do you comfort a JavaScript bug?',
        answer: 'You console it'
    },
    {
        ID: 48,
        question: 'Why did the developer go broke?',
        answer: 'Because he used up all his cache'
    },
    {
        ID: 49,
        question: 'Why do programmers always mix up Christmas and Halloween?',
        answer: 'Because Oct 31 == Dec 25'
    },
    {
        ID: 50,
        question: 'What do you call a group of 8 hobbits?',
        answer: 'A hobbyte'
    }
];


export {jokes};