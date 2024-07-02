//* 3 Filter
const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: 'Henrique', available: true },
  { name: 'Pedro', available: false },
  { name: 'Maria', available: false },
  { name: 'Ana', available: true },
];

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);

const filmes = [
  {
    nome: 'Hulk',
    anoLancamento: 2003,
  },
  {
    nome: 'O Dia Depois de Amanha',
    anoLancamento: 2004,
  },
  {
    nome: 'A Múmia',
    anoLancamento: 1999,
  },
  {
    nome: 'Planeta dos Macacos',
    anoLancamento: 2001,
  },
  {
    nome: 'Terremoto',
    anoLancamento: 2018,
  },
  {
    nome: 'Moonfall - Ameaça Lunar',
    anoLancamento: 2022,
  },
  {
    nome: 'A Chamada',
    anoLancamento: 2023,
  },
  {
    nome: 'Coringa',
    anoLancamento: 2019,
  },
];

const filmesAntigos = filmes.filter((filme) => {
  if (filme.anoLancamento < 2010) {
    return filme.nome;
  }
});

console.log(filmesAntigos);
