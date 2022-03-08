import './App.css';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center align-middle">
      <h1 className="font-bold text-2xl text-blue-900">
        React and Tailwind with Vitejs!
      </h1>
      <button onClick={() => setCount((count) => count + 1)}>Click me : {count}</button>
    </div>
  );
}

export default App;
