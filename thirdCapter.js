const passed = false;
console.log(typeof passed);

const country = "Bangladesh";
const fail = true;
const price = 555;

console.log(typeof country);
console.log(typeof fail);
console.log(typeof price);

// practice
const countPrice = 555;
console.log(typeof countPrice);

const learning = true;
console.log(typeof learning);

const megaCity = "Dhaka";
console.log(typeof megaCity);

const temperature = 102.5;
console.log(typeof temperature);

const isHungry = true;
console.log(typeof isHungry);

const isRich = true;
console.log(typeof isRich);

// let
let countPrice2 = 35;
countPrice2 = 45;
console.log(countPrice2);

let balance = 500;
balance = 400;
console.log(balance);

// practice
let age = 24;
console.log(age);
age = 30;
console.log(age);

let pocketMoney = 500;
pocketMoney = 150;
console.log(pocketMoney);

let studyTime = 4;
studyTime = 1;
console.log(studyTime);

let friendCount = 3;
friendCount = friendCount - 2;
console.log(friendCount);

let phonePrice = 25000;
phonePrice = 12000;
console.log(phonePrice);

let chairsCount = 40;
chairsCount = chairsCount - 8;
console.log(chairsCount);

let playTime = 4;
playTime = 0;
console.log(playTime);

// practice

// Bangladesh Cricket Match Score
const score = 275;

// draw a random circle
// i make this circle without any parameter
//  after i draw the circle, i count the radius
const radius = 24;

//** here i told my favorite dress count, i have many favorite dress, but i count the most favorite dress */
const dress = 5;

// My elder brother gift me 100 taka because of my birthday
const giftMoney = 100;

// in morning 1st i read and practice marahaba javaScript E marthaba 3 hours
// then i read a noble ithikothar porer kotha 2 hours
// then i read some article
const studyTime2 = 7;

/* i borrow from my brother about 500 taka, i send this via bKash, service charge will be 5 taka without cash out charge */
const sendMoney = 500;

// included the product price and delivery charge
const pay = 720;

// practice
const favoriteFood = "Jhal Muri";

const city = "Chittagong";
const City = "Dhaka";
console.log(city, City);

const userName = "Johan";
const username = "Jovan";
console.log(userName, username);

const homeAddress = "Mirpur-1, Mazar Road, Dhaka, Bangladesh";
console.log(homeAddress);

// super is a keyword, thats why can not use as a variable name
// const super = 35
// console.log(super)
// Output : SyntaxError: Unexpected token 'super'

// class is a keyword, thats why can not use as a variable name
// const class = 10
// console.log(class)
// Output : SyntaxError: Unexpected token 'class'

// can not use a digit as a variable name in first of the variable name, but we can use in the other position in the word like middle, end or anywhere, but not first.
// const 2ndPosition = "Miraz" // wrong because of use a number in start
const position2nd = "Miraz"; // its right because number does not use in start
console.log(position2nd);
// Output : SyntaxError: Invalid or unexpected token

const fatherAge = "50";
const fatherAgeNumber = parseInt("50");
const sonAge = "20";
const sonAgeNumber = parseInt("20");
const totalAge = fatherAgeNumber + sonAgeNumber;
console.log(totalAge);

const input = "x20";
const inputNumber = parseInt("x20");
console.log(inputNumber);

const age2 = parseInt("50f");
const weight = parseInt("9twenty");
const address = parseInt("tom60");
console.log(age2, weight, address);

const height = 1.68;
const heightInt = parseInt(height);
const heightFlt = parseFloat(height)
console.log(heightInt, heightFlt);

const first = 1.8768947641356
const second = 2.574684768456
const total = first + second
const totalNum = parseFloat(total.toFixed(2))
console.log(typeof totalNum, totalNum)
console.log(typeof total.toFixed(2), total.toFixed(2))

const third = 3.556876894
const fourth = 4.564687894
const totalSum = third + fourth
const totalSumNum = parseFloat(totalSum.toFixed(2))
console.log(typeof totalSumNum, totalSumNum)


// practice
const num1 = "20"
const num2 = 10
const sum = parseInt(num1) + num2
console.log(sum)

const value = 3.14159
const valueInt = parseInt(value)
console.log(valueInt)


const boy = "premikBoy"
const boyNum = parseInt(boy)
console.log(boyNum) // Output : NaN

const value1 = 3.456
const value2 = 2.789
const totalValue = value1 + value2
const totalValueNum = parseFloat(totalValue.toFixed(2))
console.log(totalValueNum)

const value3 = "56.78"
const value3Num = parseFloat(value3)
const value4 = "12.34"
const value4Num = parseFloat(value4)
const totalValueSum = parseFloat(value3Num + value4Num)
console.log(totalValueSum)


const valueOne = 10.5678
const valueOneNum = parseFloat(valueOne.toFixed(1))
console.log(valueOneNum)
const value6 = 5.4321
const value6Num = parseFloat(value6.toFixed(1))
console.log(value6Num)


const value7 = "42.45689754"
const value7Num = parseFloat(value7)
const value7Number = parseFloat(value7Num.toFixed(3))
console.log(value7Number)