import { useState } from 'react';

export const useInputChange = (props) => {
  const [input, setInput] = useState({ ...props });

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  return [input, handleInputChange];
};
