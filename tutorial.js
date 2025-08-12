// console.log('Hello JavaScript!');
const prompt = require("prompt-sync")();
const name = prompt('Hey stranger, what is ur name: ');
console.log('Hello ', name, ' welcome to the game!?');

const shouldWePlay = prompt('Do you wanna play? ');

// const condition = shouldWePlay.toLowerCase() === 'yes';
// console.log(condition);

if (shouldWePlay.toLowerCase() === 'yes') {
    // console.log('Okay, we will play!');
    //Game logic
    const leftOrRight = prompt('You enetered a maze! Do you want to go left or right?')
    if (leftOrRight === 'left') {
        console.log('You go left and find a dinosour!');
        const dino = prompt('Do u still wanna go left? ').toLowerCase()
        if (dino === 'yes' || dino === 'y' || dino === 'okay') {
            console.log('You are a brave warrior and a chance win prize if u can escape dinosaur!')
        } else {
            console.log('Great choice ' , name, '. You win!')
        }
    } else if (leftOrRight === 'right') {
        console.log('You go right and find a ice breathing dragon!')
    }


} else if (shouldWePlay.toLowerCase() === 'no') {
    console.log('Okay :(');
}

else {
    console.log('Invalid answer. Try again!');
}

/*
==
===
!=
!==
<
>
<=
=>
*/

