import { useState } from 'react';
import Child from './Child';

const App = () => {
  const [count, setCount] = useState(0);
  console.log('App Component');
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '8px' }}>
        Decrement
      </button>
      <Child />
    </div>
  );
};

export default App;
