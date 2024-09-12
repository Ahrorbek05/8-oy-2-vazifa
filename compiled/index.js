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
