import { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Henrique', 'Pedro', 'João']);
  const [frutas] = useState(['Mamão', 'Uva', 'Maçã']);

  const [users, setUsers] = useState([
    { id: 1, name: 'Henrique', age: 30 },
    { id: 2, name: 'João', age: 28 },
    { id: 3, name: 'Pedro', age: 44 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  //   const [products] = useState([
  //     { id: 1, name: 'Notebook', price: 2500.0 },
  //     { id: 2, name: 'Smart TV', price: 1800.0 },
  //     { id: 3, name: 'Frigde', price: 800.0 },
  //   ]);

  return (
    <div>
      <h2>Nomes:</h2>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>Frutas:</h2>
      <ul>
        {frutas.map((fruta, j) => (
          <li key={j}>{fruta}</li>
        ))}
      </ul>

      <h2>Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete random user</button>

      {/* <h2>Tabela produtos</h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
        <tr>
          {products.map((product) => (
            <>
              <td key={product.id}>{product.id}</td>
              <td key={product.id}>{product.name}</td>
              <td key={product.id}>{product.price}</td>
            </>
          ))}
        </tr>
      </table> */}
    </div>
  );
};

export default ListRender;
