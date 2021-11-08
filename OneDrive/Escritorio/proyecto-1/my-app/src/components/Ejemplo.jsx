import React, { useState } from 'react';

function Ejemplo() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Pincha ctm
      </button>
    </div>
  );
}
export default Ejemplo