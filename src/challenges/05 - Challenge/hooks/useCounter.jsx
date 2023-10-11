import { useState } from 'react';

function useCustomCounter(initialValue = 0) {
  const [customCount, setCustomCount] = useState(initialValue);

  const increaseCounter = () => {
    setCustomCount(customCount + 1);
  };

  const decreaseCounter = () => {
    setCustomCount(customCount - 1);
  };

  const resetCounter = () => {
    setCustomCount(initialValue);
  };

  return {
    customCount,
    increaseCounter,
    decreaseCounter,
    resetCounter,
  };
}

export default useCustomCounter;
