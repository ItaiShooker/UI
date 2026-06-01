import React, { useState } from 'react';

function Foo() {
  const [bar, setBar] = useState(0);
  console.log(bar);

  return (
    <button onClick={() => setBar(bar + 1)} style={{ margin: '10px', fontSize: '18px', background:'red' }}>
      Click count: {bar}
    </button>
  );
}

export default Foo;