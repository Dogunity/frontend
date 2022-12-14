import { useState, useCallback } from "react";

const useCustomForm = () => {
  const [formValue, setFormValue] = useState({});

  const handleFormValueChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValue((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    },
    [setFormValue]
  );

  const setFormDefaultValue = useCallback(
    (value) => {
      setFormValue(value);
    },
    [setFormValue]
  );

  return {
    formValue,
    handleFormValueChange,
    setFormDefaultValue,
  };
};

export default useCustomForm;
