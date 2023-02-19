import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedState = JSON.stringify(state);
      window.localStorage.setItem(key, serializedState);
      // toast.success('Item saved successfully!');
    } catch (error) {
      console.error(error);
    }
  }, [state, key]);

  const clean = () => {
    window.localStorage.clear();
    setState([]);
  };

  // const showToastMessage = () => {
  //   toast.success('Success add cost!', {
  //       position: toast.POSITION.TOP_RIGHT
  //   });};

  return [state, setState, clean];
};