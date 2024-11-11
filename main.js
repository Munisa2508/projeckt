//  1- misol 

let a= 6
if (a > 0) console.log(++a)
else console.log(a)


//  2-misol

let b = -6;  // Berilgan butun son

if (b > 0) {
  b += 1;  // Agar son musbat bo'lsa, 1 ga oshir
}
else {
  b -= 2;  // Agar son manfiy yoki nol bo'lsa, 2 ga kamaytir
}

console.log(b);  // Hosil bo'lgan sonni konsolga chiqar

//  3- misol

let c= 0
if (c > 0) {
     c +=1;
}
if ( c== 0) {
     c +=10
}
else {
     c-=2;
}

console.log(c)


// 4-misol

let k = 3;  
let y = -5; 
let z = -7;  

let positiveCount = 0;  // Musbat sonlarni sanash uchun o'zgaruvchi


if (k > 0) positiveCount++;
if (y > 0) positiveCount++;
if (z > 0) positiveCount++;


console.log("Musbat sonlar soni:", positiveCount);


// 5-misol

let m = 2;
let n = -8;
let o = 7;

let musbat_sonlar = 0;
let manfiy_sonlar = 0;


if (m > 0) musbat_sonlar++;  
else if (m < 0) manfiy_sonlar++;  

if (n > 0) musbat_sonlar++; 
else if (n < 0) manfiy_sonlar++; 

if (o > 0) musbat_sonlar++;  
else if (o < 0) manfiy_sonlar++; 


console.log("Manfiy sonlar soni:", manfiy_sonlar);
console.log("Musbat sonlar soni:", musbat_sonlar);


// 6-misol

let u = 9
let v = 5

if ( u > v) {
     console.log("Katta son;" ,u)
 }

if (u < v) {
     console.log("Kichik son;", v)
 }

else console.log("Ikkala son teg!")


//  7-misol

let g = 5
let t = 8

if (g < t) {
     console.log("Kichik son;", g)
}

else console.log("Ikkala son teg!")


//  8-misol

let w = 43
let e = 33


if (w > e) console.log("katta son;", w)

console.log("kichik son;", e)





   

