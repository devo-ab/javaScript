if (13 < 10) {
  console.log("I Am Small, I Do Not Bite");
}

const biriyaniPrice = 500;
if (biriyaniPrice < 300) {
  console.log("Mama, Give Some Biriyani");
}

const rainingOutside = true;
if (rainingOutside == true) {
  console.log("You And Me Under The Tree");
} else {
  console.log("No rain, No Romance");
}

const weight = 40;
if (weight > 20) {
  console.log("Hire a rickshaw");
} else {
  console.log("Kadhe Niye Jabo");
}

// practice
const time = 7;
if (time < 6) {
  console.log("Nasta Confirm");
} else {
  console.log("jharur bari confirm");
}

const logIn = false;
if (logIn == true) {
  console.log("Welcome");
} else {
  console.log("Get Lost");
}

const distance = 5;
if (distance >= 5) {
  console.log("i can ete chocolate");
} else {
  console.log("Big Fat Belly");
}

const examNumber = 85;
if (examNumber > 80) {
  console.log("I will be get a bike");
} else {
  console.log("Don't buy a bike for me");
}

const showTime = 8;
if (showTime < 9) {
  console.log("I will be watch a movie");
} else {
  console.log("i will be sleep with oil inside nose");
}

const temperature = 30;
if (temperature >= 30) {
  console.log("Run the AC");
} else {
  console.log("sleeping");
}

//
const salary = 75000;
const isBCS = true;
const height = 75;
if (salary > 50000) {
  console.log("Supatro");
} else {
  console.log("next 5 years single thako");
}

if (salary > 50000 && isBCS == true) {
  console.log("Supatro");
} else {
  console.log("next 5 years single thako");
}

if (salary > 500000 || height > 70) {
  console.log("Supatro");
} else {
  console.log("next 5 years single thako");
}

// practice
const age = 25;
const heightT = 75;
if (age > 18 && heightT > 60) {
  console.log("Gari Telbe");
} else {
  console.log("Garite Bose Thakbe");
}

const math = 79;
const english = 83;
if (math > 80 || english > 85) {
  console.log("Admission confirm");
} else {
  console.log("Biye Diye Debo");
}

const gps = 5;
const monthlySalary = 9000;
if ((gpa = 5 && monthlySalary < 10000)) {
  console.log("full free studentship");
} else {
  console.log("no owever");
}

const candidateAge = 29;
const experiance = 5;
if (candidateAge < 30 && experiance > 2) {
  console.log("you can attend the exam");
} else {
  console.log("you can not attend the exam");
}

const dim = 13;
const chicken = true;
if (dim > 12 || chicken == false) {
  console.log("dimer korma khabo");
} else {
  console.log("pauruti ar kola khabo");
}

const bodyTemp = 102;
const kashi = true;
if (bodyTemp > 100 || kashi == true) {
  console.log("Go to doctor");
} else {
  console.log("Kombol muri diye ghuma");
}

const present = 90;
const homeWork = false;
if (present > 80 && homeWork == true) {
  console.log("you can attend exam");
} else {
  console.log("Auto fail");
}

const current = true;
const mobileCharge = false;
if (current == false && mobileCharge == false) {
  console.log("Porte Bosbo");
} else {
  console.log("Video Game Khelbo");
}

const shirtPrice = 1200;
const coupon = true;
if (shirtPrice > 1000 && coupon == true) {
  console.log("get 20% discount");
} else {
  console.log("you can not get discount");
}

//
const price = 4000;
if (price >= 5000) {
  const discount = (6500 / 100) * 10;
  const pay = price - discount;
  console.log(pay);
} else {
  console.log(price);
}

if (price >= 5000) {
  const discount = (6500 / 100) * 10;
  const pay = price - discount;
  console.log(pay);
} else if (price >= 2500) {
  const discount = (price / 100) * 5;
  const pay = price - discount;
  console.log(pay);
} else {
  console.log(price);
}

// practice
const buyPrice = 4500;
if (buyPrice >= 6000) {
  const discount = (buyPrice / 100) * 15;
  const pay = buyPrice - discount;
  console.log(pay);
} else if (buyPrice >= 3000) {
  const discount = (buyPrice / 100) * 5;
  const pay = buyPrice - discount;
  console.log(pay);
} else {
  console.log(buyPrice);
}

const customerAge = 25;
const bill = 7000;
if (customerAge > 60) {
  const discount = (bill / 100) * 50;
  const pay = bill - discount;
  console.log(pay);
} else if (customerAge < 12) {
  console.log("no need to paid");
} else {
  console.log(bill);
}

const bankBalance = 30000;
if (bankBalance > 5000) {
  console.log("Tui Dhoni, AMake Biye Kor");
} else if (bankBalance < 5000 && bankBalance > 1000) {
  console.log("Bindas Life , Enjoy Kor");
} else {
  console.log("Deposit kor");
}

const marks = 51;
if (marks > 80) {
  console.log("A+");
} else if (marks <= 80 && marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

const bookPage = 65;
if (bookPage > 500) {
  console.log("Heart Attck size book");
} else if (bookPage <= 500 && bookPage >= 100) {
  console.log("mid Sixe book");
} else {
  console.log("small book");
}

const weather = -1;
if (weather > 20) {
  console.log("Hot Hot");
} else if (weather <= 20 && weather >= 0) {
  console.log("Cool Cool");
} else {
  console.log("ice");
}


const level = 5
if(level > 50){
    console.log("Pro Gamer")
}else if(level <= 50 && level >= 10){
    console.log("Expert Gamer")
}else{
    console.log("Novice")
}