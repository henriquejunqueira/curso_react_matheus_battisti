import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { HookUseContext } from './components/HookUseContext';

//* pages
import Home from './pages/Home';
import About from './pages/About';

// TODO - Anotações
// * Tipos de hooks:

// * useState() é como o set da POO, ele serve pra fazer a alteração e renderizar o valor

// * useReducer() é parecido com o useState, porém com a possibilidade de executar uma função na hora da alteração

// * useEffect() é utilizado para várias ações no App, desde alterações na DOM até requisições HTTP,
// * o useEffect é executado sempre que o valor das dependências dele são alteradas

// * useContext() é o hook utilizado para consumir um contexto, da Context API. Para usá-lo é necessário
// * criar o contexto e também o Provider. O useContext() permite compartilhar contextos entre componentes

// * useRef() pode ser utilizado como useState para gerenciar valores. A diferença é que ele é um objeto,
// * seu valor está na propriedade current. Outra particularidade do useRef é que ele não re-renderiza
// * o componente ao ser alterado. Pode ser utilizado quando não queremos renderizar novamente

// * useCallback() pode ser utilizado em duas situações. Ele memoriza uma função fazendo ela não ser
// * reconstruída a cada renderização de um componente. O primeiro caso é quando estamos prezando pela
// * performance, então não queremos que uma função complexa seja reconstruída toda vez. Já o segundo
// * é quando o próprio react nos indica que uma função deveria estar contida em um useCallback
// * Resumindo, o useCallback ajuda na performance

// * useMemo() garante a referência de um objeto, fazendo com que algo possa ser atrelado a uma
// * referência e não a um valor. Condiciona useEffects a uma variável de forma mais inteligente

// * useLayoutEffect() muito parecido com o useEffect, orém roda antes de renderizar o componente, ou seja
// * o hook é síncrono, bloqueando o carregamento da página. A idéia é executar algo antes que o usuário
// * veja a página

// * useImperativeHandle() aciona ações em um outro componente de forma imperativa. Como não podemos
// * passar refs como props, precisamos usar uma função fowardRef

// * custom hooks são hooks que criamos muitas vezes para abstrair funções complexas do componente ou
// * simplesmente reaproveitar código. Esta técnica é muito utilizada em projetos profissionais

// * useDebugValue() é utilizado para debug. Aconselhado para ser utilizado em custom hooks. Adiciona
// * uma área no React Dev Tools, ela estará no componente em que o hook é utilizado

// ? Tipos de eventos
// ? onClick={função-chamada} executa quando recebe o evento de um clique no elemento com esse evento
// ? onSubmit={função-chamada} executa quando é clicado no botão submit e envia os dados do formulário
// ? onChange={função-chamada} executa quando o valor do elemento é alterado

function App() {
  return (
    <div className="App">
      <HookUseContext>
        <h1>React Hooks</h1>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
