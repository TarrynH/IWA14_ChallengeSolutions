firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = (parameter) => { // add parameter
  console.log(parameter)
  console.log(parameter)
}

function sayHobby () { // change function name bc already a variable called hobby
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`) // change name to firstName 
}

sayHobby() // change function name