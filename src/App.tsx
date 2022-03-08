import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center align-middle">
        <Typography variant="h3">React and Tailwind with Vitejs!</Typography>
      </div>
      <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
        Click me : {count}
      </Button>
    </>
  );
}

export default App;
