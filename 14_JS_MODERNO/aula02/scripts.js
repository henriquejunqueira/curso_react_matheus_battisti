//* 2 arrow function
const sum = function sum(a, b) {
  return a + b;
};

// const arrowSum = (a, b) => {
//   return a + b;
// };

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return 'Olá ' + name + '!';
  } else {
    return 'Olá!';
  }
};

console.log(greeting('Henrique'));
console.log(greeting());

const testeArrow = () => console.log('testou!');

testeArrow();

const user = {
  name: 'Henrique',
  sayUserName() {
    var self = this;
    setTimeout(function () {
      console.log(self);
      console.log('Username: ' + this.name);
    }, 500);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log('Username: ' + this.name);
    }, 700);
  },
};

user.sayUserName();
user.sayUserNameArrow();
