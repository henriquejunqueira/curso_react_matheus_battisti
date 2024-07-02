// import { useContext } from 'react';
// import { CounterContext } from '../context/CounterContext';
import ChangeCounter from '../components/ChangeCounter';

import { useCounterContext } from '../hooks/useCounterContext';

import { useTitleColorContext } from '../hooks/useTitleColorContext';

const About = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - context mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>valor do contador: {counter}</p>
    </div>
  );
};

export default About;
