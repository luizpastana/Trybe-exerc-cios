let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(number of numbers){
    console.log(number);
}

let count = 0;
for (const iterator of numbers) {
    count += iterator;
}
console.log(count);