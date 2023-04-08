import React from "react";

function App() {
  const [count, setState] = React.useState(0);
  function increase() {
    setState(count + 1);
  }
  function decrease() {
    setState(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
