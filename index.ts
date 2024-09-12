// 1

let ism: string;
let yosh: number;
let talabami: boolean;
let hobby: string | null;

function stringgaAylantir(qiymat: number | string): string {
    return qiymat.toString();
}


// 2

interface Kitob {
    sarlavha: string;
    muallif: string;
    nashrYili: number;
    sahifalarSoni: number;
    mavjud: boolean;
}

const kitob1: Kitob = { 
    sarlavha: "O'tgan kunlar",
    muallif: "Abdulla Qodiriy", 
    nashrYili: 1926, sahifalarSoni: 300, 
    mavjud: true };
const kitob2: Kitob = { 
    sarlavha: "Mehrobdan chayon", 
    muallif: "Abdulla Qodiriy", 
    nashrYili: 1930, 
    sahifalarSoni: 320, 
    mavjud: false };

function kitobHaqidaMalumot(kitob: Kitob): string {
    return `${kitob.sarlavha}, 
    muallifi: ${kitob.muallif}, 
    nashr yili: ${kitob.nashrYili}, 
    sahifalar soni: ${kitob.sahifalarSoni}, 
    mavjud: ${kitob.mavjud}`;
}
   
// 3

class Kutubxona {
    kitoblar: Kitob[] = [];

    kitobQoshish(kitob: Kitob) {
        this.kitoblar.push(kitob);
    }

    kitobniTopish(sarlavha: string): Kitob | undefined {
        return this.kitoblar.find(kitob => kitob.sarlavha === sarlavha);
    }

    mavjudKitoblarSoni(): number {
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

