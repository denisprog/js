import {React, useState} from "react";
import Counter from './components/Counter'

function App() {
  const [string, setText] = useState("default text");




  return (
    <div className="App">
      <h1>{string}</h1>
      <input type="text" value={string} onChange={event => setText(event.target.value)} />

      <Counter/>
    </div>
  );
}

export default App;
