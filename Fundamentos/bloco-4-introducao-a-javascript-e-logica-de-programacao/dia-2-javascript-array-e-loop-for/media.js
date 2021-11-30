let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let soma = 0;

for (const iter of numbers) {
    soma += iter;
}
media = soma/numbers.length;

if(media > 20){
    console.log('Valor maior que vinte.');
}else{
    console.log('Valor menor que vinte.');
}

console.log(media);