import { useState, useMemo } from 'react';
import Child from './Child';

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  console.log('App Component');

  // Expensive calculation without useMemo - har render pe calculate hoga
  const expensiveCalculation = () => {
    console.log('Expensive calculation running...');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  };

  // useMemo ke saath - sirf tab calculate hoga jab count change hoga
  const memoizedValue = useMemo(() => {
    console.log('Memoized calculation running...');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  }, [count]); // dependency array - sirf count change hone pe recalculate

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <div style={{ marginTop: '20px' }}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Type something...'
        />
        <p>Name: {name}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p>Expensive Value (without memo): {expensiveCalculation()}</p>
        <p>Memoized Value: {memoizedValue}</p>
      </div>
    </div>
  );
};

export default App;
