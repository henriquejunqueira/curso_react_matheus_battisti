import './MyForm.css';
import { useState } from 'react';

const MyForm = ({ user }) => {
  // 6 - controlled inputs
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const [bio, setBio] = useState('');

  //   console.log(name);
  //   console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault(); // ! Impede o recarregamento da página
    console.log('Enviando o formulário');
    console.log(name, email, bio);

    // 7 - limpar form
    setName('');
    setEmail('');
    setBio('');
  };

  return (
    <div>
      {/* 5 - envio de form */}

      {/* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome..."
            onChange={handleName}
            value={name}
          />
        </div>

        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail</span>

          {/* 4 - simplicação de manipulação de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite seu email... "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário..."
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
