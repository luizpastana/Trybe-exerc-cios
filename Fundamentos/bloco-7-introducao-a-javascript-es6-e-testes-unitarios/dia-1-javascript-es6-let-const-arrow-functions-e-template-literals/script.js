const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
const elseScope = 'Não devo ser utilizada fora meu escopo (else)';  

const scope = escopo => (escopo ? `${ifScope}` : `${elseScope}`); 
console.log(scope(true));
console.log(scope(false));

// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(`${elseScope}`);
//     }
//   }

//   testingScope(true);
//   testingScope(false);


