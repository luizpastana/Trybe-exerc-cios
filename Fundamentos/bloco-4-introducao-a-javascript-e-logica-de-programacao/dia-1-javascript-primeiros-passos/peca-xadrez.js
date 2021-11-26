let peca = 'Rainha';
let pecaMinusculo = '';

pecaMinusculo = peca.toLowerCase();

switch(pecaMinusculo){
    case "peao":
        console.log("Eu só ando para frente");
        break;
    case "torre":
        console.log("Eu ando para qqr lado, mas sempre reto");
        break;
    case "cavalo":
        console.log("Eu ando em 'L'");
        break;
    case "rei":
        console.log("Eu ando para qualquer lado, mas apenas uma casa");
        break;
    case "rainha":
        console.log("Eu faço o que eu quiser (kkk)");
        break;
    case "bispo":
        console.log("Eu ando para qualque lado, mas sempre de esquelha");
        break;
}
