import React, { useState } from 'react';

export default function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count123, setCount] = useState({
    count: 2
  });
  console.log(useState(0))
  return (
    <div>
      <p>You clicked {count123.count} times</p>
      <button onClick={() => setCount(count123.count + 1)}>
        Click me
      </button>
    </div>
  );
}