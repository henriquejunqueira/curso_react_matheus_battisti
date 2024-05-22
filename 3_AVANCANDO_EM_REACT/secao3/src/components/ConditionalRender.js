import { useState } from 'react';

const ConditionalRender = () => {
  const [x] = useState(false);

  //   const [name] = useState('João');
  const [name, setName] = useState('Henrique');

  return (
    <div>
      <h2>Isso será exibido?</h2>
      {/* Condicional simples: se x for true, é renderizado o parágrafo abaixo na tela */}
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}

      {/* Condicional ternária */}
      <h2>If ternário</h2>
      {name === 'João' ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName('João')}>Clica aqui!</button>
    </div>
  );
};

export default ConditionalRender;
