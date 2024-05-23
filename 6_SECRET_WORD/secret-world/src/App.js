//? CSS
import './App.css';

//? React
import { useCallback, useEffect, useState } from 'react';

//? data
import { wordsList } from './data/words';

//? Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
];

const guessesQuantity = 3; // ! quantidade de tentativas

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState(''); // ! palavra
  const [pickedCategory, setPickedCategory] = useState(''); // ! categoria
  const [letters, setLetters] = useState([]); // ! letra

  const [guessedLetters, setGuessedLetters] = useState([]); // ! letras certas
  const [wrongLetters, setWrongLetters] = useState([]); // ! letras erradas
  const [guesses, setGuesses] = useState(guessesQuantity); // ! tentativas
  const [score, setScore] = useState(0); // ! pontuação

  const pickWordAndCategory = useCallback(() => {
    // ! pega a chave do objeto wordsList do arquivo de palavras e armazena em categories
    const categories = Object.keys(words);

    // ! recebe de 0 até o número de categorias
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //* pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  //* starts the secret word game
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates();

    //* pick word and pick category
    const { word, category } = pickWordAndCategory();

    //* create an array of letters
    let wordLetters = word.split(''); // ! divide a palavra em letras

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //* fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  //* process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    //* check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    //* push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  //* check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      // reset all states
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  //* check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]; // ! cria um array de letras únicas. ex: ovo

    //* win condition
    if (guessedLetters.length === uniqueLetters.length) {
      //* add score
      setScore((actualScore) => (actualScore += 100)); // ! aumenta a pontuação caso vença

      //* restart game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  //* restarts the game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQuantity);

    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
