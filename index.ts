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

// Qo'shimcha masalalar //

// 1.
// Har xil turdagi ma'lumotlarni saqlash
function Qiymati(value: any): void {
    console.log(value);
  }
  
  Qiymati(5);
  Qiymati("Hello");
  Qiymati(true);


// 2.
// O'zgaruvchini any sifatida belgilash
let TasodifiyQiymat: any;

TasodifiyQiymat = 10;
console.log(TasodifiyQiymat);

TasodifiyQiymat = "TypeScript";
console.log(TasodifiyQiymat);

TasodifiyQiymat = [1, 2, 3];
console.log(TasodifiyQiymat);

// 3.
// String sifatida o'zgartirish
let qiymat: undefined | string
qiymat = "Salom TypeScript!";
let stringLength: number = (qiymat as string).length;
console.log(stringLength);

// 4.
// Number sifatida o'zgartirish
let raqam: string | number;
raqam = "123";
let raqamLength: number = (raqam as string).length;
console.log(raqamLength)

// 5.
// Boolean sifatida o'zgartirish
let booleanValue: string | boolean;
booleanValue = "true";
let isTrue: boolean = (booleanValue as unknown as boolean);
console.log(isTrue);

// 6.
// Object sifatida  o'zgartirish
let object: any = { name: "John", age: 30 }
let person: { name: string, age: number } = object as { name: string, age: number }
console.log(person.name, person.age)



  