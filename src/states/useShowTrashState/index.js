import { useState } from 'react';

const useShowTrashState = (initialValue) => {
  const [showTrash, setShowTrash] = useState(initialValue);

  return {
    showTrash,
    setShowTrash: (id) => setShowTrash(showTrash === id ? null : id)
  };
};

export default useShowTrashState;
