import {jokes} from './data.js';
import readline, { moveCursor } from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
}
async function getValidInput(prompt, validate, errorMessage) {
    let isValid = false;
    let input;

    while (!isValid) {
        input = await askQuestion(prompt);
        if (validate(input)) {
            isValid = true;
        } else {
            console.log(errorMessage);
        }
    }
    return input;
}
function validateNumberInput(input) {
    return !isNaN(input);
}
console.log('\n ***WELCOME TO THE JOKE MACHINE***\nLet me give you a laugh to brighten up your day!')

async function theJokeMachine() {
    const numberOfJokes = await getValidInput (
    'How many jokes do you want? Choose a number, or press 0 if you want to quit\n',
    validateNumberInput,
    'YOU NEED TO WRITE A NUMBER WITH THE NUMBER KEYS! \nTRY AGAIN!\n'
    );

    if (parseInt(numberOfJokes) >0) {
        console.log('\nOkay, here we go:');
        const jokeList = createJokeList();
        writeJoke(jokeList, parseInt(numberOfJokes, 10))
    } else if (parseInt(numberOfJokes) == 0) {
        console.log('Alright then, have a funny day!');
        process.exit();
    }

    nextStep();
}    

    async function nextStep (){
    

    const answer = await getValidInput (
    '\nWhat do you want to do now?\nMake a pick:\n* Read more jokes (Press 1)\n* Add a joke to the list (Press 2)\n* Switch of the joke machine (Press 0)\n',
    validateNumberInput,
    'YOU NEED TO WRITE A NUMBER WITH THE NUMBER KEYS! \nTRY AGAIN!\n');
        if (answer.match('1')) {
            theJokeMachine();
        } else if (answer.match('2')) {
                await addJoke();
                nextStep(); 
        } else if (answer.match('0')) {
            console.log('Alright then, have a funny day!')
            process.exit();
        } else {
            console.log('This option doesn\'t exist, try again!')
            nextStep();
        }
    }


    function createJokeList() {
        const jokeList = []
        for (let joke of jokes) {
            jokeList.push({
                ID: joke.ID,
                question: joke.question,
                answer: joke.answer
            })
        }

        for (let i = jokeList.length -1; i > 0; i--) {
            const randomJoke = Math.floor(Math.random() * (i + 1)); 
            [jokeList[i], jokeList[randomJoke]] = [jokeList[randomJoke],jokeList[i]];
        }
        
        return jokeList;    
    }

    async function writeJoke (jokeList, numberOfJokes) {
        const collectedJokes = []
        for (let i =0; i < numberOfJokes; i ++) {
            const selectedJoke = jokeList.splice(0, 1)[0];
            collectedJokes.push(selectedJoke)
            console.log('\n#' + `${selectedJoke.ID}` + '\nQuestion: ' + `${selectedJoke.question}`)

            const jokeAnswer = await askQuestion ('\nDo you want the answer? Press \'1\'. If you want to cancel press \'0\'',
            validateNumberInput,
            'YOU NEED TO WRITE A NUMBER WITH THE NUMBER KEYS! \nTRY AGAIN!\n');
                if (jokeAnswer == '1') {
                    console.log('Answer: ' + `${selectedJoke.answer}`)
                } 
        }
        nextStep();
        return collectedJokes;

    }

    async function addJoke() {
        console.log ('Great! Please write the joke!');

        const addQuestion = await askQuestion ('\nWhat is the question?\n');
        const addAnswer = await askQuestion ('\nWhat is the answer?\n');

        jokes.push({ question: addQuestion, answer: addAnswer });

        console.log(`\nThanks! This is your joke:\nQuestion: ${addQuestion} \nAnswer: ${addAnswer}` );

        nextStep();
    }

theJokeMachine();