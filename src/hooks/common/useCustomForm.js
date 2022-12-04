import { useState, useCallback } from "react";

const useCustomForm = (initialValue) => {
  const [formState, setFormState] = useState(initialValue);

  const handleFormStateChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setFormState((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    },
    [setFormState]
  );

  return {
    formState,
    handleFormStateChange,
  };
};

export default useCustomForm;
