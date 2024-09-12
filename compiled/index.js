"use strict";
// 1
let ism;
let yosh;
let talabami;
let hobby;
function stringgaAylantir(qiymat) {
    return qiymat.toString();
}
const kitob1 = {
    sarlavha: "O'tgan kunlar",
    muallif: "Abdulla Qodiriy",
    nashrYili: 1926, sahifalarSoni: 300,
    mavjud: true
};
const kitob2 = {
    sarlavha: "Mehrobdan chayon",
    muallif: "Abdulla Qodiriy",
    nashrYili: 1930,
    sahifalarSoni: 320,
    mavjud: false
};
function kitobHaqidaMalumot(kitob) {
    return `${kitob.sarlavha}, 
    muallifi: ${kitob.muallif}, 
    nashr yili: ${kitob.nashrYili}, 
    sahifalar soni: ${kitob.sahifalarSoni}, 
    mavjud: ${kitob.mavjud}`;
}
// 3
class Kutubxona {
    constructor() {
        this.kitoblar = [];
    }
    kitobQoshish(kitob) {
        this.kitoblar.push(kitob);
    }
    kitobniTopish(sarlavha) {
        return this.kitoblar.find(kitob => kitob.sarlavha === sarlavha);
    }
    mavjudKitoblarSoni() {
        return this.kitoblar.length;
    }
}
const kutubxona = new Kutubxona();
kutubxona.kitobQoshish(kitob1);
kutubxona.kitobQoshish(kitob2);
const topilganKitob = kutubxona.kitobniTopish("O'tgan kunlar");
// 4
console.log(stringgaAylantir(123));
console.log(stringgaAylantir("Salom"));
console.log(kitobHaqidaMalumot(kitob1));
console.log(kitobHaqidaMalumot(kitob2));
console.log("Topilgan kitob:", topilganKitob);
console.log("Mavjud kitoblar soni:", kutubxona.mavjudKitoblarSoni());
// Qo'shimcha masalalar //
// 1.
// Har xil turdagi ma'lumotlarni saqlash
function Qiymati(value) {
    console.log(value);
}
Qiymati(5);
Qiymati("Hello");
Qiymati(true);
// 2.
// O'zgaruvchini any sifatida belgilash
let TasodifiyQiymat;
TasodifiyQiymat = 10;
console.log(TasodifiyQiymat);
TasodifiyQiymat = "TypeScript";
console.log(TasodifiyQiymat);
TasodifiyQiymat = [1, 2, 3];
console.log(TasodifiyQiymat);
// 3.
// String sifatida o'zgartirish
let qiymat;
qiymat = "Salom TypeScript!";
let stringLength = qiymat.length;
console.log(stringLength);
// 4.
// Number sifatida o'zgartirish
let raqam;
raqam = "123";
let raqamLength = raqam.length;
console.log(raqamLength);
// 5.
// Boolean sifatida o'zgartirish
let booleanValue;
booleanValue = "true";
let isTrue = booleanValue;
console.log(isTrue);
// 6.
// Object sifatida  o'zgartirish
let object = { name: "John", age: 30 };
let person = object;
console.log(person.name, person.age);
