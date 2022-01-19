const resultSort = (number, check) => {
  const aleatorio = Math.floor(Math.random()*6);
  return check(number, aleatorio) ? 'Parabéns': 'Não foi dessa vez';
}

const check = (apostado, sorteado) => (apostado === sorteado) ? true: false;  

console.log(resultSort(5, check));