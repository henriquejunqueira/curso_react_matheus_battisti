import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    { id: 1, brand: 'Fiat', color: 'Red', door: 4 },
    { id: 2, brand: 'Gol', color: 'Black', door: 2 },
    { id: 3, brand: 'VW', color: 'White', door: 4 },
  ];

  return (
    <div className="App">
      <h1 className="title">Carros</h1>
      <div className="carContainer">
        {cars.map((car) => (
          // <CarDetails
          //   key={car.id}
          //   brand={car.brand}
          //   color={car.color}
          //   door={car.door}
          // />
          <CarDetails car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
