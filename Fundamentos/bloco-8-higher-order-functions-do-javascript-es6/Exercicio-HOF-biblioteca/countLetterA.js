const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((arr, frase) => {
    arr + frase.split('').reduce((acc, crr) => {
      if (crr === 'a' || crr === 'A') {
        return acc + 1;
      }
      return acc; }, 0) 
    
    }, 0)
  // return acc;
  // return count;
}

console.log(containsA());