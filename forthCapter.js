console.log(5 > 10);
console.log(5 < 10);
console.log(5 == 10);
console.log(10 <= 10);

// practice
const me = 7;
const elderBro = 5;
console.log(me > elderBro);

const class1 = 45;
const class2 = 50;
console.log(class1 > class2);

const examNumMe = 75;
const examNumFri = 75;
console.log(examNumMe == examNumFri);

const savingTarget = 100;
const saving = 95;
console.log(savingTarget >= saving);

const num1 = 10;
const num2 = 7;
console.log(10 != 7);

const num3 = 20;
const num4 = 15;
console.log(num3 <= num4);

const friMarks = 97;
const myMarks = 45;
console.log(friMarks < myMarks);

// practice
const broAge = 10;
const myAge = 15;
console.log(broAge <= myAge);

const passMarks = 33;
const obtainMarks = 45;
console.log(obtainMarks >= passMarks);

const kodbel = 100;
const jambura = 120;
console.log(jambura < kodbel);

const friRead = 10;
const myRead = 10;
console.log(friRead == myRead);

const myBiskut = 15;
const friBiskut = 20;
console.log(myBiskut < friBiskut);

const realMardrid = 2;
const barcelona = 3;
console.log(realMardrid < barcelona);

const myName = "Rahim";
const friName = "karim";
console.log(myName == friName);

const myTodayReading = true;
const friTodayReading = false;
console.log(myTodayReading == friTodayReading);

// practice
const myMoney = 50;
const friMoney = "50";
console.log(myMoney == friMoney);
console.log(myMoney === friMoney);

const word1 = "JavaScript"
const word2 = "JavaScript"
console.log(word1 == word2)// here only check the data, and data are same thats why output  will be true
console.log(word1 === word2)// output true, because here check the data type and the data, both are same, thats why output will be true

const number1 = 25
const number2 = "25"
console.log(number1 == number2) // output : true, because here only check the data, and string number is the same of number javaScript think thats why true
console.log(number1 === number2) // output : false, because here at single time check the data, and the data type, if both are same then show true, but here one is number, and other one is string. thats why output will be false

const fruit1 = "apple"
const fruit2 = "apple"
console.log(fruit1 == fruit2)
console.log(fruit1 === fruit2)

const text = "test"
const text1 = "TEST"
console.log(text == text1)
console.log(text === text1)

const variableX = 15
const variableY = "20"
console.log(variableX != variableY)
console.log(variableX !== variableY)

const variableA = hello // ReferenceError: hello is not defined, here hello value is not set, here hello declare as a variable , that will be the variableA Value, but hello is not define, thats code gets error.
const variableB = "Hello"
console.log(variableA == variableB)
console.log(variableA === variableB)