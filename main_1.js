//  funksiyaga oid misollar

// 1-misol

// let a = 2;
// let b = 5;
// let d = 6; 

// function PowerA3(x) {
//     return x ** 3;
// }

// console.log(PowerA3(a)); 
// console.log(PowerA3(b));
// console.log(PowerA3(d))

// 2-misol

// let c = 2
// let s = 3
// let r = 4

// function PowerA234 (x) {
//     return x * 2;
// }

// console.log(PowerA234(c))
// console.log(PowerA234(s))
// console.log(PowerA234(r))

//  3-misol

// let tomonUzunligi = 6;

// function tengTomonliUchburchak(a) {
//     // Perimetrni hisoblash
//     let perimetr = 3 * a;

//     // Balandlikni hisoblash (Pifagor teoremasidan foydalaniladi)
//     let balandlik = Math.sqrt(a * a - (a / 2) * (a / 2));

//     // Yuza hisoblash
//     let yuza = 0.5 * a * balandlik;

//     // Natijalarni chiqarish
//     console.log(`Teng tomonli uchburchakning perimetri: ${perimetr}`);
//     console.log(`Teng tomonli uchburchakning yuzi: ${yuza}`);
// }

// tengTomonliUchburchak(tomonUzunligi);

// 4-misol

// function yigindiHisobla(a, b, c) {
//     let yigindi = a + b + c;

//     console.log("Berilgan sonlar yig'indisi: " + yigindi);
// }

// yigindiHisobla(5, 10, 15);  


//  5-misol

// let a = 89;
// let b = 43;
// let c = 54;
// let d = 25;

// // Minmax funksiyasini yaratish
// function Minmax(x, y) {
//     return [Math.min(x, y), Math.max(x, y)]; 
// }

// let [min_ab, max_ab] = Minmax(a, b);
// let [min_cd, max_cd] = Minmax(c, d);
// let [min_all, max_all] = Minmax(min_ab, min_cd); // Barcha kichik son va kattasini aniqlash
// let [max_final] = Minmax(max_ab, max_cd); // Barcha kattalarni aniqlash

// // Natijalarni chiqarish
// console.log(`Sonlar: a = ${a}, b = ${b}, c = ${c}, d = ${d}`);
// console.log(`Kichik son: ${min_all}, Katta son: ${max_all}`);


//  6-misol

// function sortAscending(a, b, c) {
//     let sorted = [a, b, c];  // Sonlarni massivga joylashtiring
//     sorted.sort((x, y) => x - y);  // O'sish tartibida tartiblash
//     return sorted;  // Tartiblangan massivni qaytarish
// }

// let [a, b, c] = sortAscending(32, 43, 12);

// console.log(`Sonlar o'sish tartibida: a = ${a}, b = ${b}, c = ${c}`);


//  7-misol

// function doiraYuzi(radius) {
//     return Math.PI * radius * radius;  // Pi * r^2 formula orqali yuzani hisoblash
// }

// // 3 ta doira uchun radiuslar
// let radius1 = 5;  // 1-doira radiusi
// let radius2 = 7;  // 2-doira radiusi
// let radius3 = 10; // 3-doira radiusi

// // Har bir doira uchun yuzani hisoblash
// let yuza1 = doiraYuzi(radius1);
// let yuza2 = doiraYuzi(radius2);
// let yuza3 = doiraYuzi(radius3);

// // Natijalarni chiqarish
// console.log(`1-doiraning yuzi (radius ${radius1}): ${yuza1.toFixed(2)} kv. birlik`);
// console.log(`2-doiraning yuzi (radius ${radius2}): ${yuza2.toFixed(2)} kv. birlik`);
// console.log(`3-doiraning yuzi (radius ${radius3}): ${yuza3.toFixed(2)} kv. birlik`);


//  8-misol

// function perimetr(a, b) {
//     let c = Math.sqrt(a * a + b * b);  // Pifagor teoremasi bo'yicha gipotenusani hisoblash
//     return a + b + c;  // Perimetrni hisoblash (katetlar + gipotenusa)
// }

// // Katetlar a va b
// let a = 3;
// let b = 4;

// // Perimetrni hisoblash
// let p = perimetr(a, b);

// // Natijalarni chiqarish
// console.log(`Tog'ri burchakli uchburchakning perimetri: ${p.toFixed(2)} birlik`);


//  9-misol

// let y = 45
// let e = 43
// let o = 67

// function sum (y,e,o) {
//     return y + e + o
// }

// console.log (sum(y,e,o))


//  10- misol

// function chorak_aniqlash(x, y) {
//     if (x > 0 && y > 0) {
//         return "Birinci chorak";
//     } else if (x < 0 && y > 0) {
//         return "Ikkinchi chorak";
//     } else if (x < 0 && y < 0) {
//         return "Uchinchi chorak";
//     } else if (x > 0 && y < 0) {
//         return "To'rtinchi chorak";
//     } else if (x == 0 && y != 0) {
//         return "Y o'qi";
//     } else if (y == 0 && x != 0) {
//         return "X o'qi";
//     } else {
//         return "Koordinatalar nuqtasi (0,0)";
//     }
// }
// console.log(chorak_aniqlash(2, 3));  // Birinchi chorak
// console.log(chorak_aniqlash(-4, 5));  // Ikkinchi chorak
// console.log(chorak_aniqlash(-1, -2));  // Uchinchi chorak
// console.log(chorak_aniqlash(3, -4));  // To'rtinchi chorak
// console.log(chorak_aniqlash(0, 5));  // Y o'qi
// console.log(chorak_aniqlash(5, 0));  // X o'qi
// console.log(chorak_aniqlash(0, 0));  // Koordinatalar nuqtasi (0,0)



//  11-misol

// function juftYokiToq(x) {
//     if (x % 2 === 0) {
//         return true;  // Juft son
//     } else {
//         return false;  // Toq son
//     }
// }

// console.log(juftYokiToq(4));  // true (Juft son)
// console.log(juftYokiToq(7));  // false (Toq son)
// console.log(juftYokiToq(10)); // true (Juft son)


//  12- misol

// function fibonacci(N) {
//     if (N === 0) {
//         return 0;  // F(0) = 0
//     } else if (N === 1) {
//         return 1;  // F(1) = 1
//     }
    
//     let a = 0, b = 1;
//     for (let i = 2; i <= N; i++) {
//         let next = a + b;
//         a = b;
//         b = next;
//     }
//     return b;
// }

// console.log(fibonacci(0));  // 0
// console.log(fibonacci(1));  // 1
// console.log(fibonacci(5));  // 5
// console.log(fibonacci(10)); // 55


// 13-misol

// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// function Frac1(a, b, p, q) {
//     let gcd_ab = gcd(a, b);
//     let gcd_pq = gcd(p, q);
//     return [(a / gcd_ab) / (p / gcd_pq), (b / gcd_ab) / (q / gcd_pq)];
// }

// // Misol uchun
// let result47 = Frac1(6, 9, 2, 4);
// console.log(`Qisqartirilgan kasrlar: ${result47[0]}, ${result47[1]}`);


//  14-misol

// function gcd(a, b) {
//     // EKUK (Eng Kichik Umumiy Kvadrat) funksiyasini hisoblash uchun, biz GCD (Eng Katta Umumiy Bo'luvchi) funksiyasiga ehtiyojimiz bor
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// function EKUK(a, b) {
//     return (a * b) / gcd(a, b);
// }

// function FunSimple48(A, B, C, D) {
//     return [EKUK(A, B), EKUK(C, D)];
// }

// // Misol uchun
// let result48 = FunSimple48(4, 6, 8, 12);
// console.log(`Juftliklar uchun EKUK: ${result48[0]}, ${result48[1]}`);


//  15-misol

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function EKUK(a, b) {
    return (a * b) / gcd(a, b);
}

function EKUK3(A, B, C) {
    // A, B, va C sonlarining EKUKini hisoblash
    return EKUK(EKUK(A, B), C);
}

// Misol uchun
let result49 = EKUK3(4, 6, 8);
console.log(`Uchta sonning EKUK: ${result49}`)
