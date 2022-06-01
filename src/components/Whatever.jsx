import { useState } from 'react';

import React from 'react';

const Whatever = () => {
  const [state, setState] = useState('Initial state');
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState('Buttob clicked')}>Click me</button>
    </div>
  );
};

export default Whatever;
 