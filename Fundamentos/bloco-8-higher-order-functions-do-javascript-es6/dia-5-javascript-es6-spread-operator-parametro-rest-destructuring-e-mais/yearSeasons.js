
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

({ spring, summer, autumn, winter } = yearSeasons);

const mesesDoAno = [...spring, ...summer, ...autumn, ...winter];

const mesesEmOrdem = [ winter[1], winter[2], ...spring, ...summer, ...autumn, winter[0] ];

// console.log(mesesDoAno);
console.log(mesesEmOrdem);