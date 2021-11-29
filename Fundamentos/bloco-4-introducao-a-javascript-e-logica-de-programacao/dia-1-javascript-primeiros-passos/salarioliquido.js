let salarioBruto = 4000;
let salarioBase = 0;
let salarioLiquido = 0;

//caucula INSS
let inss = 0;

if(salarioBruto < 1556.95){
    inss = 0.08 * salarioBruto;    
}
else if(salarioBruto < 2594.93){
    inss = 0.09 * salarioBruto;   
}
else if(salarioBruto < 5189.82){
    inss = 0.11 * salarioBruto;    
}else{
    inss = salarioBruto - 570.88;
}
salarioBase = salarioBruto - inss;

//calcula imposto de renda
let ir = 0;

if(salarioBase < 1903.98){
    ir = 0;
}
else if(salarioBase < 2826.66){
    ir = (0.075 * salarioBase) - 142.8;
}
else if(salarioBase < 3751.06){
    ir = (0.15 * salarioBase) - 354.8;
}
else if(salarioBase < 4664.69){
    ir = (0.225 * salarioBase) - 636.13;
}
else{
    ir = (0.275 * salarioBase) - 869.36;
}
salarioLiquido = salarioBase - ir;
console.log(salarioLiquido);