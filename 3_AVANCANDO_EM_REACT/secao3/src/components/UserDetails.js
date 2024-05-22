const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <h2>Detalhes do(a) usuário(a) {nome}</h2>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissão: {profissao}</li>
      </ul>
      {idade >= 18 ? (
        <p>{nome} pode tirar carteira</p>
      ) : (
        <p>{nome} NÃO pode tirar carteira</p>
      )}
    </div>
  );
};

export default UserDetails;
