import './App.css';

import { useState, useEffect } from 'react';

//* 4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products';

function App() {
  const [products, setProducts] = useState([]);

  //* 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  //* 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url);
  //     const data = await response.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  //* 2 - adição de produtos
  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = {
      name,
      price,
    };

    // const response = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(product),
    // });

    // //* 3 - carregamento dinâmico
    // const addedProduct = await response.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    //* 5 - refatorando post
    httpConfig(product, 'POST');

    setName('');
    setPrice('');
  };

  //* 8 - desafio 6
  const handleRemove = (id) => {
    httpConfig(id, 'DELETE');
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}
                <button onClick={() => handleRemove(product.id)}>
                  Excluir
                </button>
              </li>
            ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>

          {/* 7 - state de loading no post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
