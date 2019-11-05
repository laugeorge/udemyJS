/***********************************
 * Variables and data types
*/

/*
var firstName = 'George';
console.log(firstName);

var lastName = 'Smith';
var age = 20;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// cannot start a variable w/ a number, you can start with underscore(_3years), $ sign, or letter
var _3years = 3; 
// no john&mark
var johnMark = 'John and Mark';
// cannot name var as 'if'
var if = 23;
*/

/***********************************
 * Variables Mutation and Type Coercion
*/
// var firstName = 'George';
// var age = 30;

// //Type coercion
// console.log(firstName + " is " + age);

// var job, isMarried;
// job = 'engineer';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// // Variable mutation
// age = 'twenty eight'; 
// job = 'driver';

// alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/***********************************
 * Basic Operators
*/

// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = now -28;
// ageMark = now - 33;

// // Match operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // logical operator
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);

/**********************************************
 * Operator Precedence
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 */
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// //Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// //Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x,y);

// // More operators 
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x--;
// console.log(x);

/*******************************
 * Coding Challenge1
 */

// var massJohn = 20;
// var heightJohn = 100;
// var massMark = 25;
// var heightMark = 125;
// var bmiJohn, bmiMark; 
// bmiJohn = massJohn / (heightJohn * heightJohn);
// bmiMark = massMark / (heightMark * heightMark);
// console.log(bmiJohn, bmiMark);

// var higherBMI = bmiMark > bmiJohn;
// console.log(higherBMI);

// console.log("Is Mark's BMI higher than John's? " + higherBMI);

/***************
 * If / Else Statement
 */

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + 'is married');
// }
// else {
//     console.log(firstName + ' will hopefully marry soon');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// }
// else {
//     console.log(firstName + ' will hopefully marry soon');
// }


// var massJohn = 78; //kg
// var heightJohn = 1.69; //meters

// var massMark = 92;
// var heightMark = 1.95;

// var bmiJohn, bmiMark; 

// bmiJohn = massJohn / (heightJohn * heightJohn);
// bmiMark = massMark / (heightMark * heightMark);
// console.log(bmiJohn, bmiMark);

// if (bmiMark > bmiJohn) {
//     console.log('Mark BMI is higher than John\'s.');
// }
// else {
//     console.log('John\ BMI is higher than Marks\'s');
// }

/***********************
 * Boolean Logic (&&, ||, !)
 */

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// }
// else if (age >=13 && age < 20) { // between 13 and 20, age >=13 and <=20
//     console.log(firstName + ' is a teenager.');
// }
// else if (age >=20 && age < 38) { 
//     console.log(firstName + ' is a young man.');
// }
// else {
//     console.log(firstName + ' is a man.');
// }

/**********************
 * Ternary Operator and Switch Statements ('?', Switch (job) case)
 */
// var firstName = 'George';
// var age = 14;

// // Ternary Operator
// age >= 18 ? console.log(firstName + ' drinks beer.') :
//     console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// }
// else {
//     var drink = 'juice';
// } // same as above Ternary Operator

// Switch Statement
// var job = 'instructor';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites');
//         break;
//     default:
//         console.log(firstName + ' does something else');
// }

// age = 33;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }

/*************************
 * Truthy and Falsy Values and Equality Operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: all values that are not falsy

// var height;

// height = 23;

// if (height || height === 0) {
//     console.log('Variable is defined');
// }
// else {
//     console.log('Variable has NOT been defined');
// }

// // Equality operators
// if (height == '23') {
//     console.log('The == operator does type coercion!')
// }

/*******************************
* Coding Challenge 2
 */

// var mikeAvg = (89 + 89 + 89)/3;
// var johnAvg = (89 + 89 + 89)/3;
// var maryAvg = (89 + 89 + 89)/3;
// console.log(mikeAvg, johnAvg, maryAvg);

// switch (true) {
//     case mikeAvg > johnAvg:
//         console.log('Mike wins!')
//         break;
//     case johnAvg > mikeAvg:
//         console.log('John wins!')
//         break;
//     default:
//         console.log('it\'s a tied!');
// }

// switch (true) {
//     case mikeAvg > johnAvg && mikeAvg > maryAvg:
//         console.log('Mike wins!')
//         break;
//     case johnAvg > mikeAvg && johnAvg > maryAvg:
//         console.log('John wins!')
//         break;
//     case maryAvg > mikeAvg && maryAvg > johnAvg:
//         console.log('Mary wins!')
//         break;
//     default:
//         console.log('it\'s a tied!');
// }

/***************************
 * Functions
 */
//function name = calculateAge
// Argurment = birthyear, like a variable inside of an function
    // you can pass multiple argurment (birthyear, x, y)
// function calculateAge (birthyear) {
//     return 2018 - birthyear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);

// console.log(ageJohn, ageMike, ageJane);

// function yearsUnitlRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     }
//     else {
//         console.log(firstName + ' is already retired.');
//     }
// }

// yearsUnitlRetirement(1990, 'John')
// yearsUnitlRetirement(1948, 'Mark')
// yearsUnitlRetirement(1969, 'Jane')

/***************************
 * Function statements and Expressions
 */

// Function expression
// var whatDoYouDo = function (job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon.';
//         case 'designer':
//             return firstName + ' designes beautiful websites.';
//         default:
//             return firstName + ' does something else.';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));

// JS expression produce a value, single value; 2 +3 // output: 5, whenever JS expect a value, we write an expression
// a function expression can be stored in a variable
// JS statement, like a if statement

/***************************
 * Arrays
 */

// an arrays are also objects
// var names = ['John', 'Mark', 'Jane'];

// // below array is less use
// var years = new Array(1990, 1969, 1948);

// console.log(names);
// console.log(names.length);

// // Mutate Array data
// names[1] = 'Ben';
// names[5] = 'Mary';
// names[names.length] = 'Mary';
// console.log(names);
// console.log(names.length);

// // Different data types
// var john = ['John', 'Smith', 1990, 'designer', false];

// // push 'blue to end of the array
// john.push('blue');

// // push 'blue to front of the array
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);
// console.log(john.indexOf(1990)); // 2

// console.log(john.indexOf(23)); // -1

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);

/*********************************
 * Coding Challenge 3
 */
/*John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.*/

/*To tip the waiter a fair amount, John created a simple tip calculator 
(as a function). He likes to tip 20% of the bill 
when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.



/*********************************
  * Object and Properties
  */
 // object, order does not matter at all, and use the {} braces
 // object can hold arrays
 // firstName is key, 'john' is value
 // firstName is property of the john object

 //Ojbect literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith', 
//     birthYear: 1990, 
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName);
// console.log(john['lastName']);

// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = '1969';
// jane['lastName'] = 'Smith';
// console.log(jane);


/************************
 * Objects and Methods
 */
// attaching function to an object = methods

// var john = {
//     firstName: 'John',
//     lastName: 'Smith', 
//     birthYear: 1990, 
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(birthYear) {
//         return 2018 - birthYear;
//     }
// };

// console.log(john.calcAge(1990));

// an arrays are also objects, b/c only object has methods
// 1990 is an argument of the function

// this.birthYear is 1992, 'this' calls in the john birthYear (the present/current object)
// var john = {
//     firstName: 'John',
//     lastName: 'Smith', 
//     birthYear: 1992, 
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         return 2018 - this.birthYear;
//     }
// };
// console.log(john.calcAge());


// var john = {
//     firstName: 'John',
//     lastName: 'Smith', 
//     birthYear: 1992, 
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2018 - this.birthYear;
//     }
// };
// // var age = john.calcAge(); or 
// john.calcAge()
// console.log(john)

/*****************************
 * coding challenge 4
 */





/*****************************
 * Loops and Iteration
 */

for (var i = 1; i <= 10; i += 2) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

// For loop
var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i])
}

// while loop
var i = 0
while(i < john.length) {
    console.log(john[i]);
    i++;
}

// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') {
        continue;
    }
    console.log(john[i])
}

// break
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') {
        break;
    }
    console.log(john[i])
}

// looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}


/*****************************
 * coding challenge 5
 */