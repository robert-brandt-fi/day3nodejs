let a = 5;
let b = 2;
let c = 3;
let sum;

for(let i = 1; i <= 3; i++) {
    sum = (a * (b + i)) / c;
    console.log(`Summasi on ${sum}.`);
}

console.log(`Viimeinen summa on ${sum}.`);