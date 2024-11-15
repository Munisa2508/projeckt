//  1- misol 

// let a= 6
// if (a > 0) console.log(++a)
// else console.log(a)


//  2-misol

// let b = -6;  // Berilgan butun son

// if (b > 0) {
//   b += 1;  // Agar son musbat bo'lsa, 1 ga oshir
// }
// else {
//   b -= 2;  // Agar son manfiy yoki nol bo'lsa, 2 ga kamaytir
// }

// console.log(b);  // Hosil bo'lgan sonni konsolga chiqar

//  3- misol

// let c= 0
// if (c > 0) {
//      c +=1;
// }
// else if ( c== 0) {
//      c +=10
// }
// else {
//      c-=2;
// }

// console.log(c)


// 4-misol

// let k = 3;  
// let y = -5; 
// let z = -7;  

// let positiveCount = 0;  // Musbat sonlarni sanash uchun o'zgaruvchi


// if (k > 0) positiveCount++;
// if (y > 0) positiveCount++;
// if (z > 0) positiveCount++;


// console.log("Musbat sonlar soni:", positiveCount);


// 5-misol

// let m = 2;
// let n = -8;
// let o = 7;

// let musbat_sonlar = 0;
// let manfiy_sonlar = 0;


// if (m > 0) musbat_sonlar++;  
// else if (m < 0) manfiy_sonlar++;  

// if (n > 0) musbat_sonlar++; 
// else if (n < 0) manfiy_sonlar++; 

// if (o > 0) musbat_sonlar++;  
// else if (o < 0) manfiy_sonlar++; 


// console.log("Manfiy sonlar soni:", manfiy_sonlar);
// console.log("Musbat sonlar soni:", musbat_sonlar);


// 6-misol

// let u = 9
// let v = 5

// if ( u > v) {
//      console.log("Katta son;" ,u)
//  }

// if (u < v) {
//      console.log("Kichik son;", v)
//  }

// else console.log("Ikkala son teg!")


//  7-misol

// let g = 5
// let t = 8

// if (g < t) {
//      console.log("Kichik son;", g)
// }

// else console.log("Ikkala son teg!")


//  8-misol

// let w = 43
// let e = 33


// if (w > e) console.log("katta son;", w)

// console.log("kichik son;", e)


//  9-misol

// let tomoni = 34

// P = 4 * tomoni

// console .log(P)


// 10- misol

// let j = 45

// S = j * j 

// console .log (S)

//  11-misol

// let i = 12
// let l = 21

// yuza = i * l
// peremetri = 2 * (i + l)

// console .log ("S:" ,yuza)
// console .log ( "P:" ,peremetri)

//  12-misol
 
// let diametr = 15

// uzunligi = 3.14 * diametr

// console .log(uzunligi)


//  13-misol

// let kub = 25

// hajmi = kub * kub * kub
// sirti = 6 * (kub * kub)

// console .log("Hajmi:" ,hajmi)
// console .log("Sirti:" , sirti)


//  14-misol


// function son (number) {
//      if (number >= 10 && number <= 99) {
//          let tens = Math.floor(number / 10); // O'nlik xonasidagi raqam
//          let ones = number % 10;             // Birlar xonasidagi raqam
//          console.log("O'nlik xonasidagi raqam:", tens);
//          console.log("Birlar xonasidagi raqam:", ones);
//      } else {
//          console.log("Iltimos, ikki xonali son kiriting.");
//      }
//  }

//  son(32)


//  15-misol

// function sumOfDigits(number) {
//      if (typeof number === 'number' && number >= 10 && number <= 99) {
//          let tens = Math.floor(number / 10); // O'nlik xonasidagi raqam
//          let ones = number % 10;             // Birlar xonasidagi raqam
//          let sum = tens + ones;              // Raqamlar yig'indisi
//          console.log("Raqamlar yig'indisi:", sum);
//          return sum; // Yig'indisini qaytarish
//      } else {
//          console.log("Iltimos, ikki xonali son kiriting.");
//          return null; // No'malum son uchun null qaytarish
//      }
//  }
 
//  // Misol uchun chaqirish:
//  sumOfDigits(57);  // Raqamlar yig'indisi: 12


//  16-misol

// function swapDigits(number) {
//      if (typeof number === 'number' && number >= 10 && number <= 99) {
//          // O'nlik va birlar raqamlarini olish
//          let tens = Math.floor(number / 10); // O'nlik xonasidagi raqam
//          let ones = number % 10;             // Birlar xonasidagi raqam
 
//          // O'rnini o'zgartirib yangi sonni yaratish
//          let swappedNumber = ones * 10 + tens;
 
//          console.log("Almashtirilgan son:", swappedNumber);
//          return swappedNumber;  // Almashtirilgan sonni qaytarish
//      } else {
//          console.log("Iltimos, ikki xonali son kiriting.");
//          return null;  // Noto'g'ri son uchun null qaytarish
//      }
//  }
 
//  // Misol uchun chaqirish
//  swapDigits(57);  // Almashtirilgan son: 75


//   13.11.24   Misol 1-usul if usulida

// let a = 100

// if(a>=100)console .log("Chegirma 10%")

// else if (a<100)console .log ("Chegirma 5%")

// 2-usul TURNERE uli

// let b =200
// console.log((b >= 100)? "chegirma 10% " : "chegirma 5%")


// forga oid misollar
// 1-misol

// let k = 8
// let n = 5

// N > 0 shartini tekshiramiz
// if (n > 0) {
//     for (let i = 0; i < n; i++) {
//         console.log(k); // K sonini n marta chiqarish
//     }
// } else {
//     console.log("Iltimos, n soni musbat bo'lishi kerak.");
// }


//  2- misol

// let a = 5
// let b = 10
// // a < b shartini tekshiramiz
// if (a < b) {
//     for (let i = a + 1; i < b; i++) {  // a va b orasidagi sonlarni chiqarish
//         console.log(i);  // i ni chiqarish
//     }
// }
// else {
//     console .log("noto'g'ri kiritingiz")
// }


// 3-misol

// let d = 3
// let q = 12

// // k < n shartini tekshiramiz
// if (d < q) {
//     for (let i = n - 1; i >= k; i--) {  // k va n orasidagi sonlarni kamayish tartibida chiqarish
//         console.log(i);  // i ni chiqarish
//     }
// } else {
//     console.log("Iltimos, k < n bo'lishini ta'minlang.");
// }



//  7-misol

// function calculateSum(a, b) {
//     let sum = 0;

//     // a va b orasidagi barcha sonlar yig'indisini hisoblash
//     for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//         sum += i;
//     }

//     return sum;
// }

// // Misol uchun
// let a = 3;
// let b = 8;

// let result = calculateSum(a, b);
// console.log(`a = ${a}, b = ${b} orasidagi barcha butun sonlar yig'indisi: ${result}`);


//  8-misol

// function calculateProduct(a, b) {
//     // a va b orasidagi barcha sonlar ko'paytmasini hisoblash
//     let product = 1;

//     // a va b sonlari orasidagi barcha sonlarni ko'paytirish
//     for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//         product *= i; // Ko'paytma hisoblash
//     }

//     return product;
// }

// // Misol uchun
// let a = 1;
// let b = 5;

// let result = calculateProduct(a, b);
// console.log(`a = ${a}, b = ${b} orasidagi barcha butun sonlar ko'paytmasi: ${result}`);


//  9-misol

// function calculateSumOfSquares(a, b) {
//     let sumOfSquares = 0;

//     // a va b orasidagi barcha sonlarning kvadratlarining yig'indisini hisoblash
//     for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//         sumOfSquares += i * i;  // i ning kvadratini qo'shish
//     }

//     return sumOfSquares;
// }

// // Misol uchun
// let a = 5;
// let b = 10;

// let result = calculateSumOfSquares(a, b);
// console.log(`a = ${a}, b = ${b} orasidagi barcha butun sonlarning kvadratlarining yig'indisi: ${result}`);


//  10-misol

// function sumOfFirstNNumbers(n) {
//     let sum = 0;
    
//     // 1 dan n gacha bo'lgan barcha sonlarni yig'indisini hisoblash
//     for (let i = 1; i <= n; i++) {
//         sum += i;  // i ni yig'indiga qo'shish
//     }
    
//     return sum;
// }

// // Misol uchun
// let n = 25;

// let result = sumOfFirstNNumbers(n);
// console.log(`1 dan ${n} gacha bo'lgan sonlarning yig'indisi: ${result}`);


//  11-misol

// function sumOfSquares(n) {
//     let sum = 0;

    
//     for (let i = 1; i <= n; i++) {
//         sum += i * i;  // i ning kvadratini yig'indiga qo'shish
//     }

//     return sum;
// }

// // Misol uchun
// let n = 12;  
// let result = sumOfSquares(n);
// console.log(`${n} gacha bo'lgan sonlarning kvadratlarining yig'indisi: ${result}`);


// 12-misol

function calculateProduct(n) {
    let product = 1;  
    
    for (let i = 1; i <= n; i++) {
        product *= i;  
    }

    return product;
}

// Misol uchun
let n = 5;  

let result = calculateProduct(n);
console.log(`1 dan ${n} gacha bo'lgan sonlarning ko'paytmasi: ${result}`);


