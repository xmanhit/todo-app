import { useState } from "react";

const useOptionState = (initialValue) => {
  const [optionName, setOptionName] = useState(initialValue);

  return {
    optionName,
    setOptionName: (event) => {
      setOptionName(event.target.value);
    },
  };
};

export default useOptionState;
