const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function formatedBookNames() {
  // escreva seu código aqui
  const formatedNames = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}.`);
  return formatedNames;
}

// console.log(formatedBookNames(books));

function nameAndAge() {
  // escreva seu código aqui
  const newArrey = books.map((book) => {
    return {
    autor: book.author.name,
    age: book.releaseYear - book.author.birthYear
  }});
  return newArrey.sort((elementA, elementB) => elementA.age - elementB.age);
}

// console.log(nameAndAge(books));

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
}

// console.log(fantasyOrScienceFiction());

function oldBooksOrdered() {
  // escreva seu código aqui
  const oldBooks = books.filter((book) => 2022 - book.releaseYear > 60);
  const ordered = oldBooks.sort((book1, book2) => book1.releaseYear - book2.releaseYear);
  console.log(ordered);
}

// oldBooksOrdered();

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const obj = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
  const names = obj.map((book) => `${book.author.name}`);
  return names.sort();
}

// console.log(fantasyOrScienceFictionAuthors());

function oldBooks() {
  // escreva seu código aqui
  const oldBooks = books.filter((book) => 2022 - book.releaseYear > 60);
  const names = oldBooks.map((book) => `${book.name}`);
  return names;
}

// console.log(oldBooks());

function authorWith3DotsOnName() {
  // essa aqui tá díficil
}