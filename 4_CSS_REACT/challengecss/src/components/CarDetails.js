import styles from './CarDetails.module.css';

// const CarDetails = ({ brand, color, door }) => {
const CarDetails = ({ car }) => {
  return (
    <div className={styles.card}>
      {/* <h2>Detalhes do carro:</h2>
      <ul id={styles.listCars}>
        <li>Marca: {car.brand}</li>
        <li>Cor: {car.color}</li>
        <li>Portas: {car.doors}</li>
      </ul> */}
      <h1>{car.brand}</h1>
      <p>Cor: {car.color}</p>
      <p>Portas: {car.doors}</p>
    </div>
  );
};

export default CarDetails;
