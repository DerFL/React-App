import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [mlik_count, setMilk] = useState(0);
  const [oreo_count, setoreo] = useState(0);
  const [kitkat_count, setkitkat] = useState(0);

  return (
    <div className="container">
      <p>You have {mlik_count} bags of milk</p>
      <button onClick={() => setMilk(mlik_count + 1)}>
        Add
      </button>
      <button onClick={() => setMilk(mlik_count - 1)}>
        Remove
      </button>

      <p>You have {oreo_count} packs of oreos</p>
      <button onClick={() => setoreo(oreo_count + 1)}>
        Add
      </button>
      <button onClick={() => setoreo(oreo_count - 1)}>
        Remove
      </button>

      <p>You have {kitkat_count} bars of kitkat</p>
      <button onClick={() => setkitkat(kitkat_count + 1)}>
        Add
      </button>
      <button onClick={() => setkitkat(kitkat_count - 1)}>
        Remove
      </button>
    </div>
  );
}

export default App;
