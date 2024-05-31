import { useState } from 'react';

const HookUseState = () => {
  //* 1 - useState
  let userName = 'João';

  const [name, setName] = useState('Henrique');

  const changeNames = () => {
    userName = 'João Souza';

    setName('Henrique Junqueira');

    console.log(userName);
  };
  console.log(name);

  //* 2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (event) => {
    event.preventDefault();

    // envio a uma API
    console.log(age);
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes!</button>
      {/* 2 - useState e input */}
      <p>Digite a sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos!</p>
      <hr />
    </div>
  );
};

export default HookUseState;
