console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return console.log('Hello World!');
}
// Call the function to test
hello();


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return console.log( 'Hello, ' + name );
}// end helloName
// Remember to call the function to test
helloName( 'Paran' );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber
  console.log( 'the answer is:', answer );
  return answer;
} //end addNumbers
addNumbers( 5, 6 );



// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
// defining a variable called "answer"
// setting it's value as num1*num2*num3
let answer = num1*num2*num3;
// console logging 'the answer is:' followed by the value of "answer"
console.log( 'the answer is:', answer );
// returning num1*num2*num3 (also identified as answer)
return answer;
}
//calling the multiplyThree function and giving it values to multiply
multiplyThree( 3,1,3 );


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ){
  if( number > 0 ){
    return console.log( number, 'is positive:', true );
  }
  else{
    return console.log( number, 'is positive:', false );
  }
}

isPositive( -7 );
isPositive( 0 );
isPositive ( 8 );
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
// console.log( 'isPositive - should say true', isPositive(3) );
// console.log( 'isPositive - should say false', isPositive(0) );
// console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  // if the array length = 0, therefore, empty, then
  // console log the array
  // return a console log 'undefined'
  if( array.length === 0 ) {
    console.log( array );
    return console.log( undefined );
  } // end if
  // else, if the array is not empty, 
  // console log the array 
  // then find the last item in the array and console log it 
  else{
    console.log( array );
    console.log( 'the last item in the array is:', array[array.length-1] );
    return array[array.length-1];
  } // end else
} // end getLast

// call function and test with different arrays: 
getLast( [ 'Paran', 'Dillon', 'Penelope', 'Lumi' ] );
getLast( [ 'Hannah', 'Stav', 'Floyd', 'Moon' ]);
getLast( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
getLast( [] );

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

// we create a function called find with the arguments 'value' and 'array'
function find( value, array ){
  // create a for loop that looks through the array for the value
  for( let i = 0; i < array.length; i++ ){
    // if the array at index of i (NOT formatted as indexOf thankyouverymuch:D ) matches the value
    if( array[i] === value ){
      // then return true a console log that says 'value is found in array'
      return console.log( 'value is found in array:', true );
    } // end if
  }// end for
  // otherwise, return false a console log that says 'value is found in array'
  return console.log( 'value is found in array', false );
} // end find

//call the function find
find( 'Stav', ['Hannah', 'Stav', 'Paran'] );


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  // create a for loop that looks through the array
  for( let i = 0; i<string.length; i++ ){
    // if our string's first index (i.e. first letter), matches the input letter
    if( string[0] === letter ){
      // console log true 
    return console.log( letter, 'is first letter:', true );
    }// end if
    // else console log false
    else{
    return console.log( letter, 'is first letter:', false );
    } // end else
  }// end for
} // end isFirstLetter
// call the function to test it 
isFirstLetter( 'D', 'Dillon' );
isFirstLetter( 'M', 'Paran' );

// console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
// console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  // create a variable called sum and set its' value to the number 0
  let sum = 0;
  // create a loop that looks through the array
  for( let i = 0; i<array.length; i++ ){
    // add each index of the array to sum's value
    sum += array[i];
  } // end for
  // TODO: loop to add items
  // return a console log of sum
  return console.log( sum );
}

sumAll( [1, 2, 3, 7] );
sumAll( [0, 5, 2, 1, 234] );

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive( array ){
  let newPositiveArray = [];
  let noPosNumbs = [];
  for( let i = 0; i<array.length; i++ ){
    if( array[i] > 0 ){
    newPositiveArray = [ array[i] ];
    console.log( newPositiveArray );
    } // end if
    else{
      console.log( [noPosNumbs] );
    }
  } // end for
  return;
} // end allPositive

allPositive( [1, 3, 0, -1] );

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
