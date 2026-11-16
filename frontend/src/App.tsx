
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>My First React Application</h1>

      <p>Welcome to React!</p>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;
