//* 6 destructuring
const frutas = ['Maçã', 'Laranja', 'Mamão'];

const [fruta1, fruta2, fruta3] = frutas;

console.log(fruta1);

console.log(fruta3);

const productDetails = {
  name: 'Mouse',
  price: 39.99,
  category: 'Periféricos',
  color: 'Cinza',
};

const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productDetails;

console.log(
  `O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`
);
