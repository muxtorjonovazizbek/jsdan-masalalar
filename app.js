
// IZOH 
// Barcha vazifa qilindi va qoshimcha vazifilar qilindi


// 1. sodda kalkulyator yarating prompt dan foydalaning 
// let a = +prompt("Enter first number")
// let b = +prompt("Enter second number")

// console.log(`${a} first number`);
// console.log(`${b} second number`);


// function calculate() {
//     return a + b
// }
// console.log(calculate(a,b));




// 2. prompt da kiritilgan son musbat bo’lsa 
// uni qiymatini 1ga kamaytirsin manfiy bo’lsa 1 ga oshirsin

// let a = +prompt("enter a number")
// console.log(a);

// if (a > 0) {
//     console.log(--a);
// }else {
//     console.log(--a);
// }



// 3.argument sifatida qabul qilgan sonni teskari qiluvchi arrow function yarating kiritilgan sonni 2 xonaligini tekshiring va bu function faqat 2 xonali son uchun ishlasin

// const reverseNumber = (number) => {
//     if(number >= 10 && number <= 99) {
//         return Math.floor(number.toString().split('').reverse().join(''))
//     }else {
//         return "2 Xonali son kirit"
//     }
// }
// console.log(reverseNumber(56));


// ↑ Tepadagi 3-vazifani yana bitta usuli (qo'shimcha)

// const reverseNumber2 = (number) => {
//     if (number >= 10 && number <+99) {
//         const onlik = parseInt(number / 10 )
//         const birlik = number % 10
//         return birlik * 10 + onlik
//     }else {
//         return "2 Xonli son kirit"
//     }
// }
// console.log(reverseNumber2(27));




// 4. 3-savolni 3 xonali son uchun ham bajaring

// const reverseNumber = (number) => {
//     if(number >= 100 && number <= 999) {
//         return Math.floor(number.toString().split('').reverse().join(''))
//     }else {
//         return "3 Xonali son kirit"
//     }
// }
// console.log(reverseNumber(123));


// ↑ Tepadagi 4-vazifani yana bitta usuli (qo'shimcha)

// const reverseNumber2 = (number) => {
//     if (number >= 100 && number <+999) {
//         const yuzlik = parseInt(number / 100 )
//         const onlik = parseInt((number % 100) / 10)
//         const birlik = number % 10
//         return birlik * 100 + onlik * 10 + yuzlik;
//     }else {
//         return "3 Xonli son kirit"
//     }
// }
// console.log(reverseNumber2(321));



// Yana  4 honaliklar uchun ham qilindi (qoshimcha)
// const reverseNumber2 = (number) => {
//     if (number >= 1000 && number <+9999) {
//         const minglik = parseInt(number / 1000 ) //2
//         const yuzlik = parseInt((number % 1000) / 100 ) //1
//         const onlik = parseInt((number % 100) / 10)//2
//         const birlik = number % 10//3
//         return birlik * 1000 + onlik * 100 + yuzlik * 10 + minglik;
//     }else {
//         return "4 Xonli son kirit"
//     }
// }
// console.log(reverseNumber2(3698));

// ↑ tepadagi 4 honaliklar yana bir usuli (qoshimcha)

// const reverseNumber = (number) => {
//     if(number >= 1000 && number <= 9999) {
//         return Math.floor(number.toString().split('').reverse().join(''))
//     }else {
//         return "4 Xonali son kirit"
//     }
// }
// console.log(reverseNumber(1234));



// 5. student baliga qarab o’qishga kirgan mavqeini aniqlang 100% - 70% bo’lsa budjet 70% - 50% contract 50% dan past bo’lsa yiqildi bu savolni function decloration dan foydalanib bajaring student balini function ga argument sifatida kiritilsin

// function examGrade(a) {
//     if (a >=70 && a <= 100) {
//         return "Budjetga qabul qilindingiz"
//     }else if (a >= 50 && a < 70) {
//         return "Contractga qabul qilindingiz"
//     }else if (a < 50) {
//         return "O'qishga kira olmadiz"
//     }
// }
// console.log(examGrade(100));