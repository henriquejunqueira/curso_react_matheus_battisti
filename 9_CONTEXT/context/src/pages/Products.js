import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const Products = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>About</h1>
      <p>valor do contador: {counter}</p>
    </div>
  );
};

export default Products;
