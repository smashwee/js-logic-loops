console.log('JS Logic Loops');

/* if statements */
if ('foo' === 'foo') {
  console.log('Of course these strings are equal!');
}

if (5 > 10) {
  console.log ('You will NEVER see this');
} else{
  console.log('You will ALWAYS see this!');
}

// write a new if statement
// that checks if a number stored in a var
// is greater than 100
// if the var is NOT > 100, let the user know what it is.

var number = 120;

if (120 > 100) {
  console.log('This is right!!')
}

if (120 < 100) {
  console.log('this is wrong')
} else {
  console.log(number + ' is not > 100')
}


var numbers = [10,20,140];

if (numbers[2] > 100) {
  console.log ('Yea this works')
}

//is a sting stored in a variable,
// the same as another string?

var myString = 'foo';
if (myString === 'foo') {
  console.log('hey, here you are');
} else {
  console.log('you are in the else');
}

// the else if statement
if (5 < 4){
  console.log('you will not end up here');
} else if (5 >= 5){
  console.log('you will end up here');
} else {
  console.log('you will not end up here either');
}

// a function that returns something
function topSpeed(){
  return (75 + 5); // return the number 80
}

console.log(topSpeed()); //logs the number 80

// write a function that accepts arguments
// this now means that we are required
// to provide values for those arguments
// when we invoke the function
function addNumbers(num1,num2){
  return (num1 + num2); //the values of my args
} //are now used as vars inside my function
console.log(addNumbers(100, 3000));// logs 3100 to the console

// returns true
if(addNumbers(50,50) === 100){
  console.log('CONGRATS!!!');
}
