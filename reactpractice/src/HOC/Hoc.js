import { useState } from "react";
export const counterHoc = (OldComponet) => {
  return function EnhancedComponent() {
    const [count, setCount] = useState(0);
    return (
      <OldComponet
        count={count}
        increment={() => setCount(count + 1)}
        decrement={() => setCount(count - 1)}
      />
    );
  };
};
