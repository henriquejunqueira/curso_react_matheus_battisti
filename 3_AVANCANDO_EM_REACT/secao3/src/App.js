import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  // const nameUser = 'Joaquim';
  const [userName] = useState('Maria');

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0 },
    { id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 34343 },
    { id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 234 },
  ];

  const users = [
    { id: 1, nome: 'Henrique', idade: 30, profissao: 'Desenvolvedor' },
    { id: 2, nome: 'Maria', idade: 26, profissao: 'Médica' },
    { id: 3, nome: 'João', idade: 16, profissao: 'Estudante' },
  ];

  function showMessage() {
    console.log('Evento do componente pai!');
  }

  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* props */}
      {/* <ShowUserName name={nameUser} /> */}
      <ShowUserName name={userName} />

      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />

      {/* Reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />

      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* Fragment */}
      <Fragment propFragment="teste" />

      {/* Children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing2">
        <h5>Testando o container</h5>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* State Lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      {/* Desafio 4 */}
      {users.map((user) => (
        <UserDetails
          key={user.id}
          nome={user.nome}
          idade={user.idade}
          profissao={user.profissao}
        />
      ))}
    </div>
  );
}

export default App;
