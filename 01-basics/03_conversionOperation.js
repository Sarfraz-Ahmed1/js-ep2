let score = 33

console.log(typeof score); // number
console.log(typeof (score));

let score = "33"

console.log(typeof score); // string
console.log(typeof (score));

let score = "33abc"

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //NaN
console.log(valueInNumber);

let score = null

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //0

let score = undefined

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN

let score = true

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //1

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

// 1=> true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ************************************** Operations **********************

let value = 3
let negValue = -value // -3

console.log(2**3) // 2 raise to the power 3
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); //32
console.log(+true); //1
console.log(+""); //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); //101