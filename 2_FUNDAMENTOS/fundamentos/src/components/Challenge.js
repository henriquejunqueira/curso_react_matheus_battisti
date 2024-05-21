const Challenge = () => {
  let valor1 = 10;
  let valor2 = 20;
  let soma = 0;

  const handleSomarValores = (e) => {
    soma = valor1 + valor2;
    console.log(`A soma de ${valor1} + ${valor2} é igual a ${soma}`);
  };

  return (
    <div>
      <p>Valor 1 é: {valor1}</p>
      <p>Valor 2 é: {valor2}</p>
      <button onClick={handleSomarValores}>Somar valores</button>
    </div>
  );
};

export default Challenge;
