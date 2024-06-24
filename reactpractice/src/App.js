import { useMemo } from "react";
import { counterHoc } from "./HOC/Hoc";

function App({ count, increment, decrement }) {
  const Factorial = useMemo(() => console.log("hiiii"), []);
  return (
    <div className="App">
      <h1> welcome to world</h1>
      <button onClick={increment}> Increment</button>
      {count}
      <button onClick={decrement}>Decrement</button>
      {Factorial}
    </div>
  );
}

export default counterHoc(App);
