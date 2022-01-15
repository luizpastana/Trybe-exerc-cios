const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function keyList(objeto) {
  const myKeys = Object.keys(objeto);
  return myKeys;
};

// keyList(lesson1);

function objectLength(objeto) {
  const tamanho = keyList(objeto);
  return tamanho.length;
}

// console.log(objectLength(lesson1));

function objectValues(objeto) {
  const valores = Object.values(objeto);
  return valores;
}

const allLessions = {};
allLessions.lesson1 = Object.assign({}, lesson1);
allLessions.lesson2 = Object.assign({}, lesson2);
allLessions.lesson3 = Object.assign({}, lesson3);
console.log(allLessions);