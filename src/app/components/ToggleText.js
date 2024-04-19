import React, { useState } from 'react';

export default function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Text</button>
      {isVisible && <div>Hello, World</div>}
    </div>
  );
}
