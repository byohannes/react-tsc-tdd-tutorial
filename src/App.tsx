import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State:", count);
    console.log("Ref:", countRef.current);
  };

  return (
    <div className="App">
      <>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={handleIncrement}>Increment</button>
      </>
    </div>
  );
}

export default App;

// An Example of Accessing DOM elements using useRef

// import React, { useRef } from 'react';

// function App() {
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleButtonClick = () => {
//     // focus the input element if it exists
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <div className="App">
//       <input ref={inputRef} type="text" />
//       <button onClick={handleButtonClick}>Focus the input</button>
//     </div>
//   );
// }

// export default App;
