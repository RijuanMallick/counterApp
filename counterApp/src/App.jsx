import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Counter App</div>
      <div>{count}</div>
      <div>

        
        <button onClick={() => setCount(count - 1)}>dec</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount(count + 1)}>inc</button>
      </div>
    </>
  );
};
export default App;
