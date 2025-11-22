import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ marginTop: 10 }}>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}
