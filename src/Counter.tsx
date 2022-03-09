import Button from '@mui/material/Button';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
      Click me : {count}
    </Button>
  );
}

export default Counter;
