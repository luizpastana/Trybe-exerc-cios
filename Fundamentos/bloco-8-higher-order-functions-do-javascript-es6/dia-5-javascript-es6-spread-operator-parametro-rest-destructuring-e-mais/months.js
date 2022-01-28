const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto'];
const objMeses = {...meses.sort((mes, mes1) => mes - mes1)};
console.log(objMeses);
const objMesesSemIndex = {...meses.sort()};
console.log(objMesesSemIndex);