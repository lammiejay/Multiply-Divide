const inputOne = document.getElementById('input-one');
const inputTwo = document.getElementById('input-two');
const multiBtn = document.getElementById('multiply');
const diviBtn = document.getElementById('divide');
const resultOut = document.getElementById('result');
const clearBtn = document.getElementById('clear')


const multiplication = () => {
    let multiply = inputOne.value * inputTwo.value;
    resultOut.innerHTML= `${multiply}`;
}

// multiplication();

const division = () => {
    let divide = inputOne.value / inputTwo.value;
    resultOut.innerHTML= `${divide}`;
    
}

// clear input box 
const clear = () => {
    inputOne.value = '';
    inputTwo.value = '';
    resultOut.innerHTML = '0'
}


// Event listeners
diviBtn.addEventListener('click', division);
division();

multiBtn.addEventListener('click', multiplication)
multiplication();

clearBtn.addEventListener('click', clear);
clear();

//  ===== EXPORT AND IMPORT ===== //
// export const add = (a, b) => a + b;

// or

// export default function add (a, b) {
    // return a + b 
// }

// import in other files
// JS2
// import {add} from './add.js'

// or
// import add from './add.js'

// webpack
// module.exports = {
    // entry: './app.js',
    // output: {
            // path: './dist',
            // filename: 'bundle.js' 
    // }
// }



// try catch
// try {
//     ourFunction();
// } catch(e) {
//     console.log(e.message)
//     console.log(e.name)
//     console.log(e instanceof TypeError)
// } 

// console.log('it keeps going')