const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const gabarito = (rigth, student, callback) => {
  console.log(callback(rigth, student));
}

const check = (certas, estudantes) => {
  let count = 0;
  for (let i = 0; i < certas.length; i += 1) {
    if (estudantes[i] === 'N.A') {continue;}
    if (certas[i] === estudantes[i]) {
      count += 1;
    } else {
      count -= 0.5;
    }    
  }
  return count;
}
gabarito(RIGHT_ANSWERS, STUDENT_ANSWERS, check);